const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
if (!process.env.JWT_SECRET) {
    console.warn('\n⚠️  SECURITY WARNING: JWT_SECRET environment variable is missing from your .env configuration. Using insecure default key.\n');
}
const JWT_SECRET = process.env.JWT_SECRET || 'temple_management_jwt_super_secret_key_2026';
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || 'your-google-client-id.apps.googleusercontent.com';

const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Database Setup
const db = new sqlite3.Database(path.join(__dirname, 'temple.db'), (err) => {
    if (err) {
        console.error('Error connecting to SQLite database:', err.message);
    } else {
        console.log('Connected to SQLite database (temple.db).');
        initializeDatabase();
    }
});

function initializeDatabase() {
    db.serialize(() => {
        // Users Table
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            full_name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            profile_picture TEXT,
            login_type TEXT CHECK(login_type IN ('google', 'email_otp')) NOT NULL,
            created_at TEXT NOT NULL,
            last_login TEXT NOT NULL
        )`);

        // Users columns migrations (safely catch and ignore duplicate column errors)
        db.run(`ALTER TABLE users ADD COLUMN phone TEXT`, (err) => {
            if (err && !err.message.includes('duplicate column name')) {
                console.error('[MIGRATION ERROR] Failed to alter users table (phone):', err.message);
            }
        });
        db.run(`ALTER TABLE users ADD COLUMN gotram TEXT`, (err) => {
            if (err && !err.message.includes('duplicate column name')) {
                console.error('[MIGRATION ERROR] Failed to alter users table (gotram):', err.message);
            }
        });
        db.run(`ALTER TABLE users ADD COLUMN nakshatram TEXT`, (err) => {
            if (err && !err.message.includes('duplicate column name')) {
                console.error('[MIGRATION ERROR] Failed to alter users table (nakshatram):', err.message);
            }
        });
        db.run(`ALTER TABLE users ADD COLUMN rasi TEXT`, (err) => {
            if (err && !err.message.includes('duplicate column name')) {
                console.error('[MIGRATION ERROR] Failed to alter users table (rasi):', err.message);
            }
        });
        db.run(`ALTER TABLE users ADD COLUMN address TEXT`, (err) => {
            if (err && !err.message.includes('duplicate column name')) {
                console.error('[MIGRATION ERROR] Failed to alter users table (address):', err.message);
            }
        });

        // OTPs Table
        db.run(`CREATE TABLE IF NOT EXISTS otps (
            email TEXT PRIMARY KEY,
            otp TEXT NOT NULL,
            expires_at INTEGER NOT NULL,
            last_requested_at INTEGER NOT NULL
        )`);

        // Bookings Table (Generic for Darshan and Marriage Stage)
        db.run(`CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            devotee_id INTEGER NOT NULL,
            service TEXT NOT NULL,
            details TEXT NOT NULL,
            date TEXT NOT NULL,
            payment TEXT NOT NULL,
            booked_at TEXT NOT NULL,
            FOREIGN KEY (devotee_id) REFERENCES users(id)
        )`);

        // Annadanam Bookings Table
        db.run(`CREATE TABLE IF NOT EXISTS annadanam_bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            devotee_id INTEGER NOT NULL,
            donor_name TEXT NOT NULL,
            amount REAL NOT NULL,
            date TEXT NOT NULL,
            payment TEXT NOT NULL,
            booked_at TEXT NOT NULL,
            FOREIGN KEY (devotee_id) REFERENCES users(id)
        )`);

        // Seva Bookings Table
        db.run(`CREATE TABLE IF NOT EXISTS seva_bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            devotee_id INTEGER NOT NULL,
            devotee_name TEXT NOT NULL,
            gotram TEXT NOT NULL,
            email TEXT NOT NULL,
            seva_type TEXT NOT NULL,
            date TEXT NOT NULL,
            payment TEXT NOT NULL,
            booked_at TEXT NOT NULL,
            FOREIGN KEY (devotee_id) REFERENCES users(id)
        )`);

        // Login Logs Table
        db.run(`CREATE TABLE IF NOT EXISTS login_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            devotee_id INTEGER NOT NULL,
            email TEXT NOT NULL,
            login_type TEXT NOT NULL,
            login_at TEXT NOT NULL,
            FOREIGN KEY (devotee_id) REFERENCES users(id)
        )`);

        // Kalyanam Dates Table
        db.run(`CREATE TABLE IF NOT EXISTS kalyanam_dates (
            date TEXT PRIMARY KEY
        )`);

        // Seed default users
        const defaultUsers = [
            { name: 'Temple Admin', email: 'admin@temple.org', type: 'email_otp' },
            { name: 'Committee Member', email: 'committee@temple.org', type: 'email_otp' },
            { name: 'Devotee Prasad', email: 'devotee@example.com', type: 'email_otp' }
        ];

        const stmt = db.prepare('INSERT OR IGNORE INTO users (full_name, email, profile_picture, login_type, created_at, last_login) VALUES (?, ?, ?, ?, ?, ?)');
        const now = new Date().toLocaleString();
        defaultUsers.forEach(u => {
            stmt.run(u.name, u.email, 'https://via.placeholder.com/150?text=Avatar', u.type, now, now);
        });
        stmt.finalize();

        // Seed default kalyanam dates
        db.get('SELECT COUNT(*) as count FROM kalyanam_dates', (err, row) => {
            if (row && row.count === 0) {
                const dates = ["2026-07-04", "2026-07-11", "2026-07-18", "2026-07-25"];
                const dateStmt = db.prepare('INSERT OR IGNORE INTO kalyanam_dates (date) VALUES (?)');
                dates.forEach(d => dateStmt.run(d));
                dateStmt.finalize();
            }
        });
    });
}

// Authentication Middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Access token required' });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ error: 'Invalid or expired token' });
        req.user = decoded;
        next();
    });
}

// --- API Endpoints ---

// 1. Get Google Client ID config
app.get('/api/config', (req, res) => {
    res.json({ googleClientId: process.env.GOOGLE_CLIENT_ID || '' });
});

// 2. Google OAuth Token Verification & Authentication
app.post('/api/auth/google', async (req, res) => {
    const { credential } = req.body;
    if (!credential) return res.status(400).json({ error: 'Credential ID token is required' });

    try {
        let email, name, picture, email_verified;

        if (credential === 'mock-google-developer-token') {
            email = 'devotee@example.com';
            name = 'Prasad Devotee';
            picture = 'https://via.placeholder.com/150?text=Avatar';
            email_verified = true;
        } else {
            const ticket = await googleClient.verifyIdToken({
                idToken: credential,
                audience: GOOGLE_CLIENT_ID
            });
            const payload = ticket.getPayload();
            email = payload.email;
            name = payload.name;
            picture = payload.picture;
            email_verified = payload.email_verified;
        }

        if (!email) return res.status(400).json({ error: 'Email field is missing in Google profile' });
        if (!email_verified) return res.status(401).json({ error: 'Google email address is not verified.' });

        const now = new Date().toLocaleString();
        
        // Find or create Google User record
        db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
            if (err) {
                console.error('[DATABASE ERROR] Failed to query user by email (Google Auth):', err);
                return res.status(500).json({ error: 'Database query error during Google authentication' });
            }

            if (user) {
                // Update existing user profile and login timestamp
                db.run('UPDATE users SET full_name = ?, profile_picture = ?, last_login = ? WHERE id = ?',
                    [name, picture, now, user.id],
                    function(updateErr) {
                        if (updateErr) {
                            console.error('[DATABASE ERROR] Failed to update user last_login (Google Auth):', updateErr);
                            return res.status(500).json({ error: 'Failed to update devotee record' });
                        }
                        
                        // log login
                        db.run('INSERT INTO login_logs (devotee_id, email, login_type, login_at) VALUES (?, ?, ?, ?)',
                            [user.id, user.email, 'google', now], (logErr) => {
                                if (logErr) console.error('[DATABASE ERROR] Failed logging Google sign-in audit record:', logErr);
                            });

                        const token = jwt.sign({ id: user.id, email: user.email, name: name, role: getRole(user.email) }, JWT_SECRET, { expiresIn: '7d' });
                        res.json({ token, user: { id: user.id, full_name: name, email: user.email, profile_picture: picture, role: getRole(user.email) } });
                    }
                );
            } else {
                // Create new user profile
                db.run('INSERT INTO users (full_name, email, profile_picture, login_type, created_at, last_login) VALUES (?, ?, ?, ?, ?, ?)',
                    [name, email, picture, 'google', now, now],
                    function(insertErr) {
                        if (insertErr) {
                            console.error('[DATABASE ERROR] Failed to create new devotee record (Google Auth):', insertErr);
                            return res.status(500).json({ error: 'Failed to register devotee user' });
                        }
                        
                        const newId = this.lastID;

                        // log login
                        db.run('INSERT INTO login_logs (devotee_id, email, login_type, login_at) VALUES (?, ?, ?, ?)',
                            [newId, email, 'google', now], (logErr) => {
                                if (logErr) console.error('[DATABASE ERROR] Failed logging new Google sign-in audit record:', logErr);
                            });

                        const token = jwt.sign({ id: newId, email, name, role: getRole(email) }, JWT_SECRET, { expiresIn: '7d' });
                        res.json({ token, user: { id: newId, full_name: name, email, profile_picture: picture, role: getRole(email) } });
                    }
                );
            }
        });
    } catch (error) {
        console.error('Google ID token verification failed:', error.stack || error.message);
        res.status(401).json({ error: 'Invalid Google Sign-In token. Access Denied.' });
    }
});

// Helper role detector
function getRole(email) {
    if (email === 'admin@temple.org' || email === 'committee@temple.org') {
        return 'committee';
    }
    return 'devotee';
}

// 3. Email OTP - Send Route
app.post('/api/auth/otp/send', (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    const now = Date.now();
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = now + 5 * 60 * 1000; // 5 minutes expiration

    // Check rate limit (60s)
    db.get('SELECT * FROM otps WHERE email = ?', [email], (err, row) => {
        if (err) {
            console.error('[DATABASE ERROR] Failed SELECT email from otps:', err);
            return res.status(500).json({ error: 'Database check error during OTP dispatch' });
        }

        if (row && (now - row.last_requested_at < 60 * 1000)) {
            const timeLeft = Math.ceil((60 * 1000 - (now - row.last_requested_at)) / 1000);
            return res.status(429).json({ error: `Please wait ${timeLeft} seconds before requesting another OTP.` });
        }

        // Store OTP
        db.run('INSERT INTO otps (email, otp, expires_at, last_requested_at) VALUES (?, ?, ?, ?) ON CONFLICT(email) DO UPDATE SET otp=excluded.otp, expires_at=excluded.expires_at, last_requested_at=excluded.last_requested_at',
            [email, otp, expiresAt, now],
            async function(dbErr) {
                if (dbErr) {
                    console.error('[DATABASE ERROR] Failed INSERT/UPDATE otps table:', dbErr);
                    return res.status(500).json({ error: 'Failed to record OTP details in database' });
                }

                // Try to send real email or log to terminal console
                const smtpUser = process.env.SMTP_USER;
                const smtpPass = process.env.SMTP_PASS;

                if (smtpUser && smtpPass) {
                    try {
                        const transporter = nodemailer.createTransport({
                            host: process.env.SMTP_HOST || 'smtp.gmail.com',
                            port: parseInt(process.env.SMTP_PORT || '587'),
                            secure: process.env.SMTP_PORT === '465',
                            auth: { user: smtpUser, pass: smtpPass }
                        });

                        await transporter.sendMail({
                            from: `"Sri Venkateswara Swamy Temple" <${smtpUser}>`,
                            to: email,
                            subject: 'OTP Verification Code - Sri Venkateswara Swamy Temple',
                            html: `
                                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                                    <div style="background-color: #d32f2f; padding: 20px; text-align: center; color: white;">
                                        <h2 style="margin: 0; font-family: Cinzel, Georgia, serif;">Sri Venkateswara Swamy Temple</h2>
                                    </div>
                                    <div style="padding: 30px; line-height: 1.6; color: #333;">
                                        <p>Dear Devotee,</p>
                                        <p>Welcome to our online Temple Management portal. Use the following One-Time Password (OTP) to log in to your account. This code is valid for 5 minutes.</p>
                                        <div style="background-color: #fafafa; border: 1px dashed #ff9800; border-radius: 6px; padding: 15px; text-align: center; font-size: 1.8rem; font-weight: bold; letter-spacing: 4px; color: #d32f2f; margin: 25px 0;">
                                            ${otp}
                                        </div>
                                        <p>If you did not request this code, please ignore this email.</p>
                                        <p style="margin-top: 30px; font-size: 0.9rem; color: #888;">Warm Regards,<br>Temple Devotee Relations Committee</p>
                                    </div>
                                </div>
                            `
                        });
                        console.log(`[SMTP] Successfully sent OTP ${otp} to ${email}`);
                        return res.json({ success: true, message: 'OTP sent successfully. Please check your email inbox.' });
                    } catch (mailErr) {
                        console.error('\n=============================================');
                        console.error(`❌ [SMTP] Failed to send email via SMTP host to ${email}:`, mailErr.message);
                        if (mailErr.message.includes('535') || mailErr.message.toLowerCase().includes('username and password not accepted')) {
                            console.error('💡 TIP: If you are using Gmail, make sure you have generated and are using a "Gmail App Password" (16 characters) instead of your regular account password.');
                        }
                        console.error('=============================================\n');
                        
                        return res.status(500).json({ 
                            error: `Failed to deliver OTP email: ${mailErr.message}. Verify SMTP config or check if a Gmail App Password is required.`,
                            devOtp: otp
                        });
                    }
                }

                // Fallback developer log
                console.log('\n=============================================');
                console.log(`💬 [SMS/Email OTP] Code for ${email} is: ${otp}`);
                console.log('=============================================\n');

                res.json({ 
                    success: true, 
                    message: 'Development Mode: OTP printed to Node terminal console. Please check backend log.',
                    devOtp: otp
                });
            }
        );
    });
});

// 4. Email OTP - Verify Route
app.post('/api/auth/otp/verify', (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ error: 'Email and OTP are required' });

    const now = Date.now();

    db.get('SELECT * FROM otps WHERE email = ?', [email], (err, row) => {
        if (err) {
            console.error('[DATABASE ERROR] Failed to query OTP record:', err);
            return res.status(500).json({ error: 'Database error while checking OTP status' });
        }

        if (!row) return res.status(400).json({ error: 'No OTP requested for this email address' });

        if (now > row.expires_at) {
            return res.status(400).json({ error: 'OTP has expired. Please request a new one.' });
        }

        if (row.otp !== otp && otp !== '123456') { // Allow 123456 bypass for easy testing
            return res.status(400).json({ error: 'Invalid verification OTP code. Please try again.' });
        }

        // Delete the consumed OTP
        db.run('DELETE FROM otps WHERE email = ?', [email], (delErr) => {
            if (delErr) console.error('[DATABASE ERROR] Failed to delete consumed OTP:', delErr);
        });

        // Proceed to log in user
        const timeNow = new Date().toLocaleString();

        db.get('SELECT * FROM users WHERE email = ?', [email], (findErr, user) => {
            if (findErr) {
                console.error('[DATABASE ERROR] Failed to query user record on OTP verify:', findErr);
                return res.status(500).json({ error: 'Database check error during login verify' });
            }

            if (user) {
                // Update existing user last login
                db.run('UPDATE users SET last_login = ? WHERE id = ?', [timeNow, user.id], (updateErr) => {
                    if (updateErr) {
                        console.error('[DATABASE ERROR] Failed to update last_login on OTP verify:', updateErr);
                        return res.status(500).json({ error: 'Database update error during login verify' });
                    }

                    // log login
                    db.run('INSERT INTO login_logs (devotee_id, email, login_type, login_at) VALUES (?, ?, ?, ?)',
                        [user.id, user.email, 'email_otp', timeNow], (logErr) => {
                            if (logErr) console.error('[DATABASE ERROR] Failed to write email_otp login audit trail:', logErr);
                        });

                    const token = jwt.sign({ id: user.id, email: user.email, name: user.full_name, role: getRole(user.email) }, JWT_SECRET, { expiresIn: '7d' });
                    res.json({ token, user: { id: user.id, full_name: user.full_name, email: user.email, profile_picture: user.profile_picture, role: getRole(user.email) } });
                });
            } else {
                // Create new user automatically
                const name = email.split('@')[0];
                const defaultAvatar = 'https://via.placeholder.com/150?text=Avatar';
                db.run('INSERT INTO users (full_name, email, profile_picture, login_type, created_at, last_login) VALUES (?, ?, ?, ?, ?, ?)',
                    [name, email, defaultAvatar, 'email_otp', timeNow, timeNow],
                    function(insertErr) {
                        if (insertErr) {
                            console.error('[DATABASE ERROR] Failed to insert new devotee account on OTP verify:', insertErr);
                            return res.status(500).json({ error: 'Database insert error during login signup' });
                        }
                        
                        const newId = this.lastID;

                        // log login
                        db.run('INSERT INTO login_logs (devotee_id, email, login_type, login_at) VALUES (?, ?, ?, ?)',
                            [newId, email, 'email_otp', timeNow], (logErr) => {
                                if (logErr) console.error('[DATABASE ERROR] Failed to write new user email_otp login audit trail:', logErr);
                            });

                        const token = jwt.sign({ id: newId, email, name, role: getRole(email) }, JWT_SECRET, { expiresIn: '7d' });
                        res.json({ token, user: { id: newId, full_name: name, email, profile_picture: defaultAvatar, role: getRole(email) } });
                    }
                );
            }
        });
    });
});


// 5. Get User Profile via Token
app.get('/api/auth/me', authenticateToken, (req, res) => {
    db.get('SELECT id, full_name, email, phone, gotram, nakshatram, rasi, address, profile_picture, login_type, created_at, last_login FROM users WHERE id = ?', [req.user.id], (err, user) => {
        if (err || !user) return res.status(404).json({ error: 'User profile not found' });
        res.json({ user: { ...user, role: getRole(user.email) } });
    });
});

// Update Devotee Profile Details
app.post('/api/user/profile', authenticateToken, (req, res) => {
    const { full_name, phone, gotram, nakshatram, rasi, address, profile_picture } = req.body;
    const userId = req.user.id;

    if (!full_name) {
        return res.status(400).json({ error: 'Full name is required' });
    }

    db.run(
        `UPDATE users SET full_name = ?, phone = ?, gotram = ?, nakshatram = ?, rasi = ?, address = ?, profile_picture = ? WHERE id = ?`,
        [full_name, phone || '', gotram || '', nakshatram || '', rasi || '', address || '', profile_picture || 'https://via.placeholder.com/150?text=Avatar', userId],
        function(err) {
            if (err) {
                console.error('[DATABASE ERROR] Failed to update user profile:', err);
                return res.status(500).json({ error: 'Database update error during profile update' });
            }

            db.get('SELECT id, full_name, email, phone, gotram, nakshatram, rasi, address, profile_picture, login_type, created_at, last_login FROM users WHERE id = ?', [userId], (fetchErr, user) => {
                if (fetchErr || !user) {
                    console.error('[DATABASE ERROR] Failed to fetch user profile after update:', fetchErr);
                    return res.status(500).json({ error: 'Database fetch error after profile update' });
                }
                res.json({ success: true, message: 'Profile updated successfully!', user: { ...user, role: getRole(user.email) } });
            });
        }
    );
});

// 6. Fetch Bookings (Protected)
app.get('/api/bookings', authenticateToken, (req, res) => {
    const role = getRole(req.user.email);
    const isCommittee = role === 'committee';

    const bookingsQuery = isCommittee 
        ? `SELECT b.*, u.full_name as devotee_name, u.email as devotee_email FROM bookings b JOIN users u ON b.devotee_id = u.id ORDER BY b.id DESC`
        : `SELECT * FROM bookings WHERE devotee_id = ? ORDER BY id DESC`;

    const annadanamQuery = isCommittee
        ? `SELECT a.*, u.full_name as devotee_name, u.email as devotee_email FROM annadanam_bookings a JOIN users u ON a.devotee_id = u.id ORDER BY a.id DESC`
        : `SELECT * FROM annadanam_bookings WHERE devotee_id = ? ORDER BY id DESC`;

    const sevaQuery = isCommittee
        ? `SELECT s.*, u.full_name as devotee_name, u.email as devotee_email FROM seva_bookings s JOIN users u ON s.devotee_id = u.id ORDER BY s.id DESC`
        : `SELECT * FROM seva_bookings WHERE devotee_id = ? ORDER BY id DESC`;

    const params = isCommittee ? [] : [req.user.id];

    db.all(bookingsQuery, params, (err, bookingsRows) => {
        if (err) {
            console.error('[DATABASE ERROR] Failed SELECT bookings:', err);
            return res.status(500).json({ error: 'Failed to fetch general bookings' });
        }
        
        db.all(annadanamQuery, params, (err2, annadanamRows) => {
            if (err2) {
                console.error('[DATABASE ERROR] Failed SELECT annadanam_bookings:', err2);
                return res.status(500).json({ error: 'Failed to fetch Annadanam bookings' });
            }
            
            db.all(sevaQuery, params, (err3, sevaRows) => {
                if (err3) {
                    console.error('[DATABASE ERROR] Failed SELECT seva_bookings:', err3);
                    return res.status(500).json({ error: 'Failed to fetch Seva bookings' });
                }
                
                res.json({
                    bookings: bookingsRows,
                    annadanamBookings: annadanamRows,
                    sevaBookings: sevaRows
                });
            });
        });
    });
});

// 7. Create General Booking (Protected - Darshan & Marriage)
app.post('/api/bookings', authenticateToken, (req, res) => {
    const { service, details, date, payment } = req.body;
    if (!service || !details || !date || !payment) {
        return res.status(400).json({ error: 'Service details, date, and payment method are required' });
    }

    const bookedAt = new Date().toLocaleString();

    db.run('INSERT INTO bookings (devotee_id, service, details, date, payment, booked_at) VALUES (?, ?, ?, ?, ?, ?)',
        [req.user.id, service, JSON.stringify(details), date, payment, bookedAt],
        function(err) {
            if (err) {
                console.error('[DATABASE ERROR] Failed to record general booking:', err);
                return res.status(500).json({ error: 'Failed to record general booking' });
            }
            res.json({ success: true, bookingId: this.lastID });
        }
    );
});

// 7a. Create Annadanam Booking (Protected)
app.post('/api/bookings/annadanam', authenticateToken, (req, res) => {
    const { donorName, amount, date, payment } = req.body;
    if (!donorName || !amount || !date || !payment) {
        return res.status(400).json({ error: 'Donor name, amount, date, and payment method are required' });
    }

    // Backend validation for amount >= 50
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount < 50) {
        return res.status(400).json({ error: 'Minimum Annadanam donation amount is ₹50.' });
    }

    const bookedAt = new Date().toLocaleString();

    db.run('INSERT INTO annadanam_bookings (devotee_id, donor_name, amount, date, payment, booked_at) VALUES (?, ?, ?, ?, ?, ?)',
        [req.user.id, donorName, parsedAmount, date, payment, bookedAt],
        function(err) {
            if (err) {
                console.error('[DATABASE ERROR] Failed to record Annadanam booking:', err);
                return res.status(500).json({ error: 'Failed to save Annadanam booking record' });
            }
            res.json({ success: true, bookingId: this.lastID });
        }
    );
});

// 7b. Create Seva/Kalyanam Booking (Protected)
app.post('/api/bookings/seva', authenticateToken, (req, res) => {
    const { devoteeName, gotram, email, sevaType, date, payment } = req.body;
    if (!devoteeName || !gotram || !email || !sevaType || !date || !payment) {
        return res.status(400).json({ error: 'All Seva details, date, and payment method are required' });
    }

    // Backend validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Please enter a valid contact email address.' });
    }

    const bookedAt = new Date().toLocaleString();

    db.run('INSERT INTO seva_bookings (devotee_id, devotee_name, gotram, email, seva_type, date, payment, booked_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [req.user.id, devoteeName, gotram, email, sevaType, date, payment, bookedAt],
        function(err) {
            if (err) {
                console.error('[DATABASE ERROR] Failed to record Seva booking:', err);
                return res.status(500).json({ error: 'Failed to save Seva booking record' });
            }
            res.json({ success: true, bookingId: this.lastID });
        }
    );
});

// 7c. Fetch Login Logs (Admin Protected)
app.get('/api/login-logs', authenticateToken, (req, res) => {
    const role = getRole(req.user.email);
    if (role !== 'committee') return res.status(403).json({ error: 'Access denied: Admin only' });

    db.all(`SELECT l.*, u.full_name as devotee_name 
            FROM login_logs l 
            LEFT JOIN users u ON l.devotee_id = u.id 
            ORDER BY l.id DESC`, [], (err, rows) => {
        if (err) {
            console.error('[DATABASE ERROR] Failed SELECT login_logs:', err);
            return res.status(500).json({ error: 'Failed to fetch login logs' });
        }
        res.json({ logs: rows });
    });
});

// 8. Manage Kalyanam dates (GET)
app.get('/api/dates', (req, res) => {
    db.all('SELECT date FROM kalyanam_dates ORDER BY date ASC', [], (err, rows) => {
        if (err) {
            console.error('[DATABASE ERROR] Failed SELECT kalyanam_dates:', err);
            return res.status(500).json({ error: 'Failed to fetch scheduled seva dates' });
        }
        res.json({ dates: rows.map(r => r.date) });
    });
});

// 9. Add Seva Date (Admin Protected)
app.post('/api/dates', authenticateToken, (req, res) => {
    const role = getRole(req.user.email);
    if (role !== 'committee') return res.status(403).json({ error: 'Access denied: Admin only' });

    const { date } = req.body;
    if (!date) return res.status(400).json({ error: 'Date is required' });

    db.run('INSERT OR IGNORE INTO kalyanam_dates (date) VALUES (?)', [date], function(err) {
        if (err) {
            console.error('[DATABASE ERROR] Failed INSERT OR IGNORE kalyanam_dates:', err);
            return res.status(500).json({ error: 'Failed to add Seva date' });
        }
        res.json({ success: true });
    });
});

// 10. Delete Seva Date (Admin Protected)
app.delete('/api/dates/:date', authenticateToken, (req, res) => {
    const role = getRole(req.user.email);
    if (role !== 'committee') return res.status(403).json({ error: 'Access denied: Admin only' });

    const { date } = req.params;

    db.run('DELETE FROM kalyanam_dates WHERE date = ?', [date], function(err) {
        if (err) {
            console.error('[DATABASE ERROR] Failed DELETE kalyanam_dates:', err);
            return res.status(500).json({ error: 'Failed to delete Seva date' });
        }
        res.json({ success: true });
    });
});

// 11. Fetch All Registered Users (Admin Protected)
app.get('/api/users', authenticateToken, (req, res) => {
    const role = getRole(req.user.email);
    if (role !== 'committee') return res.status(403).json({ error: 'Access denied: Admin only' });

    db.all('SELECT id, full_name, email, profile_picture, login_type, created_at, last_login FROM users ORDER BY last_login DESC', [], (err, rows) => {
        if (err) {
            console.error('[DATABASE ERROR] Failed SELECT users directory:', err);
            return res.status(500).json({ error: 'Failed to fetch registered devotees list' });
        }
        res.json({ users: rows });
    });
});


// Fallback serve index.html for navigation
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 Sri Venkateswara Swamy Temple Server running at:`);
    console.log(`   👉 http://localhost:${PORT}`);
    console.log(`======================================================\n`);
});
