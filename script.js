document.addEventListener('DOMContentLoaded', () => {
    
    // --- Translation System ---
    const translations = {
        en: {
            "page-title": "Sri Venkateswara Swamy Temple, Nallacheruvu",
            "nav-logo": "Sri Venkateswara Swamy Temple",
            "nav-home": "Home",
            "nav-darshan": "Darshan",
            "nav-kalyanam": "Kalyanam",
            "nav-marriage": "Marriage",
            "nav-annadanam": "Annadanam",
            "nav-gallery": "Gallery",
            "nav-social": "Connect",
            "hero-title": "Experience the Divine Grace",
            "hero-subtitle": "Welcome to the sacred abode. Book your darshan and special poojas online.",
            "hero-btn-darshan": "Book Darshan",
            "hero-btn-kalyanam": "Kalyanam Tickets",
            "darshan-title": "Book Darshan Tickets",
            "darshan-subtitle": "Plan your visit by booking darshan tickets in advance for a smooth experience.",
            "d-lbl-name": "Full Name",
            "d-ph-name": "Enter your full name",
            "d-lbl-date": "Preferred Date",
            "d-lbl-tickets": "Number of Tickets",
            "d-lbl-type": "Darshan Type",
            "d-opt-select": "Select Type",
            "d-opt-free": "Sarva Darshanam (Free)",
            "d-opt-special": "Special Entry Darshanam (₹300)",
            "d-opt-vip": "VIP Break Darshan (₹500)",
            "d-btn-submit": "Proceed to Book",
            "d-guidelines-title": "Important Guidelines",
            "d-guide-1": "Please carry a valid ID proof.",
            "d-guide-2": "Traditional dress code is mandatory.",
            "d-guide-3": "Report 30 minutes before your allotted time.",
            "kalyanam-title": "Special Kalyanam & Poojas",
            "kalyanam-subtitle": "Participate in sacred rituals and receive divine blessings.",
            "k-lbl-name": "Primary Devotee Name",
            "k-ph-name": "Enter full name",
            "k-lbl-gotra": "Gotram",
            "k-ph-gotra": "Enter your Gotram",
            "k-lbl-date": "Pooja Date",
            "k-lbl-type": "Seva Name",
            "k-opt-select": "Select Seva",
            "k-opt-kalyanam": "Kalyanotsavam (₹1000)",
            "k-opt-suprabhatam": "Suprabhatam (₹500)",
            "k-opt-archana": "Sahasranama Archana (₹200)",
            "k-btn-submit": "Book Seva",
            "k-guidelines-title": "Important Guidelines",
            "k-guide-1": "If you wish to sit for Sri Venkateswara Swamy Kalyanam, please inform us a day before or at any time.",
            "marriage-title": "Marriage Stage Booking",
            "marriage-subtitle": "Book a sacred stage for your auspicious marriage ceremony.",
            "m-lbl-name": "Bride & Groom Names",
            "m-ph-name": "Enter names",
            "m-lbl-date": "Marriage Date",
            "m-lbl-type": "Stage Type",
            "m-opt-select": "Select Stage Type",
            "m-opt-individual": "Individual Stage",
            "m-opt-common": "Common Stage (Fixed Stage)",
            "m-btn-submit": "Book Stage",
            "annadanam-title": "Annadanam (Sacred Feeding)",
            "annadanam-subtitle": "Donate for Annadanam (conducted during Saturday lunch, and on any date when Kalyanam is performed) and receive immense blessings.",
            "a-lbl-name": "Donor Name",
            "a-ph-name": "Enter your name",
            "a-lbl-amount": "Donation Amount (₹)",
            "a-ph-amount": "Enter amount (Min ₹50)",
            "a-lbl-date": "Preferred Saturday (Optional)",
            "a-btn-submit": "Donate Now",
            "gallery-title": "Temple Gallery",
            "gallery-subtitle": "A glimpse into the divine architecture and vibrant festivals.",
            "connect-title": "Stay Connected",
            "connect-subtitle": "Follow our official social media pages for daily updates, live darshan, and spiritual discourses.",
            "c-card-ig-lbl": "Instagram",
            "c-btn-follow": "Follow Us",
            "c-card-yt-lbl": "YouTube",
            "c-card-yt-sub": "Live Poojas & Videos",
            "c-btn-sub": "Subscribe",
            "c-card-fb-lbl": "Facebook",
            "c-card-fb-sub": "Community & Events",
            "c-btn-like": "Like Page",
            "c-card-wa-lbl": "WhatsApp",
            "c-card-wa-sub": "Contact Us",
            "c-btn-msg": "Message",
            "footer-desc-title": "Sri Venkateswara Swamy Temple",
            "footer-desc-text": "Nallacheruvu. Dedicated to preserving spiritual heritage and serving devotees with devotion and care.",
            "footer-links-title": "Quick Links",
            "footer-links-darshan": "Book Darshan",
            "footer-links-kalyanam": "Book Kalyanam",
            "footer-links-gallery": "Gallery",
            "footer-links-contact": "Contact Us",
            "footer-contact-title": "Contact Info",
            "footer-address": "2-38, Mukkamala - Amalapuram Rd, Nedunuru, Andhra Pradesh 533241",
            "footer-bottom": "© 2026 Sri Venkateswara Swamy Temple, Nallacheruvu. All Rights Reserved.",
            "btn-processing": "Processing...",
            "darshan-success": "<i class=\"fa-solid fa-circle-check\"></i> Darshan tickets booked successfully! A confirmation email has been sent.",
            "kalyanam-success": "<i class=\"fa-solid fa-circle-check\"></i> Kalyanams/Sevas booked successfully! May you be blessed.",
            "marriage-success": "<i class=\"fa-solid fa-circle-check\"></i> Marriage stages booked successfully! We will contact you shortly.",
            "annadanam-min-error": "<i class=\"fa-solid fa-circle-exclamation\"></i> min was 50 rs",
            "annadanam-success": "<i class=\"fa-solid fa-circle-check\"></i> Thank you for your Annadanam donation! May the Lord bless you.",
            "nav-dashboard": "Dashboard",
            "nav-login": "Login",
            "nav-logout": "Logout",
            "form-payment": "Payment Method",
            "opt-select-payment": "Select Payment Method",
            "admin-title": "Temple Committee Dashboard",
            "admin-subtitle": "Manage Kalyanam dates and view devotee booking logs.",
            "admin-manage-dates": "Manage Kalyanam Dates",
            "admin-new-date": "Add Seva Date",
            "admin-btn-add": "Add Date",
            "admin-current-dates": "Currently Scheduled Seva Dates:",
            "admin-booking-logs": "Devotee Booking Logs",
            "th-devotee": "Devotee",
            "th-service": "Service Booked",
            "th-scheduled-date": "Scheduled Date",
            "th-payment": "Payment Method",
            "th-booked-at": "Booked At",
            "auth-title": "Devotee Portal Login",
            "auth-subtitle": "Access your digital darshan bookings and temple seva logs.",
            "auth-divider-or": "OR",
            "auth-lbl-email": "Email Address",
            "auth-ph-email": "Enter your email address",
            "auth-btn-send-otp": "Request OTP",
            "auth-lbl-otp": "One-Time Password (OTP)",
            "auth-ph-otp": "Enter 6-digit verification code",
            "auth-btn-login": "Verify & Sign In",
            "auth-msg-login-required": "Please login to proceed with booking.",
            "devotee-title": "Devotee Dashboard",
            "devotee-subtitle": "Manage your profile and view your scheduled temple visits.",
            "devotee-my-bookings": "My Temple Bookings",
            "k-opt-select-date": "Select Available Date",
            "tab-book-new": "Book New",
            "tab-my-bookings": "My Bookings",
            "tab-no-bookings": "No bookings recorded for this service.",
            "gallery-t1": "Majestic Gopuram",
            "gallery-d1": "The grand entrance tower representing spiritual heights and exquisite architecture.",
            "gallery-t2": "Sacred Bells",
            "gallery-d2": "Ringing bells inside the temple to welcome devotees and purify the environment.",
            "gallery-t3": "Holy Pooja Rituals",
            "gallery-d3": "Daily rituals and Sevas performed with devotion, flowers, and chants.",
            "gallery-t4": "Golden Sanctum",
            "gallery-d4": "The sacred inner sanctum where the Lord resides, radiating peace and grace.",
            "gallery-t5": "Temple Festivals",
            "gallery-d5": "Grand annual festivals filled with colorful decorations, music, and divine energy.",
            "gallery-t6": "Sacred Oil Lamps",
            "gallery-d6": "Oil lamps illuminating the temple paths, symbolizing victory of light over darkness.",
            "auth-lbl-mobile": "Mobile Number",
            "auth-ph-mobile": "Enter 10-digit mobile",
            "auth-btn-send-otp": "Send OTP",
            "auth-lbl-otp": "One-Time Password (OTP)",
            "auth-ph-otp": "Enter OTP (e.g. 123456)",
            "k-lbl-email": "Email Address",
            "k-ph-email": "Enter email for receiving details"
        },
        te: {
            "page-title": "శ్రీ వేంకటేశ్వర స్వామి దేవాలయం, నల్లచెరువు",
            "nav-logo": "శ్రీ వేంకటేశ్వర స్వామి దేవాలయం",
            "nav-home": "హోమ్",
            "nav-darshan": "దర్శనం",
            "nav-kalyanam": "కల్యాణం",
            "nav-marriage": "వివాహం",
            "nav-annadanam": "అన్నదానం",
            "nav-gallery": "గ్యాలరీ",
            "nav-social": "కనెక్ట్",
            "hero-title": "దైవ కృపను అనుభవించండి",
            "hero-subtitle": "పవిత్ర నివాసానికి స్వాగతం. మీ దర్శనం మరియు ప్రత్యేక పూజలను ఆన్‌లైన్‌లో బుక్ చేసుకోండి.",
            "hero-btn-darshan": "దర్శనం బుకింగ్",
            "hero-btn-kalyanam": "కల్యాణం టిక్కెట్లు",
            "darshan-title": "దర్శనం టిక్కెట్లు బుకింగ్",
            "darshan-subtitle": "సులభమైన దర్శనం కోసం మీ దర్శన టిక్కెట్లను ముందే బుక్ చేసుకోండి.",
            "d-lbl-name": "పూర్తి పేరు",
            "d-ph-name": "మీ పూర్తి పేరు నమోదు చేయండి",
            "d-lbl-date": "కావలసిన తేదీ",
            "d-lbl-tickets": "టిక్కెట్ల సంఖ్య",
            "d-lbl-type": "దర్శనం రకం",
            "d-opt-select": "రకం ఎంచుకోండి",
            "d-opt-free": "సర్వ దర్శనం (ఉచితం)",
            "d-opt-special": "ప్రత్యేక ప్రవేశ దర్శనం (₹300)",
            "d-opt-vip": "విఐపి బ్రేక్ దర్శనం (₹500)",
            "d-btn-submit": "బుకింగ్ కోసం కొనసాగండి",
            "d-guidelines-title": "ముఖ్యమైన మార్గదర్శకాలు",
            "d-guide-1": "దయచేసి ఒక చెల్లుబాటు అయ్యే గుర్తింపు పత్రాన్ని వెంట తెచ్చుకోండి.",
            "d-guide-2": "సాంప్రదాయ దుస్తులు ధరించడం తప్పనిసరి.",
            "d-guide-3": "మీకు కేటాయించిన సమయానికి 30 నిమిషాల ముందే నివేదించండి.",
            "kalyanam-title": "ప్రత్యేక కల్యాణం & పూజలు",
            "kalyanam-subtitle": "పవిత్రమైన ఆచారాలలో పాల్గొనండి మరియు దైవ ఆశీస్సులు పొందండి.",
            "k-lbl-name": "ముఖ్య భక్తుని పేరు",
            "k-ph-name": "పూర్తి పేరు నమోదు చేయండి",
            "k-lbl-gotra": "గోత్రం",
            "k-ph-gotra": "మీ గోత్రం నమోదు చేయండి",
            "k-lbl-date": "పూజ తేదీ",
            "k-lbl-type": "సేవ పేరు",
            "k-opt-select": "సేవను ఎంచుకోండి",
            "k-opt-kalyanam": "కల్యాణోత్సవం (₹1000)",
            "k-opt-suprabhatam": "సుప్రభాతం (₹500)",
            "k-opt-archana": "సహస్రనామ అర్చన (₹200)",
            "k-btn-submit": "సేవ బుక్ చేయండి",
            "k-guidelines-title": "ముఖ్యమైన మార్గదర్శకాలు",
            "k-guide-1": "మీరు శ్రీ వేంకటేశ్వర స్వామి కల్యాణంలో కూర్చోవాలనుకుంటే, దయచేసి ఒక రోజు ముందుగాని లేదా ఎప్పుడైనా మాకు తెలియజేయండి.",
            "marriage-title": "కళ్యాణ మండపం బుకింగ్",
            "marriage-subtitle": "మీ పవిత్ర వివాహ వేడుక కోసం పవిత్రమైన మండపాన్ని బుక్ చేసుకోండి.",
            "m-lbl-name": "వధూవరుల పేర్లు",
            "m-ph-name": "పేర్లు నమోదు చేయండి",
            "m-lbl-date": "వివాహ తేదీ",
            "m-lbl-type": "మండపం రకం",
            "m-opt-select": "మండపం రకం ఎంచుకోండి",
            "m-opt-individual": "వ్యక్తిగత మండపం",
            "m-opt-common": "సాధారణ మండపం (స్థిరమైన వేదిక)",
            "m-btn-submit": "మండపం బుక్ చేయండి",
            "annadanam-title": "అన్నదానం (పవిత్ర భోజనం)",
            "annadanam-subtitle": "శనివారం మధ్యాహ్నం భోజన సమయంలో, మరియు కల్యాణోత్సవం జరిగే రోజులలో అన్నదానం నిర్వహించబడుతుంది. విరాళం అందించి పుణ్యం పొందండి.",
            "a-lbl-name": "దాత పేరు",
            "a-ph-name": "మీ పేరు నమోదు చేయండి",
            "a-lbl-amount": "విరాళం మొత్తం (₹)",
            "a-ph-amount": "మొత్తం నమోదు చేయండి (కనీసం ₹50)",
            "a-lbl-date": "కావలసిన శనివారం (ఐచ్ఛికం)",
            "a-btn-submit": "విరాళం ఇవ్వండి",
            "gallery-title": "ఆలయ గ్యాలరీ",
            "gallery-subtitle": "దివ్యమైన శిల్పకళ మరియు ఉత్సవాల యొక్క ఒక చిన్న వీక్షణం.",
            "connect-title": "మాతో కనెక్ట్ అవ్వండి",
            "connect-subtitle": "రోజువారీ అప్‌డేట్‌లు, ప్రత్యక్ష దర్శనాలు మరియు ఆధ్యాత్మిక ప్రవచనాల కోసం మా అధికారిక సోషల్ మీడియా పేజీలను అనుసరించండి.",
            "c-card-ig-lbl": "ఇన్‌స్టాగ్రామ్",
            "c-btn-follow": "మమ్మల్ని అనుసరించండి",
            "c-card-yt-lbl": "యూట్యూబ్",
            "c-card-yt-sub": "ప్రత్యక్ష పూజలు & వీడియోలు",
            "c-btn-sub": "సబ్‌స్క్రైబ్",
            "c-card-fb-lbl": "ఫేస్‌బుక్",
            "c-card-fb-sub": "కమ్యూనిటీ & ఈవెంట్‌లు",
            "c-btn-like": "పేజీని లైక్ చేయండి",
            "c-card-wa-lbl": "వాట్సాప్",
            "c-card-wa-sub": "మమ్మల్ని సంప్రదించండి",
            "c-btn-msg": "సందేశం పంపండి",
            "footer-desc-title": "శ్రీ వేంకటేశ్వర స్వామి దేవాలయం",
            "footer-desc-text": "నల్లచెరువు. ఆధ్యాత్మిక వారసత్వాన్ని రక్షించడంలో మరియు భక్తులకు భక్తిశ్రద్ధలతో సేవ చేయడంలో అంకితభావంతో ఉంటుంది.",
            "footer-links-title": "త్వరిత లింకులు",
            "footer-links-darshan": "దర్శనం బుకింగ్",
            "footer-links-kalyanam": "కల్యాణం బుకింగ్",
            "footer-links-gallery": "గ్యాలరీ",
            "footer-links-contact": "మమ్మల్ని సంప్రదించండి",
            "footer-contact-title": "సంప్రదించవలసిన సమాచారం",
            "footer-address": "2-38, ముక్కామల - అమలాపురం రోడ్డు, నెడునూరు, ఆంధ్రప్రదేశ్ 533241",
            "footer-bottom": "© 2026 శ్రీ వేంకటేశ్వర స్వామి దేవాలయం, నల్లచెరువు. అన్ని హక్కులూ ప్రత్యేకించబడినవి.",
            "btn-processing": "ప్రక్రియ జరుగుతోంది...",
            "darshan-success": "<i class=\"fa-solid fa-circle-check\"></i> దర్శన టిక్కెట్లు విజయవంతంగా బుక్ చేయబడ్డాయి! ధృవీకరణ ఇమెయిల్ పంపబడింది.",
            "kalyanam-success": "<i class=\"fa-solid fa-circle-check\"></i> కల్యాణం/సేవ విజయవంతంగా బుక్ చేయబడింది! మీకు దైవ అనుగ్రహం కలుగుగాక.",
            "marriage-success": "<i class=\"fa-solid fa-circle-check\"></i> వివాహ వేదిక విజయవంతంగా బుక్ చేయబడింది! మేము త్వరలోనే మిమ్మల్ని సంప్రదిస్తాము.",
            "annadanam-min-error": "<i class=\"fa-solid fa-circle-exclamation\"></i> కనీసం రూ. 50 ఉండాలి",
            "annadanam-success": "<i class=\"fa-solid fa-circle-check\"></i> అన్నదాన విరాళానికి ధన్యవాదాలు! భగవంతుని అనుగ్రహం మీకు కలుగుగాక.",
            "nav-dashboard": "డాష్‌బోర్డ్",
            "nav-login": "లాగిన్",
            "nav-logout": "లాగౌట్",
            "form-payment": "చెల్లింపు విధానం",
            "opt-select-payment": "చెల్లింపు విధానాన్ని ఎంచుకోండి",
            "admin-title": "ఆలయ కమిటీ డాష్‌బోర్డ్",
            "admin-subtitle": "కల్యాణోత్సవ తేదీలను నిర్వహించండి మరియు భక్తుల బుకింగ్ లాగ్‌లను చూడండి.",
            "admin-manage-dates": "కల్యాణ తేదీల నిర్వహణ",
            "admin-new-date": "సేవ తేదీని జోడించండి",
            "admin-btn-add": "తేదీని జోడించు",
            "admin-current-dates": "ప్రస్తుతం షెడ్యూల్ చేసిన సేవ తేదీలు:",
            "admin-booking-logs": "భక్తుల బుకింగ్ లాగ్‌లు",
            "th-devotee": "భక్తుడు",
            "th-service": "బుక్ చేసిన సేవ",
            "th-scheduled-date": "షెడ్యూల్ చేసిన తేదీ",
            "th-payment": "చెల్లింపు విధానం",
            "th-booked-at": "బుకింగ్ సమయం",
            "auth-title": "భక్తుల లాగిన్ పోర్టల్",
            "auth-subtitle": "దర్శన బుకింగ్స్ మరియు ఆలయ సేవల సమాచారాన్ని వీక్షించండి.",
            "auth-divider-or": "లేదా",
            "auth-lbl-email": "ఇమెయిల్ చిరునామా",
            "auth-ph-email": "మీ ఇమెయిల్ చిరునామాను నమోదు చేయండి",
            "auth-btn-send-otp": "OTP పొందండి",
            "auth-lbl-otp": "వన్-టైమ్ పాస్‌వర్డ్ (OTP)",
            "auth-ph-otp": "6 అంకెల OTP కోడ్‌ను నమోదు చేయండి",
            "auth-btn-login": "ధృవీకరించండి & లాగిన్ అవ్వండి",
            "auth-msg-login-required": "బుకింగ్ కొనసాగించడానికి దయచేసి లాగిన్ అవ్వండి.",
            "devotee-title": "భక్తుల డాష్‌బోర్డ్",
            "devotee-subtitle": "మీ ప్రొఫైల్‌ను నిర్వహించండి మరియు ఆలయ దర్శన వివరాలను చూడండి.",
            "devotee-my-bookings": "నా ఆలయ బుకింగ్స్",
            "k-opt-select-date": "అందుబాటులో ఉన్న తేదీని ఎంచుకోండి",
            "tab-book-new": "కొత్త బుకింగ్",
            "tab-my-bookings": "నా బుకింగ్స్",
            "tab-no-bookings": "ఈ సేవకు ఎటువంటి బుకింగ్స్ లేవు.",
            "gallery-t1": "రాజగోపురం",
            "gallery-d1": "ఆధ్యాత్మిక శిఖరాలకు మరియు అద్భుతమైన శిల్పకళకు ప్రతీకగా నిలిచే మహా ద్వార గోపురం.",
            "gallery-t2": "పవిత్ర ఘంటలు",
            "gallery-d2": "భక్తులను ఆహ్వానించడానికి మరియు పర్యావరణాన్ని పవిత్రం చేయడానికి ఆలయంలో మ్రోగే గంటలు.",
            "gallery-t3": "పవిత్ర పూజా కైంకర్యాలు",
            "gallery-d3": "భంక్తితో, పుష్పాలతో మరియు మంత్రోచ్ఛారణలతో నిత్యం జరిగే పూజా కార్యక్రమాలు.",
            "gallery-t4": "గర్భాలయం",
            "gallery-d4": "ప్రశాంతత మరియు దివ్యత్వాన్ని వెదజల్లుతూ స్వామి వారు కొలువై ఉన్న పవిత్ర గర్భగుడి.",
            "gallery-t5": "ఆలయ బ్రహ్మోత్సవాలు",
            "gallery-d5": "రంగురంగుల అలంకరణలు, మంగళవాయిద్యాలు మరియు దైవశక్తితో నిండిన వార్షిక మహోత్సవాలు.",
            "gallery-t6": "పవిత్ర దీపారాధన",
            "gallery-d6": "చీకటిపై వెలుగు సాధించిన విజయానికి చిహ్నంగా ఆలయ వీధుల్లో వెలిగే దీపాలు.",
            "auth-lbl-mobile": "మొబైల్ సంఖ్య",
            "auth-ph-mobile": "10 అంకెల మొబైల్ సంఖ్య నమోదు చేయండి",
            "auth-btn-send-otp": "OTP పంపండి",
            "auth-lbl-otp": "వన్-టైమ్ పాస్‌వర్డ్ (OTP)",
            "auth-ph-otp": "OTP ని నమోదు చేయండి (ఉదా: 123456)",
            "k-lbl-email": "ఇమెయిల్ చిరునామా",
            "k-ph-email": "మరిన్ని వివరాల కొరకు ఇమెయిల్ నమోదు చేయండి"
        },
        hi: {
            "page-title": "श्री वेंकटेश्वर स्वामी मंदिर, नल्लाचेरुवू",
            "nav-logo": "श्री वेंकटेश्वर स्वामी मंदिर",
            "nav-home": "होम",
            "nav-darshan": "दर्शन",
            "nav-kalyanam": "कल्याणम",
            "nav-marriage": "विवाह",
            "nav-annadanam": "अन्नदानम",
            "nav-gallery": "गैलरी",
            "nav-social": "कनेक्ट",
            "hero-title": "दिव्य कृपा का अनुभव करें",
            "hero-subtitle": "पवित्र निवास में आपका स्वागत है। अपने दर्शन और विशेष पूजा ऑनलाइन बुक करें।",
            "hero-btn-darshan": "दर्शन बुक करें",
            "hero-btn-kalyanam": "कल्याणम टिकट",
            "darshan-title": "दर्शन टिकट बुकिंग",
            "darshan-subtitle": "सुचारू अनुभव के लिए पहले से दर्शन टिकट बुक करके अपनी यात्रा की योजना बनाएं।",
            "d-lbl-name": "पूरा नाम",
            "d-ph-name": "अपना पूरा नाम दर्ज करें",
            "d-lbl-date": "पसंदीदा तिथि",
            "d-lbl-tickets": "टिकटों की संख्या",
            "d-lbl-type": "दर्शन का प्रकार",
            "d-opt-select": "प्रकार चुनें",
            "d-opt-free": "सर्व दर्शनम् (मुफ्त)",
            "d-opt-special": "विशेष प्रवेश दर्शनम् (₹300)",
            "d-opt-vip": "वीआईपी ब्रेक दर्शनम् (₹500)",
            "d-btn-submit": "बुक करने के लिए आगे बढ़ें",
            "d-guidelines-title": "महत्वपूर्ण दिशानिर्देश",
            "d-guide-1": "कृपया एक वैध पहचान पत्र साथ लाएं।",
            "d-guide-2": "पारंपरिक पोशाक अनिवार्य है।",
            "d-guide-3": "अपने आवंटित समय से 30 मिनट पहले रिपोर्ट करें।",
            "kalyanam-title": "विशेष कल्याणम और पूजा",
            "kalyanam-subtitle": "पवित्र अनुष्ठानों में भाग लें और दिव्य आशीर्वाद प्राप्त करें।",
            "k-lbl-name": "मुख्य भक्त का नाम",
            "k-ph-name": "पूरा नाम दर्ज करें",
            "k-lbl-gotra": "गोत्र",
            "k-ph-gotra": "अपना गोत्र दर्ज करें",
            "k-lbl-date": "पूजा की तिथि",
            "k-lbl-type": "सेवा का नाम",
            "k-opt-select": "सेवा चुनें",
            "k-opt-kalyanam": "कल्याणोत्सवम (₹1000)",
            "k-opt-suprabhatam": "सुप्रभातम् (₹500)",
            "k-opt-archana": "सहस्रनाम अर्चना (₹200)",
            "k-btn-submit": "सेवा बुक करें",
            "k-guidelines-title": "महत्वपूर्ण दिशानिर्देश",
            "k-guide-1": "यदि आप श्री वेंकटेश्वर स्वामी कल्याणम में बैठना चाहते हैं, तो कृपया हमें एक दिन पहले या किसी भी समय सूचित करें।",
            "marriage-title": "विवाह मंच बुकिंग",
            "marriage-subtitle": "अपने शुभ विवाह समारोह के लिए एक पवित्र मंच बुक करें।",
            "m-lbl-name": "दूल्हा और दुल्हन का नाम",
            "m-ph-name": "नाम दर्ज करें",
            "m-lbl-date": "विवाह की तिथि",
            "m-lbl-type": "मंच का प्रकार",
            "m-opt-select": "मंच का प्रकार चुनें",
            "m-opt-individual": "व्यक्तिगत मंच",
            "m-opt-common": "सामान्य मंच (निश्चित मंच)",
            "m-btn-submit": "मंच बुक करें",
            "annadanam-title": "अन्नदानम (पवित्र भोजन)",
            "annadanam-subtitle": "शनिवार दोपहर के भोजन के समय और कल्याणम आयोजित होने वाली तिथियों पर अन्नदानम किया जाता है। दान करें और आशीर्वाद प्राप्त करें।",
            "a-lbl-name": "दाता का नाम",
            "a-ph-name": "अपना नाम दर्ज करें",
            "a-lbl-amount": "दान राशि (₹)",
            "a-ph-amount": "राशि दर्ज करें (न्यूनतम ₹50)",
            "a-lbl-date": "पसंदीदा शनिवार (वैकल्पिक)",
            "a-btn-submit": "अभी दान करें",
            "gallery-title": "मंदिर गैलरी",
            "gallery-subtitle": "दिव्य वास्तुकला और जीवंत त्योहारों की एक झलक।",
            "connect-title": "जुड़े रहें",
            "connect-subtitle": "दैनिक अपडेट, लाइव दर्शन और आध्यात्मिक प्रवचनों के लिए हमारे आधिकारिक सोशल मीडिया पेजों को फॉलो करें।",
            "c-card-ig-lbl": "इंस्टाग्राम",
            "c-btn-follow": "हमें फॉलो करें",
            "c-card-yt-lbl": "यूट्यूब",
            "c-card-yt-sub": "लाइव पूजा और वीडियो",
            "c-btn-sub": "सब्सक्राइब करें",
            "c-card-fb-lbl": "फेसबुक",
            "c-card-fb-sub": "समुदाय और कार्यक्रम",
            "c-btn-like": "पेज लाइक करें",
            "c-card-wa-lbl": "व्हाट्सएप",
            "c-card-wa-sub": "संपर्क करें",
            "c-btn-msg": "संदेश भेजें",
            "footer-desc-title": "श्री वेंकटेश्वर स्वामी मंदिर",
            "footer-desc-text": "नल्लाचेरुवू। आध्यात्मिक विरासत के संरक्षण और भक्तों की श्रद्धा एवं देखभाल के साथ सेवा करने के लिए समर्पित।",
            "footer-links-title": "त्वरित लिंक्स",
            "footer-links-darshan": "दर्शन बुक करें",
            "footer-links-kalyanam": "कल्याणम बुक करें",
            "footer-links-gallery": "गैलरी",
            "footer-links-contact": "संपर्क करें",
            "footer-contact-title": "संपर्क जानकारी",
            "footer-address": "2-38, मुक्कामला - अमलापुरम रोड, नेदुनुरु, आंध्र प्रदेश 533241",
            "footer-bottom": "© 2026 श्री वेंकटेश्वर स्वामी मंदिर, नल्लाचेरुवू। सर्वाधिकार सुरक्षित।",
            "btn-processing": "प्रक्रिया जारी है...",
            "darshan-success": "<i class=\"fa-solid fa-circle-check\"></i> दर्शन टिकट सफलतापूर्वक बुक हो गए हैं! एक पुष्टिकरण ईमेल भेज दिया गया है।",
            "kalyanam-success": "<i class=\"fa-solid fa-circle-check\"></i> कल्याणम/सेवा सफलतापूर्वक बुक हो गई है! आप पर कृपा बनी रहे।",
            "marriage-success": "<i class=\"fa-solid fa-circle-check\"></i> विवाह मंच सफलतापूर्वक बुक हो गया है! हम शीघ्र ही आपसे संपर्क करेंगे।",
            "annadanam-min-error": "<i class=\"fa-solid fa-circle-exclamation\"></i> न्यूनतम ₹50 होना चाहिए",
            "annadanam-success": "<i class=\"fa-solid fa-circle-check\"></i> आपके अन्नदानम दान के लिए धन्यवाद! ईश्वर आप पर कृपा बनाए रखें।",
            "nav-dashboard": "डैशबोर्ड",
            "nav-login": "लॉगिन",
            "nav-logout": "लॉगआउट",
            "form-payment": "भुगतान विधि",
            "opt-select-payment": "भुगतान विधि चुनें",
            "admin-title": "मंदिर समिति डैशबोर्ड",
            "admin-subtitle": "कल्याणम तिथियों का प्रबंधन करें और भक्तों के बुकिंग लॉग देखें।",
            "admin-manage-dates": "कल्याणम तिथियों का प्रबंधन",
            "admin-new-date": "सेवा तिथि जोड़ें",
            "admin-btn-add": "तिथि जोड़ें",
            "admin-current-dates": "वर्तमान में निर्धारित सेवा तिथियां:",
            "admin-booking-logs": "भक्त बुकिंग लॉग",
            "th-devotee": "भक्त",
            "th-service": "बुक की गई सेवा",
            "th-scheduled-date": "निर्धारित तिथि",
            "th-payment": "भुगतान विधि",
            "th-booked-at": "बुक किया गया समय",
            "auth-title": "भक्त लॉगिन पोर्टल",
            "auth-subtitle": "अपने दर्शन बुकिंग और मंदिर सेवा लॉग तक पहुंचें।",
            "auth-divider-or": "या",
            "auth-lbl-email": "ईमेल पता",
            "auth-ph-email": "अपना ईमेल पता दर्ज करें",
            "auth-btn-send-otp": "ओटीपी का अनुरोध करें",
            "auth-lbl-otp": "वन-टाइम पासवर्ड (ओटीपी)",
            "auth-ph-otp": "6-अंकीय सत्यापन कोड दर्ज करें",
            "auth-btn-login": "सत्यापित करें और साइन इन करें",
            "auth-msg-login-required": "बुकिंग जारी रखने के लिए कृपया लॉगिन करें।",
            "devotee-title": "भक्त डैशबोर्ड",
            "devotee-subtitle": "अपनी प्रोफ़ाइल प्रबंधित करें और अपनी निर्धारित मंदिर यात्राएं देखें।",
            "devotee-my-bookings": "मेरी मंदिर बुकिंग",
            "k-opt-select-date": "उपलब्ध तिथि चुनें",
            "tab-book-new": "नया बुक करें",
            "tab-my-bookings": "मेरी बुकिंग",
            "tab-no-bookings": "इस सेवा के लिए कोई बुकिंग नहीं मिली।",
            "gallery-t1": "भव्य गोपुरम",
            "gallery-d1": "भव्य प्रवेश द्वार जो आध्यात्मिक ऊंचाइयों और वास्तुकला का प्रतिनिधित्व करता है।",
            "gallery-t2": "पवित्र घंटियाँ",
            "gallery-d2": "भक्तों का स्वागत करने और वातावरण को शुद्ध करने के लिए बजने वाली घंटियाँ।",
            "gallery-t3": "पवि‍त्र पूजा अनुष्ठान",
            "gallery-d3": "भक्ति, फूलों और मंत्रोच्चार के साथ दैनिक किए जाने वाले अनुष्ठान और सेवाएँ।",
            "gallery-t4": "स्वर्ण गर्भगृह",
            "gallery-d4": "पवित्र गर्भगृह जहाँ भगवान विराजमान हैं, जो शांति और कृपा बिखेरते हैं।",
            "gallery-t5": "मंदिर के त्योहार",
            "gallery-d5": "रंग-बिरंगी सजावट, संगीत और दिव्य ऊर्जा से भरे भव्य वार्षिक त्योहार।",
            "gallery-t6": "दिव्य दीये",
            "gallery-d6": "मंदिर के रास्तों को आलोकित करते दीये, जो अंधकार पर प्रकाश की विजय का प्रतीक हैं।",
            "auth-lbl-mobile": "मोबाइल नंबर",
            "auth-ph-mobile": "10-अंकीय मोबाइल नंबर दर्ज करें",
            "auth-btn-send-otp": "ओटीपी भेजें",
            "auth-lbl-otp": "वन-टाइम पासवर्ड (ओटीपी)",
            "auth-ph-otp": "ओटीपी दर्ज करें (उदा. 123456)",
            "k-lbl-email": "ईमेल पता",
            "k-ph-email": "अधिक विवरण प्राप्त करने के लिए ईमेल दर्ज करें"
        }
    };

    let currentLang = localStorage.getItem('preferredLang') || 'en';

    function updateLanguage(lang) {
        if (!translations[lang]) lang = 'en';
        
        // Update browser tab/window title
        if (translations[lang]['page-title']) {
            document.title = translations[lang]['page-title'];
        }

        // Update elements marked with data-translate
        const translatableElements = document.querySelectorAll('[data-translate]');
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });

        // Update attribute tags (like placeholder) marked with data-translate-attr
        const translatableAttrs = document.querySelectorAll('[data-translate-attr]');
        translatableAttrs.forEach(el => {
            const attrVal = el.getAttribute('data-translate-attr');
            const [attrName, key] = attrVal.split(':');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute(attrName, translations[lang][key]);
            }
        });

        // Update active auth button translation
        const authBtn = document.getElementById('navAuthBtn');
        if (authBtn) {
            const user = JSON.parse(localStorage.getItem('currentUser'));
            if (user) {
                authBtn.innerText = translations[lang]['nav-logout'] || 'Logout';
            } else {
                authBtn.innerText = translations[lang]['nav-login'] || 'Login';
            }
        }
    }

    // Set dropdown selection & load initial language translation
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.addEventListener('change', (e) => {
            currentLang = e.target.value;
            localStorage.setItem('preferredLang', currentLang);
            updateLanguage(currentLang);
        });
    }

    // --- Session & Config Verification ---
    let googleClientId = '';
    
    // Fetch google client ID on load
    fetch('/api/config')
        .then(res => res.json())
        .then(config => {
            googleClientId = config.googleClientId;
            if (googleClientId && googleClientId !== 'your-google-client-id.apps.googleusercontent.com' && googleClientId.trim() !== '') {
                initializeGoogleSignIn(googleClientId);
            } else {
                console.warn('Google Client ID is not configured. Loading Dev Sandbox Login Buttons.');
                
                const renderMockGoogleButton = (containerId) => {
                    const container = document.getElementById(containerId);
                    if (container) {
                        container.innerHTML = `
                            <button class="btn-google-mock mockGoogleBtn" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px; background-color: #ffffff; color: #1f1f1f; border: 1px solid #dadce0; border-radius: 4px; padding: 10px; font-family: 'Roboto', 'Inter', sans-serif; font-size: 0.95rem; font-weight: 500; cursor: pointer; transition: background-color 0.2s, border-color 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" style="display: block;">
                                    <g>
                                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                        <path fill="#4285F4" d="M46.5 24c0-1.61-.15-3.16-.42-4.69H24v8.87h12.66c-.55 2.85-2.16 5.27-4.58 6.88l7.15 5.53C43.37 35.8 46.5 30.43 46.5 24z"></path>
                                        <path fill="#FBBC05" d="M10.54 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.98-6.19z"></path>
                                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.15-5.53c-1.98 1.33-4.51 2.13-8.74 2.13-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                        <path fill="none" d="M0 0h48v48H0z"></path>
                                    </g>
                                </svg>
                                Continue with Google
                            </button>
                            <div style="text-align: center; font-size: 0.65rem; color: #d32f2f; margin-top: 5px; font-weight: 500;">(Dev Mode: Google Client ID is unconfigured, clicking will run a local sandbox login)</div>
                        `;
                        
                        const btn = container.querySelector('.mockGoogleBtn');
                        if (btn) {
                            btn.addEventListener('click', () => {
                                handleCredentialResponse({ credential: 'mock-google-developer-token' });
                            });
                            
                            btn.addEventListener('mouseover', () => {
                                btn.style.backgroundColor = '#f7f9fa';
                                btn.style.borderColor = '#d0d4d9';
                            });
                            
                            btn.addEventListener('mouseout', () => {
                                btn.style.backgroundColor = '#ffffff';
                                btn.style.borderColor = '#dadce0';
                            });
                        }
                    }
                };
                
                renderMockGoogleButton('googleBtnContainer');
                renderMockGoogleButton('dropdownGoogleBtnContainer');
            }
        })
        .catch(err => {
            console.error('Failed to load API config:', err);
        });

    function initializeGoogleSignIn(clientId) {
        if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
            google.accounts.id.initialize({
                client_id: clientId,
                callback: handleCredentialResponse
            });
            
            const modalBtn = document.getElementById("googleBtnContainer");
            if (modalBtn) {
                google.accounts.id.renderButton(modalBtn, { theme: "outline", size: "large", width: "380" });
            }
            
            const dropdownBtn = document.getElementById("dropdownGoogleBtnContainer");
            if (dropdownBtn) {
                google.accounts.id.renderButton(dropdownBtn, { theme: "outline", size: "large", width: "190" });
            }
        } else {
            console.error('Google Identity Services script not loaded');
        }
    }

    function handleCredentialResponse(response) {
        fetch('/api/auth/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ credential: response.credential })
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(err => { throw new Error(err.error || 'Google Authentication failed'); });
            }
            return res.json();
        })
        .then(data => {
            localStorage.setItem('jwtToken', data.token);
            localStorage.setItem('currentUser', JSON.stringify(data.user));
            updateAuthStateUI();
            closeModal();
            if (pendingAction) {
                pendingAction();
            }
        })
        .catch(err => {
            console.error('Google Auth Success Callback Error:', err);
            authMessage.innerText = err.message;
            authMessage.className = 'form-message error';
            authMessage.style.display = 'block';
        });
    }

    // Verify token on page load if present
    const savedToken = localStorage.getItem('jwtToken');
    if (savedToken) {
        fetch('/api/auth/me', {
            headers: {
                'Authorization': `Bearer ${savedToken}`
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Token verification failed');
            }
            return res.json();
        })
        .then(data => {
            localStorage.setItem('currentUser', JSON.stringify(data.user));
            updateAuthStateUI();
        })
        .catch(err => {
            console.warn('Session expired or invalid:', err);
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('currentUser');
            updateAuthStateUI();
        });
    }

    // --- Seva Date & Booking Logs Renderers ---
    function renderKalyanamDates() {
        const dateSelect = document.getElementById('k-date');
        const adminDateList = document.getElementById('committeeDateList');

        fetch('/api/dates')
            .then(res => res.json())
            .then(data => {
                const dates = data.dates || [];

                if (dateSelect) {
                    dateSelect.innerHTML = `<option value="" data-translate="k-opt-select-date">${translations[currentLang]['k-opt-select-date'] || 'Select Available Date'}</option>`;
                    dates.forEach(d => {
                        const opt = document.createElement('option');
                        opt.value = d;
                        opt.innerText = d;
                        dateSelect.appendChild(opt);
                    });
                }

                if (adminDateList) {
                    adminDateList.innerHTML = '';
                    if (dates.length === 0) {
                        adminDateList.innerHTML = '<li style="background-color: #ffebee; color: #c62828;">No scheduled dates.</li>';
                    } else {
                        dates.forEach((d) => {
                            const li = document.createElement('li');
                            li.innerHTML = `
                                <span>${d}</span>
                                <button class="btn-delete-date" data-date="${d}"><i class="fa-solid fa-trash-can"></i></button>
                            `;
                            adminDateList.appendChild(li);
                        });

                        adminDateList.querySelectorAll('.btn-delete-date').forEach(btn => {
                            btn.addEventListener('click', (e) => {
                                const targetDate = e.currentTarget.getAttribute('data-date');
                                const token = localStorage.getItem('jwtToken');
                                fetch(`/api/dates/${targetDate}`, {
                                    method: 'DELETE',
                                    headers: {
                                        'Authorization': `Bearer ${token}`
                                    }
                                })
                                .then(res => {
                                    if (!res.ok) {
                                        return res.json().then(err => { throw new Error(err.error || 'Failed to delete date'); });
                                    }
                                    return res.json();
                                })
                                .then(() => {
                                    renderKalyanamDates();
                                })
                                .catch(err => {
                                    alert(err.message);
                                });
                            });
                        });
                    }
                }
            })
            .catch(err => {
                console.error('Failed to fetch scheduled dates:', err);
            });
    }

    function renderDevoteeBookings() {
        const tbodyBookings = document.getElementById('devoteeBookingsTableBody');
        const tbodyDonations = document.getElementById('devoteeDonationsTableBody');
        if (!tbodyBookings) return;

        const token = localStorage.getItem('jwtToken');
        fetch('/api/bookings', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(err => { throw new Error(err.error || 'Failed to fetch bookings'); });
            }
            return res.json();
        })
        .then(data => {
            const bookings = data.bookings || [];
            const annadanam = data.annadanamBookings || [];
            const seva = data.sevaBookings || [];
            
            const visitBookings = [];
            const donationBookings = [];
            
            // Standard bookings (Darshan, Marriage)
            bookings.forEach(b => {
                let detailsStr = '';
                try {
                    const parsed = JSON.parse(b.details);
                    if (typeof parsed === 'object') {
                        detailsStr = Object.entries(parsed).map(([k, v]) => `${k}: ${v}`).join(', ');
                    } else {
                        detailsStr = parsed;
                    }
                } catch(e) {
                    detailsStr = b.details;
                }
                visitBookings.push({
                    service: b.service,
                    details: detailsStr,
                    date: b.date,
                    payment: b.payment,
                    booked_at: b.booked_at,
                    timestamp: new Date(b.booked_at).getTime() || 0
                });
            });

            // Seva bookings
            seva.forEach(b => {
                visitBookings.push({
                    service: `Seva (${b.seva_type})`,
                    details: `Gotram: ${b.gotram}, Devotee: ${b.devotee_name}`,
                    date: b.date,
                    payment: b.payment,
                    booked_at: b.booked_at,
                    timestamp: new Date(b.booked_at).getTime() || 0
                });
            });

            // Annadanam donations
            annadanam.forEach(b => {
                donationBookings.push({
                    id: `ANN-${b.id || Math.floor(100000 + Math.random() * 900000)}`,
                    amount: `₹${b.amount}`,
                    date: b.date,
                    booked_at: b.booked_at,
                    timestamp: new Date(b.booked_at).getTime() || 0
                });
            });

            // Sort lists
            visitBookings.sort((a, b) => b.timestamp - a.timestamp);
            donationBookings.sort((a, b) => b.timestamp - a.timestamp);
            
            // Render visit bookings
            tbodyBookings.innerHTML = '';
            if (visitBookings.length === 0) {
                tbodyBookings.innerHTML = `<tr><td colspan="4" style="text-align: center; color: #999;">You have no registered visits recorded yet.</td></tr>`;
            } else {
                visitBookings.forEach(b => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td><span class="service-badge">${b.service}</span><br><small style="color: #666;">${b.details}</small></td>
                        <td>${b.date}</td>
                        <td><span class="payment-badge">${b.payment.toUpperCase()}</span></td>
                        <td>${b.booked_at}</td>
                    `;
                    tbodyBookings.appendChild(tr);
                });
            }

            // Render donation bookings
            if (tbodyDonations) {
                tbodyDonations.innerHTML = '';
                if (donationBookings.length === 0) {
                    tbodyDonations.innerHTML = `<tr><td colspan="4" style="text-align: center; color: #999;">You have no donations recorded yet.</td></tr>`;
                } else {
                    donationBookings.forEach(b => {
                        const tr = document.createElement('tr');
                        tr.innerHTML = `
                            <td><strong style="color: var(--primary-dark);">${b.id}</strong></td>
                            <td class="price" style="font-weight: 700;">${b.amount}</td>
                            <td>${b.date}</td>
                            <td>${b.booked_at}</td>
                        `;
                        tbodyDonations.appendChild(tr);
                    });
                }
            }
        })
        .catch(err => {
            console.error('Error rendering devotee bookings:', err);
        });
    }

    // --- Authentication and Interface States ---
    // --- SPA View Switcher Routing ---
    function switchView(view) {
        const homeView = document.getElementById('home-view');
        const profileView = document.getElementById('profile-view');
        
        if (view === 'profile') {
            if (homeView) homeView.style.display = 'none';
            if (profileView) profileView.style.display = 'block';
        } else {
            if (homeView) homeView.style.display = 'block';
            if (profileView) profileView.style.display = 'none';
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Bind all nav links to switch back to home view except profile ones
    setTimeout(() => {
        const navLinks = document.querySelectorAll('.nav-links a:not([href="#profile"]):not(#navDashboardLink)');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                switchView('home');
            });
        });

        // Also bind logo link
        const logoLink = document.querySelector('.logo');
        if (logoLink) {
            logoLink.addEventListener('click', () => {
                switchView('home');
            });
        }

        // Dropdown toggle logic
        const navProfileDropdownBtn = document.getElementById('navProfileDropdownBtn');
        const navProfileGuestBtn = document.getElementById('navProfileGuestBtn');
        const profileDropdownMenu = document.getElementById('profileDropdownMenu');

        const toggleDropdown = (e) => {
            if (profileDropdownMenu) {
                e.stopPropagation();
                const isVisible = profileDropdownMenu.style.display === 'block';
                profileDropdownMenu.style.display = isVisible ? 'none' : 'block';
            }
        };

        if (navProfileDropdownBtn) navProfileDropdownBtn.addEventListener('click', toggleDropdown);
        if (navProfileGuestBtn) navProfileGuestBtn.addEventListener('click', toggleDropdown);

        // Close dropdown when clicking anywhere else
        window.addEventListener('click', () => {
            if (profileDropdownMenu) profileDropdownMenu.style.display = 'none';
        });

        // Dropdown login button
        const dropdownLoginBtn = document.getElementById('dropdownLoginBtn');
        if (dropdownLoginBtn) {
            dropdownLoginBtn.addEventListener('click', () => {
                if (profileDropdownMenu) profileDropdownMenu.style.display = 'none';
                openModal();
            });
        }

        // Bind profile dropdown links
        const menuMyProfile = document.getElementById('menuMyProfile');
        const menuMyBookings = document.getElementById('menuMyBookings');
        const menuMyDonations = document.getElementById('menuMyDonations');
        const menuLogout = document.getElementById('menuLogout');

        if (menuMyProfile) {
            menuMyProfile.addEventListener('click', (e) => {
                e.preventDefault();
                switchView('profile');
                if (profileDropdownMenu) profileDropdownMenu.style.display = 'none';
            });
        }
        if (menuMyBookings) {
            menuMyBookings.addEventListener('click', (e) => {
                e.preventDefault();
                switchView('profile');
                const tabBtn = document.querySelector('.profile-tab-btn[data-profile-tab="bookings"]');
                if (tabBtn) tabBtn.click();
                if (profileDropdownMenu) profileDropdownMenu.style.display = 'none';
            });
        }
        if (menuMyDonations) {
            menuMyDonations.addEventListener('click', (e) => {
                e.preventDefault();
                switchView('profile');
                const tabBtn = document.querySelector('.profile-tab-btn[data-profile-tab="donations"]');
                if (tabBtn) tabBtn.click();
                if (profileDropdownMenu) profileDropdownMenu.style.display = 'none';
            });
        }
        if (menuLogout) {
            menuLogout.addEventListener('click', (e) => {
                e.preventDefault();
                if (profileDropdownMenu) profileDropdownMenu.style.display = 'none';
                localStorage.removeItem('jwtToken');
                localStorage.removeItem('currentUser');
                switchView('home');
                updateAuthStateUI();
            });
        }
    }, 100);

    // --- Authentication and Interface States ---
    function updateAuthStateUI() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        const navProfileDropdownBtn = document.getElementById('navProfileDropdownBtn');
        const navProfileGuestBtn = document.getElementById('navProfileGuestBtn');
        const profileDropdownLoggedInOpts = document.getElementById('profileDropdownLoggedInOpts');
        const profileDropdownLoggedOutOpts = document.getElementById('profileDropdownLoggedOutOpts');
        const profileDropdownUserEmail = document.getElementById('profileDropdownUserEmail');
        
        const navDashboardLink = document.getElementById('navDashboardLink');
        const devoteeSection = document.getElementById('devotee-dashboard');
        const profileView = document.getElementById('profile-view');

        if (user) {
            if (navProfileGuestBtn) navProfileGuestBtn.style.display = 'none';
            if (navProfileDropdownBtn) {
                navProfileDropdownBtn.style.display = 'flex';
                const navAvatar = document.getElementById('navAvatar');
                const navDevoteeName = document.getElementById('navDevoteeName');
                if (navAvatar) navAvatar.src = user.profile_picture || 'https://via.placeholder.com/150?text=Avatar';
                if (navDevoteeName) navDevoteeName.innerText = (user.full_name || user.email.split('@')[0]).split(' ')[0];
            }
            if (profileDropdownLoggedInOpts) profileDropdownLoggedInOpts.style.display = 'block';
            if (profileDropdownLoggedOutOpts) profileDropdownLoggedOutOpts.style.display = 'none';
            if (profileDropdownUserEmail) profileDropdownUserEmail.innerText = user.email;

            if (user.role === 'committee') {
                if (navDashboardLink) navDashboardLink.style.display = 'block';
                if (devoteeSection) devoteeSection.style.display = 'none';
                if (profileView) profileView.style.display = 'none';
                
                // Redirect immediately if not bypassed via URL query
                const urlParams = new URLSearchParams(window.location.search);
                if (urlParams.get('view') !== 'true') {
                    window.location.href = 'admin.html';
                    return;
                }
            } else {
                if (navDashboardLink) navDashboardLink.style.display = 'none';
                if (devoteeSection) {
                    devoteeSection.style.display = 'block';
                    
                    const devoteeAvatar = document.getElementById('devoteeAvatar');
                    const devoteeNameDisplay = document.getElementById('devoteeNameDisplay');
                    const devoteeEmail = document.getElementById('devoteeEmail');
                    const devoteeLoginType = document.getElementById('devoteeLoginType');

                    if (devoteeAvatar) devoteeAvatar.src = user.profile_picture || 'https://via.placeholder.com/150?text=Avatar';
                    if (devoteeNameDisplay) devoteeNameDisplay.innerText = user.full_name || user.email.split('@')[0];
                    if (devoteeEmail) devoteeEmail.innerText = user.email;
                    if (devoteeLoginType) devoteeLoginType.innerText = user.login_type || 'Email OTP';
                    
                    // Populate Profile Form fields
                    const profileName = document.getElementById('profile-name');
                    const profilePhone = document.getElementById('profile-phone');
                    const profileGotram = document.getElementById('profile-gotram');
                    const profileNakshatram = document.getElementById('profile-nakshatram');
                    const profileRasi = document.getElementById('profile-rasi');
                    const profileAddress = document.getElementById('profile-address');

                    if (profileName) profileName.value = user.full_name || '';
                    if (profilePhone) profilePhone.value = user.phone || '';
                    if (profileGotram) profileGotram.value = user.gotram || '';
                    if (profileNakshatram) profileNakshatram.value = user.nakshatram || '';
                    if (profileRasi) profileRasi.value = user.rasi || '';
                    if (profileAddress) profileAddress.value = user.address || '';

                    renderDevoteeBookings();
                }
            }
        } else {
            if (navProfileGuestBtn) navProfileGuestBtn.style.display = 'flex';
            if (navProfileDropdownBtn) navProfileDropdownBtn.style.display = 'none';
            if (profileDropdownLoggedInOpts) profileDropdownLoggedInOpts.style.display = 'none';
            if (profileDropdownLoggedOutOpts) profileDropdownLoggedOutOpts.style.display = 'block';
            if (navDashboardLink) navDashboardLink.style.display = 'none';
            if (devoteeSection) devoteeSection.style.display = 'none';
            if (profileView) profileView.style.display = 'none';
            switchView('home');
        }
    }

    // --- Devotee Profile Update Listener ---
    const profileForm = document.getElementById('profileDetailsForm');
    const profileMessage = document.getElementById('profileMessage');
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const token = localStorage.getItem('jwtToken');
            if (!token) return;

            const name = document.getElementById('profile-name').value.trim();
            const phone = document.getElementById('profile-phone').value.trim();
            const gotram = document.getElementById('profile-gotram').value.trim();
            const nakshatram = document.getElementById('profile-nakshatram').value;
            const rasi = document.getElementById('profile-rasi').value;
            const address = document.getElementById('profile-address').value.trim();

            const updateBtn = document.getElementById('profileUpdateBtn');
            const originalText = updateBtn ? updateBtn.innerText : 'Update Details';

            if (updateBtn) {
                updateBtn.innerText = 'Updating...';
                updateBtn.disabled = true;
            }
            if (profileMessage) {
                profileMessage.style.display = 'none';
            }

            fetch('/api/user/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    full_name: name,
                    phone: phone,
                    gotram: gotram,
                    nakshatram: nakshatram,
                    rasi: rasi,
                    address: address
                })
            })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(err => { throw new Error(err.error || 'Failed to update profile'); });
                }
                return res.json();
            })
            .then(data => {
                localStorage.setItem('currentUser', JSON.stringify(data.user));
                if (profileMessage) {
                    profileMessage.innerText = data.message || 'Profile updated successfully!';
                    profileMessage.className = 'form-message success';
                    profileMessage.style.display = 'block';
                }
                if (updateBtn) {
                    updateBtn.innerText = originalText;
                    updateBtn.disabled = false;
                }
                // Refresh top card display
                const devoteeNameDisplay = document.getElementById('devoteeNameDisplay');
                if (devoteeNameDisplay) devoteeNameDisplay.innerText = data.user.full_name;
                
                setTimeout(() => {
                    if (profileMessage) profileMessage.style.display = 'none';
                }, 3000);
            })
            .catch(err => {
                console.error(err);
                if (profileMessage) {
                    profileMessage.innerText = err.message;
                    profileMessage.className = 'form-message error';
                    profileMessage.style.display = 'block';
                }
                if (updateBtn) {
                    updateBtn.innerText = originalText;
                    updateBtn.disabled = false;
                }
            });
        });
    }

    // --- Devotee Profile Dashboard Tabs switcher ---
    const tabButtons = document.querySelectorAll('.profile-tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const tabName = btn.getAttribute('data-profile-tab');
            const bookingsContent = document.getElementById('profileTabBookings');
            const donationsContent = document.getElementById('profileTabDonations');

            if (tabName === 'bookings') {
                if (bookingsContent) bookingsContent.style.display = 'block';
                if (donationsContent) donationsContent.style.display = 'none';
            } else {
                if (bookingsContent) bookingsContent.style.display = 'none';
                if (donationsContent) donationsContent.style.display = 'block';
            }
        });
    });

    // Initialize Seva Dates, UI States
    renderKalyanamDates();
    updateAuthStateUI();
    updateLanguage(currentLang);

    // --- Modal Control Logic ---
    const authModal = document.getElementById('authModal');
    const navAuthBtn = document.getElementById('navAuthBtn');
    const closeAuthModal = document.getElementById('closeAuthModal');
    const authForm = document.getElementById('authForm');
    const authSubmitBtn = document.getElementById('authSubmitBtn');
    const authMessage = document.getElementById('authMessage');

    let pendingAction = null; // Stored callback to execute after login

    function openModal(msgText = null) {
        if (authModal) {
            authModal.style.display = 'flex';
            authMessage.innerText = '';
            authMessage.style.display = 'none';
            if (msgText) {
                authMessage.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${msgText}`;
                authMessage.className = 'form-message error';
                authMessage.style.display = 'block';
            }
        }
    }

    // Exposed to let login response close it
    function closeModal() {
        if (authModal) {
            authModal.style.display = 'none';
            authForm.reset();
            pendingAction = null;
        }
    }

    if (navAuthBtn) {
        navAuthBtn.addEventListener('click', () => {
            const user = localStorage.getItem('currentUser');
            if (user) {
                localStorage.removeItem('currentUser');
                localStorage.removeItem('jwtToken');
                updateAuthStateUI();
                updateLanguage(currentLang);
                window.location.hash = ''; 
            } else {
                openModal();
            }
        });
    }

    if (closeAuthModal) closeAuthModal.addEventListener('click', closeModal);

    // Send OTP button event listener
    const sendOtpBtn = document.getElementById('authSendOtpBtn');
    if (sendOtpBtn) {
        sendOtpBtn.addEventListener('click', () => {
            const emailInput = document.getElementById('auth-email');
            const emailVal = emailInput ? emailInput.value.trim() : '';
            
            if (!emailVal) {
                authMessage.innerText = 'Please enter an email address.';
                authMessage.className = 'form-message error';
                authMessage.style.display = 'block';
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailVal)) {
                authMessage.innerText = 'Please enter a valid email address.';
                authMessage.className = 'form-message error';
                authMessage.style.display = 'block';
                return;
            }

            authMessage.innerText = 'Requesting OTP...';
            authMessage.className = 'form-message info';
            authMessage.style.display = 'block';

            fetch('/api/auth/otp/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: emailVal })
            })
            .then(async res => {
                const data = await res.json();
                if (!res.ok) {
                    const error = new Error(data.error || 'Failed to send OTP');
                    error.devOtp = data.devOtp;
                    throw error;
                }
                return data;
            })
            .then(data => {
                let msg = 'OTP sent successfully. Please check your email inbox.';
                if (data.devOtp) {
                    console.log(`[Developer Mode] Generated OTP: ${data.devOtp}`);
                    msg = `OTP sent successfully!<br><strong style="font-size: 1.05rem; color: #ef6c00;">[Dev Mode Bypass] OTP Code: ${data.devOtp}</strong>`;
                }
                authMessage.innerHTML = msg;
                authMessage.className = 'form-message success';
                authMessage.style.display = 'block';

                sendOtpBtn.disabled = true;
                let counter = 60;
                const originalText = sendOtpBtn.innerText;
                sendOtpBtn.innerText = `${counter}s`;
                
                const interval = setInterval(() => {
                    counter--;
                    if (counter <= 0) {
                        clearInterval(interval);
                        sendOtpBtn.disabled = false;
                        sendOtpBtn.innerText = originalText;
                    } else {
                        sendOtpBtn.innerText = `${counter}s`;
                    }
                }, 1000);
            })
            .catch(err => {
                console.error(err);
                let displayMsg = err.message;
                if (err.devOtp) {
                    console.log(`[Developer Mode] Generated OTP on SMTP failure: ${err.devOtp}`);
                    displayMsg = `${err.message}<br><strong style="font-size: 1.05rem; color: #ef6c00;">[Dev Mode Bypass] OTP Code: ${err.devOtp}</strong>`;
                }
                authMessage.innerHTML = displayMsg;
                authMessage.className = 'form-message error';
                authMessage.style.display = 'block';
            });
        });
    }

    // Handle Auth Form Submission
    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('auth-email').value.trim();
            const otp = document.getElementById('auth-otp').value.trim();

            authMessage.innerText = 'Verifying...';
            authMessage.className = 'form-message info';
            authMessage.style.display = 'block';

            fetch('/api/auth/otp/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, otp })
            })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(err => { throw new Error(err.error || 'Verification failed'); });
                }
                return res.json();
            })
            .then(data => {
                localStorage.setItem('jwtToken', data.token);
                localStorage.setItem('currentUser', JSON.stringify(data.user));
                updateAuthStateUI();
                closeModal();
                if (pendingAction) {
                    pendingAction();
                }
            })
            .catch(err => {
                console.error(err);
                authMessage.innerText = err.message;
                authMessage.className = 'form-message error';
                authMessage.style.display = 'block';
            });
        });
    }

    // Verify authentication state before processing booking forms
    function checkLoginAndProceed(onAuthenticated) {
        const user = localStorage.getItem('currentUser');
        if (user) {
            onAuthenticated();
        } else {
            pendingAction = onAuthenticated;
            const reqMsg = translations[currentLang]['auth-msg-login-required'] || 'Please login to proceed with booking.';
            openModal(reqMsg);
        }
    }

    // --- Admin Add Date Form Listener ---
    const addDateForm = document.getElementById('addDateForm');
    if (addDateForm) {
        addDateForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newDateVal = document.getElementById('new-k-date').value;
            if (!newDateVal) return;

            const dates = JSON.parse(localStorage.getItem('kalyanamDates')) || [];
            if (dates.includes(newDateVal)) {
                alert('This Seva date is already added.');
                return;
            }

            dates.push(newDateVal);
            dates.sort(); // keep chronological
            localStorage.setItem('kalyanamDates', JSON.stringify(dates));
            renderKalyanamDates();
            addDateForm.reset();
        });
    }

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Smooth Scrolling & Active Link Highlighting ---
    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if it is a booking link
            if (this.classList.contains('booking-link')) {
                return; // Let the booking links event handler manage it
            }

            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                if (hamburger) {
                    const icon = hamburger.querySelector('i');
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }

                // Scroll to section
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Booking Link Navigation Modals Trigger ---
    const bookingLinks = document.querySelectorAll('.booking-link');
    bookingLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if active
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (hamburger) {
                    const icon = hamburger.querySelector('i');
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }

            const targetId = this.getAttribute('href').substring(1); // 'darshan', 'kalyanam', 'marriage', 'annadanam'
            const modalId = targetId + 'Modal';
            const modal = document.getElementById(modalId);
            
            if (modal) {
                checkLoginAndProceed(() => {
                    // Open booking modal
                    modal.style.display = 'flex';
                    // Reset to first tab
                    switchBookingTab(targetId, 'book');
                });
            }
        });
    });

    // Close booking modals on close button click
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal-overlay');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Close any modal overlay when clicking the backdrop
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.style.display = 'none';
                if (overlay.id === 'authModal') {
                    pendingAction = null;
                }
            }
        });
    });

    // --- Booking Modal Tabs Switcher ---
    function switchBookingTab(service, tabType) {
        const modal = document.getElementById(service + 'Modal');
        if (!modal) return;

        const tabs = modal.querySelectorAll('.booking-modal-tab');
        const contents = {
            book: modal.querySelector(`#${service}BookContent`),
            history: modal.querySelector(`#${service}HistoryContent`)
        };

        tabs.forEach(tab => {
            if (tab.getAttribute('data-tab-type') === tabType) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        if (tabType === 'book') {
            if (contents.book) contents.book.style.display = 'block';
            if (contents.history) contents.history.style.display = 'none';
        } else {
            if (contents.book) contents.book.style.display = 'none';
            if (contents.history) contents.history.style.display = 'block';
            
            // Render devotee's bookings logs inside modal
            renderMyBookings(service);
        }
    }

    // Attach click listeners to booking tabs
    document.querySelectorAll('.booking-modal-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const service = e.target.getAttribute('data-service');
            const tabType = e.target.getAttribute('data-tab-type');
            switchBookingTab(service, tabType);
        });
    });

    // Devotee Bookings List inside Modal Renderer
    function renderMyBookings(service) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) return;

        const listId = `my${service.charAt(0).toUpperCase() + service.slice(1)}BookingsList`;
        const container = document.getElementById(listId);
        if (!container) return;

        const token = localStorage.getItem('jwtToken');
        fetch('/api/bookings', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(err => { throw new Error(err.error || 'Failed to fetch bookings'); });
            }
            return res.json();
        })
        .then(data => {
            const bookings = data.bookings || [];
            const myBookings = bookings.filter(b => b.service.toLowerCase().startsWith(service.toLowerCase()));

            container.innerHTML = '';

            if (myBookings.length === 0) {
                container.innerHTML = `
                    <div class="no-bookings-placeholder">
                        <i class="fa-solid fa-calendar-xmark"></i>
                        <p data-translate="tab-no-bookings">${translations[currentLang]['tab-no-bookings'] || 'No bookings recorded for this service.'}</p>
                    </div>
                `;
                return;
            }

            myBookings.forEach(b => {
                const card = document.createElement('div');
                card.className = 'user-booking-card';
                
                let detailsStr = '';
                try {
                    const parsed = JSON.parse(b.details);
                    if (typeof parsed === 'object') {
                        detailsStr = Object.entries(parsed).map(([k, v]) => `${k}: ${v}`).join(', ');
                    } else {
                        detailsStr = parsed;
                    }
                } catch(e) {
                    detailsStr = b.details;
                }

                card.innerHTML = `
                    <div class="user-booking-header">
                        <span class="user-booking-title" style="text-transform: uppercase;">${service} Booking</span>
                        <span class="user-booking-date"><i class="fa-regular fa-clock"></i> ${b.booked_at}</span>
                    </div>
                    <div class="user-booking-details">
                        <div class="user-booking-item">
                            <span class="user-booking-label">Service</span>
                            <span class="user-booking-val">${b.service}</span>
                        </div>
                        <div class="user-booking-item">
                            <span class="user-booking-label">Details</span>
                            <span class="user-booking-val">${detailsStr}</span>
                        </div>
                        <div class="user-booking-item">
                            <span class="user-booking-label">Scheduled Date</span>
                            <span class="user-booking-val">${b.date}</span>
                        </div>
                        <div class="user-booking-item">
                            <span class="user-booking-label">Payment</span>
                            <span class="user-booking-val">${b.payment.toUpperCase()}</span>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(err => {
            console.error('Error rendering modal history bookings:', err);
        });
    }

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 80;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        // Special case for home section when at very top
        if (window.scrollY < 200) {
            current = 'home';
        }

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
        
        // --- Navbar Style on Scroll ---
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(33, 33, 33, 0.98)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
            } else {
                navbar.style.backgroundColor = 'rgba(33, 33, 33, 0.8)';
                navbar.style.boxShadow = 'none';
            }
        }
    });

    // Simulated SMS toast notification creator
    function showSmsNotification(sender, message) {
        let container = document.getElementById('smsToastContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'smsToastContainer';
            container.className = 'sms-toast-container';
            document.body.appendChild(container);
        }
        
        const toast = document.createElement('div');
        toast.className = 'sms-toast';
        
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        toast.innerHTML = `
            <div class="sms-toast-header">
                <div class="sms-toast-app">
                    <i class="fa-solid fa-message"></i> Messages
                </div>
                <div class="sms-toast-time">${timeStr}</div>
            </div>
            <div class="sms-toast-body">
                <strong>${sender}</strong><br>
                ${message}
            </div>
        `;
        
        container.appendChild(toast);
        
        // Force reflow and show toast
        setTimeout(() => {
            toast.classList.add('show');
        }, 50);
        
        // Hide and remove after 6 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 6000);
    }

    // --- Form Submissions ---
    const darshanForm = document.getElementById('darshanForm');
    const darshanMessage = document.getElementById('darshanMessage');

    if (darshanForm) {
        darshanForm.addEventListener('submit', (e) => {
            e.preventDefault();
            checkLoginAndProceed(() => {
                const btn = darshanForm.querySelector('button');
                const originalText = btn.innerText;
                
                const name = document.getElementById('d-name').value;
                const date = document.getElementById('d-date').value;
                const tickets = document.getElementById('d-tickets').value;
                const typeEl = document.getElementById('d-type');
                const typeText = typeEl.options[typeEl.selectedIndex].text;
                const payment = document.getElementById('d-payment').value;

                btn.innerText = translations[currentLang]['btn-processing'] || 'Processing...';
                btn.disabled = true;
                darshanMessage.style.display = 'none';

                const token = localStorage.getItem('jwtToken');
                fetch('/api/bookings', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        service: 'Darshan',
                        details: { Name: name, Tickets: tickets, Type: typeText },
                        date: date,
                        payment: payment,
                        email: null
                    })
                })
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(err => { throw new Error(err.error || 'Failed to submit booking'); });
                    }
                    return res.json();
                })
                .then(data => {
                    darshanForm.reset();
                    darshanMessage.innerHTML = translations[currentLang]['darshan-success'] || translations['en']['darshan-success'];
                    darshanMessage.className = 'form-message success';
                    darshanMessage.style.display = 'block';
                    
                    btn.innerText = originalText;
                    btn.disabled = false;

                    // Trigger simulated SMS Toast notification
                    showSmsNotification('TEMPLE-INFO', `Dear Devotee, your booking for Darshan (${tickets} Tickets - ${typeText}) on ${date} is confirmed. Ref: TXN-${data.bookingId || Math.floor(100000 + Math.random() * 900000)}.`);

                    setTimeout(() => {
                        darshanMessage.style.display = 'none';
                        switchBookingTab('darshan', 'history');
                    }, 2000);
                })
                .catch(err => {
                    console.error(err);
                    darshanMessage.innerText = err.message;
                    darshanMessage.className = 'form-message error';
                    darshanMessage.style.display = 'block';
                    btn.innerText = originalText;
                    btn.disabled = false;
                });
            });
        });
    }

    const kalyanamForm = document.getElementById('kalyanamForm');
    const kalyanamMessage = document.getElementById('kalyanamMessage');

    if (kalyanamForm) {
        kalyanamForm.addEventListener('submit', (e) => {
            e.preventDefault();
            checkLoginAndProceed(() => {
                const btn = kalyanamForm.querySelector('button');
                const originalText = btn.innerText;

                const name = document.getElementById('k-name').value;
                const gotra = document.getElementById('k-gotra').value;
                const date = document.getElementById('k-date').value;
                const email = document.getElementById('k-email').value;
                const typeEl = document.getElementById('k-type');
                const typeText = typeEl.options[typeEl.selectedIndex].text;
                const payment = document.getElementById('k-payment').value;

                btn.innerText = translations[currentLang]['btn-processing'] || 'Processing...';
                btn.disabled = true;
                kalyanamMessage.style.display = 'none';

                const token = localStorage.getItem('jwtToken');
                fetch('/api/bookings/seva', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        devoteeName: name,
                        gotram: gotra,
                        email: email,
                        sevaType: typeText,
                        date: date,
                        payment: payment
                    })
                })
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(err => { throw new Error(err.error || 'Failed to submit booking'); });
                    }
                    return res.json();
                })
                .then(data => {
                    kalyanamForm.reset();
                    kalyanamMessage.innerHTML = translations[currentLang]['kalyanam-success'] || translations['en']['kalyanam-success'];
                    kalyanamMessage.className = 'form-message success';
                    kalyanamMessage.style.display = 'block';
                    
                    btn.innerText = originalText;
                    btn.disabled = false;

                    // Trigger simulated SMS Toast notification
                    showSmsNotification('TEMPLE-INFO', `Dear Devotee, your Kalyanam Seva (${typeText}) on ${date} is confirmed. Detailed instructions sent to email: ${email}. Ref: TXN-${data.bookingId || Math.floor(100000 + Math.random() * 900000)}.`);

                    setTimeout(() => {
                        kalyanamMessage.style.display = 'none';
                        switchBookingTab('kalyanam', 'history');
                    }, 2000);
                })
                .catch(err => {
                    console.error(err);
                    kalyanamMessage.innerText = err.message;
                    kalyanamMessage.className = 'form-message error';
                    kalyanamMessage.style.display = 'block';
                    btn.innerText = originalText;
                    btn.disabled = false;
                });
            });
        });
    }

    const marriageForm = document.getElementById('marriageForm');
    const marriageMessage = document.getElementById('marriageMessage');

    if (marriageForm) {
        marriageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            checkLoginAndProceed(() => {
                const btn = marriageForm.querySelector('button');
                const originalText = btn.innerText;

                const name = document.getElementById('m-name').value;
                const date = document.getElementById('m-date').value;
                const typeEl = document.getElementById('m-type');
                const typeText = typeEl.options[typeEl.selectedIndex].text;
                const payment = document.getElementById('m-payment').value;

                btn.innerText = translations[currentLang]['btn-processing'] || 'Processing...';
                btn.disabled = true;
                marriageMessage.style.display = 'none';

                const token = localStorage.getItem('jwtToken');
                fetch('/api/bookings', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        service: 'Marriage Stage',
                        details: { Names: name, StageType: typeText },
                        date: date,
                        payment: payment,
                        email: null
                    })
                })
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(err => { throw new Error(err.error || 'Failed to submit booking'); });
                    }
                    return res.json();
                })
                .then(data => {
                    marriageForm.reset();
                    marriageMessage.innerHTML = translations[currentLang]['marriage-success'] || translations['en']['marriage-success'];
                    marriageMessage.className = 'form-message success';
                    marriageMessage.style.display = 'block';
                    
                    btn.innerText = originalText;
                    btn.disabled = false;

                    // Trigger simulated SMS Toast notification
                    showSmsNotification('TEMPLE-INFO', `Dear Devotee, your Marriage Stage (${typeText}) booking on ${date} is confirmed. Our committee will reach out soon. Ref: TXN-${data.bookingId || Math.floor(100000 + Math.random() * 900000)}.`);

                    setTimeout(() => {
                        marriageMessage.style.display = 'none';
                        switchBookingTab('marriage', 'history');
                    }, 2000);
                })
                .catch(err => {
                    console.error(err);
                    marriageMessage.innerText = err.message;
                    marriageMessage.className = 'form-message error';
                    marriageMessage.style.display = 'block';
                    btn.innerText = originalText;
                    btn.disabled = false;
                });
            });
        });
    }

    const annadanamForm = document.getElementById('annadanamForm');
    const annadanamMessage = document.getElementById('annadanamMessage');
    const amountInput = document.getElementById('a-amount');

    if (amountInput) {
        amountInput.addEventListener('input', () => {
            const val = parseFloat(amountInput.value);
            if (!isNaN(val) && val < 50) {
                annadanamMessage.innerHTML = translations[currentLang]['annadanam-min-error'] || translations['en']['annadanam-min-error'];
                annadanamMessage.className = 'form-message error';
                annadanamMessage.style.display = 'block';
            } else {
                if (annadanamMessage.classList.contains('error')) {
                    annadanamMessage.style.display = 'none';
                    annadanamMessage.className = 'form-message';
                }
            }
        });
    }

    if (annadanamForm) {
        annadanamForm.addEventListener('submit', (e) => {
            e.preventDefault();
            checkLoginAndProceed(() => {
                const val = parseFloat(amountInput.value);
                if (isNaN(val) || val < 50) {
                    annadanamMessage.innerHTML = translations[currentLang]['annadanam-min-error'] || translations['en']['annadanam-min-error'];
                    annadanamMessage.className = 'form-message error';
                    annadanamMessage.style.display = 'block';
                    return;
                }

                const btn = annadanamForm.querySelector('button');
                const originalText = btn.innerText;
                const donorName = document.getElementById('a-name').value || 'Devotee';
                const date = document.getElementById('a-date').value || "Saturday Lunch";
                const payment = document.getElementById('a-payment').value;

                btn.innerText = translations[currentLang]['btn-processing'] || 'Processing...';
                btn.disabled = true;
                annadanamMessage.style.display = 'none';

                const token = localStorage.getItem('jwtToken');
                fetch('/api/bookings/annadanam', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        donorName: donorName,
                        amount: val,
                        date: date,
                        payment: payment
                    })
                })
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(err => { throw new Error(err.error || 'Failed to submit booking'); });
                    }
                    return res.json();
                })
                .then(data => {
                    annadanamForm.reset();
                    annadanamMessage.innerHTML = translations[currentLang]['annadanam-success'] || translations['en']['annadanam-success'];
                    annadanamMessage.className = 'form-message success';
                    annadanamMessage.style.display = 'block';
                    
                    btn.innerText = originalText;
                    btn.disabled = false;

                    // Trigger simulated SMS Toast notification
                    showSmsNotification('TEMPLE-INFO', `Thank you for donating ₹${val} to Annadanam on ${date}. May you receive divine blessings. Ref: TXN-${data.bookingId || Math.floor(100000 + Math.random() * 900000)}.`);

                    setTimeout(() => {
                        annadanamMessage.style.display = 'none';
                        switchBookingTab('annadanam', 'history');
                    }, 2000);
                })
                .catch(err => {
                    console.error(err);
                    annadanamMessage.innerText = err.message;
                    annadanamMessage.className = 'form-message error';
                    annadanamMessage.style.display = 'block';
                    btn.innerText = originalText;
                    btn.disabled = false;
                });
            });
        });
    }

    // --- Devotional Audio Player Logic ---
    const audio = document.getElementById('main-audio');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressContainer = document.getElementById('progress-container');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const durationTimeEl = document.getElementById('duration-time');
    const volumeBtn = document.getElementById('volume-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const audioTitle = document.getElementById('audio-title');
    const audioArtist = document.getElementById('audio-artist');
    const visualizer = document.getElementById('visualizer-container');
    const playlistItems = document.querySelectorAll('.playlist-item');

    let currentTrackIndex = 0;
    let isPlaying = false;

    function loadTrack(index) {
        playlistItems.forEach(item => item.classList.remove('active'));
        const activeItem = playlistItems[index];
        if (activeItem) {
            activeItem.classList.add('active');
            const trackSrc = activeItem.getAttribute('data-src');
            const trackTitle = activeItem.getAttribute('data-title');
            const trackArtist = activeItem.getAttribute('data-artist');

            audio.src = trackSrc;
            audioTitle.innerText = trackTitle;
            audioArtist.innerText = trackArtist;
            audio.load();
        }
    }

    function togglePlay() {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    }

    function playTrack() {
        isPlaying = true;
        audio.loop = true;
        audio.play().catch(e => console.log('Audio autoplay blocked or failed:', e));
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        if (visualizer) visualizer.classList.add('playing');
        updateFloatingWidgetUI(true);
    }

    function pauseTrack() {
        isPlaying = false;
        audio.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        if (visualizer) visualizer.classList.remove('playing');
        updateFloatingWidgetUI(false);
    }

    if (playBtn && audio) {
        playBtn.addEventListener('click', togglePlay);

        prevBtn.addEventListener('click', () => {
            currentTrackIndex--;
            if (currentTrackIndex < 0) {
                currentTrackIndex = playlistItems.length - 1;
            }
            loadTrack(currentTrackIndex);
            if (isPlaying) playTrack();
        });

        nextBtn.addEventListener('click', () => {
            currentTrackIndex++;
            if (currentTrackIndex >= playlistItems.length) {
                currentTrackIndex = 0;
            }
            loadTrack(currentTrackIndex);
            if (isPlaying) playTrack();
        });

        // Time / Progress Update
        audio.addEventListener('timeupdate', (e) => {
            const { duration, currentTime } = e.srcElement;
            if (!isNaN(duration)) {
                const progressPercent = (currentTime / duration) * 100;
                progressBar.style.width = `${progressPercent}%`;

                // Calculate display minutes & seconds
                const formatTime = (time) => {
                    const min = Math.floor(time / 60);
                    let sec = Math.floor(time % 60);
                    if (sec < 10) sec = `0${sec}`;
                    return `${min}:${sec}`;
                };

                currentTimeEl.innerText = formatTime(currentTime);
                durationTimeEl.innerText = formatTime(duration);
            }
        });

        // Set progress on click
        progressContainer.addEventListener('click', (e) => {
            const width = progressContainer.clientWidth;
            const clickX = e.offsetX;
            const duration = audio.duration;
            if (duration) {
                audio.currentTime = (clickX / width) * duration;
            }
        });

        // Track ended
        audio.addEventListener('ended', () => {
            nextBtn.click();
        });

        // Volume control
        volumeSlider.addEventListener('input', (e) => {
            const vol = e.target.value;
            audio.volume = vol;
            if (vol == 0) {
                volumeBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
            } else if (vol < 0.5) {
                volumeBtn.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
            } else {
                volumeBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
            }
        });

        // Playlist select
        playlistItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentTrackIndex = index;
                loadTrack(index);
                playTrack();
            });
        });

        // Load first track on startup
        loadTrack(0);

        // Autoplay background chants logic
        function initAutoplay() {
            audio.loop = true;

            const startPlay = () => {
                playTrack();
                document.removeEventListener('click', startPlay);
                document.removeEventListener('keydown', startPlay);
                document.removeEventListener('touchstart', startPlay);
                document.removeEventListener('scroll', startPlay);
            };

            // Attempt play immediately (usually blocked by browsers unless already interacted)
            audio.play()
                .then(() => {
                    updateFloatingWidgetUI(true);
                })
                .catch(err => {
                    console.log('Autoplay blocked. Waiting for first user interaction to start background chants.');
                    document.addEventListener('click', startPlay);
                    document.addEventListener('keydown', startPlay);
                    document.addEventListener('touchstart', startPlay);
                    document.addEventListener('scroll', startPlay);
                });
        }

        // Initialize autoplay
        initAutoplay();

        // Bind Floating Widget Click
        const floatingWidget = document.getElementById('floating-audio-widget');
        const widgetPlayBtn = document.getElementById('widget-play-btn');
        const widgetTrackTitle = document.getElementById('widget-track-title');
        const widgetTrackStatus = document.getElementById('widget-track-status');

        if (floatingWidget) {
            floatingWidget.addEventListener('click', (e) => {
                togglePlay();
            });
        }

        function updateFloatingWidgetUI(playing) {
            if (!floatingWidget) return;
            if (playing) {
                floatingWidget.classList.remove('paused');
                floatingWidget.classList.add('playing');
                if (widgetPlayBtn) widgetPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
                if (widgetTrackStatus) widgetTrackStatus.innerText = 'Chants Playing';
            } else {
                floatingWidget.classList.remove('playing');
                floatingWidget.classList.add('paused');
                if (widgetPlayBtn) widgetPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                if (widgetTrackStatus) widgetTrackStatus.innerText = 'Chant Muted';
            }
            if (widgetTrackTitle && audioTitle) {
                widgetTrackTitle.innerText = audioTitle.innerText;
            }
        }
    }

    // --- Live Slots Status Simulator ---
    const specialEntryStatus = document.getElementById('status-special');
    const kalyanamStatus = document.getElementById('status-kalyanam');
    const accommodationStatus = document.getElementById('status-accommodation');

    // Simulate real-time updates every 12 seconds
    setInterval(() => {
        if (specialEntryStatus) {
            // Randomly update between 100 and 150 slots
            const slots = Math.floor(90 + Math.random() * 60);
            specialEntryStatus.innerText = `Available (${slots} slots)`;
            if (slots < 100) {
                specialEntryStatus.className = 'status-badge status-limited';
            } else {
                specialEntryStatus.className = 'status-badge status-available';
            }
        }
        if (kalyanamStatus) {
            // Randomly update between 2 and 15 slots
            const slots = Math.floor(2 + Math.random() * 12);
            kalyanamStatus.innerText = `Limited (${slots} slots)`;
            if (slots < 5) {
                kalyanamStatus.className = 'status-badge status-sold-out';
                kalyanamStatus.innerText = 'Almost Sold Out!';
            } else {
                kalyanamStatus.className = 'status-badge status-limited';
            }
        }
        if (accommodationStatus) {
            const slots = Math.floor(20 + Math.random() * 35);
            accommodationStatus.innerText = `Available (${slots} rooms)`;
        }
    }, 12000);
});
