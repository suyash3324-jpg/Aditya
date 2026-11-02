/**
 * SchemeSathi - Digital Awareness & Government Schemes Portal
 * Interactive Application Logic & Data Store
 */

// ==========================================================================
// 1. Comprehensive Verified Schemes Database
// ==========================================================================
const schemesData = [
    {
        id: "pm-kisan",
        name: "PM-KISAN Samman Nidhi",
        hindiName: "प्रधानमंत्री किसान सम्मान निधि",
        category: "Farmers",
        categoryIcon: "fa-solid fa-wheat-awn",
        ministry: "Ministry of Agriculture & Farmers Welfare",
        benefitSummary: "₹6,000 / year in 3 direct installments of ₹2,000",
        description: "An income support scheme providing assured annual financial assistance to all landholding farmer families across India directly into their bank accounts through DBT.",
        eligibility: "All small and marginal landholding farmer families with cultivable land in their names (subject to exclusion criteria like institutional landholders and income tax payees).",
        documents: ["Aadhaar Card", "Land Ownership Records (Khatauni/Patta)", "Bank Passbook with Aadhaar link", "Active Mobile Number"],
        link: "https://pmkisan.gov.in/",
        helpline: "155261 / 1800-115-526",
        steps: [
            "Visit the official PM-KISAN portal (pmkisan.gov.in) and locate 'Farmers Corner'.",
            "Click on 'New Farmer Registration' and select Rural or Urban Farmer.",
            "Enter your Aadhaar number and registered mobile number to receive OTP.",
            "Fill in land survey number, Khasra/Khatauni details, and bank account details.",
            "Submit the eKYC form and save the registration acknowledgment reference number."
        ],
        tags: ["farmer", "kisan", "agriculture", "land", "cash", "6000", "dbt", "subsidy"]
    },
    {
        id: "pm-jay",
        name: "Ayushman Bharat (PM-JAY)",
        hindiName: "आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना",
        category: "Health",
        categoryIcon: "fa-solid fa-heart-pulse",
        ministry: "National Health Authority (MoHFW)",
        benefitSummary: "Up to ₹5,00,000 cashless health insurance cover per family/year",
        description: "The world's largest government-funded health assurance scheme providing comprehensive secondary and tertiary care hospitalization coverage at empanelled public and private hospitals.",
        eligibility: "Families identified under the Socio-Economic Caste Census (SECC 2011) database and active Ration Card holders recognized under national criteria (no family size or age limit).",
        documents: ["Aadhaar Card", "Ration Card / Family ID", "Proof of Identity", "Active Mobile Number"],
        link: "https://pmjay.gov.in/",
        helpline: "14555 / 1800-111-565",
        steps: [
            "Check eligibility on mera.pmjay.gov.in using mobile number or Ration card number.",
            "If eligible, visit any Ayushman Bharat empanelled hospital or Common Service Centre (CSC).",
            "Present your Aadhaar card and Ration card to the 'Ayushman Mitra' desk.",
            "Complete biometric or OTP-based identity verification.",
            "Download your Ayushman Golden Card for 100% cashless treatment across India."
        ],
        tags: ["health", "hospital", "medical", "cashless", "ayushman", "treatment", "doctor", "5 lakh"]
    },
    {
        id: "nsp-scholarship",
        name: "National Scholarship Portal (NSP)",
        hindiName: "राष्ट्रीय छात्रवृत्ति पोर्टल",
        category: "Students",
        categoryIcon: "fa-solid fa-graduation-cap",
        ministry: "Ministry of Electronics & IT / Education / Social Justice",
        benefitSummary: "Full tuition fee reimbursement + annual maintenance allowance",
        description: "A unified electronic gateway offering hundreds of central sector, UGC/AICTE, and state-level pre-matric and post-matric scholarship programs for meritorious and underprivileged students.",
        eligibility: "Enrolled regular students with minimum 50%-60% marks in previous examination with annual family income below ₹2.5 Lakh to ₹8 Lakh (varying by program).",
        documents: ["Aadhaar Card", "Previous Academic Marksheets", "Income Certificate (Tahsil)", "Caste/Minority Certificate (if applicable)", "Fee Receipt & College Bonafide"],
        link: "https://scholarships.gov.in/",
        helpline: "0120-6619540",
        steps: [
            "Go to scholarships.gov.in and click on 'New Registration / One-Time Registration (OTR)'.",
            "Provide Aadhaar and mobile number to complete eKYC and generate OTR ID.",
            "Log in to the student dashboard and choose suitable schemes based on your institution & caste/income profile.",
            "Upload verified bonafide certificate and bank details.",
            "Submit application and follow up with your school/college nodal officer for online verification."
        ],
        tags: ["student", "scholarship", "education", "college", "school", "tuition", "degree", "post matric"]
    },
    {
        id: "pm-mudra",
        name: "Pradhan Mantri MUDRA Yojana",
        hindiName: "प्रधानमंत्री मुद्रा योजना (PMMY)",
        category: "Business",
        categoryIcon: "fa-solid fa-store",
        ministry: "Department of Financial Services, Ministry of Finance",
        benefitSummary: "Collateral-free business loans up to ₹10 Lakh at low interest",
        description: "Provides easy institutional credit to non-corporate, non-farm small and micro enterprises across three categories: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), and Tarun (₹5 to ₹10 Lakh).",
        eligibility: "Any Indian citizen with a feasible business proposal for manufacturing, processing, trading, or service sector, or allied agricultural activity.",
        documents: ["Aadhaar / PAN Card", "Proof of Business Address", "Project Proposal / Quotation for machinery", "Last 6 Months Bank Statement"],
        link: "https://www.mudra.org.in/",
        helpline: "1800-180-1111 / 1800-11-0001",
        steps: [
            "Prepare a basic business model report outlining required capital and expected revenue.",
            "Visit any commercial bank, Regional Rural Bank (RRB), NBFC, or apply on udyamimitra.in.",
            "Submit the MUDRA application form along with business proposal and identity proofs.",
            "Bank verifies credentials without requiring any collateral security.",
            "Upon sanction, receive loan funds and a MUDRA RuPay Debit Card for working capital."
        ],
        tags: ["business", "loan", "mudra", "shop", "msme", "credit", "startup", "collateral free"]
    },
    {
        id: "pmay",
        name: "Pradhan Mantri Awas Yojana (PMAY)",
        hindiName: "प्रधानमंत्री आवास योजना (शहरी एवं ग्रामीण)",
        category: "Social",
        categoryIcon: "fa-solid fa-house-chimney",
        ministry: "Ministry of Housing & Urban Affairs / Rural Development",
        benefitSummary: "Up to ₹2.67 Lakh interest subsidy or direct housing financial aid",
        description: "A flagship mission ensuring 'Housing for All' by providing pucca houses with basic amenities (electricity, toilet, LPG) to homeless and households living in kutcha/dilapidated homes.",
        eligibility: "Beneficiary family must not own a pucca house anywhere in India. Families categorized under EWS (income up to ₹3L), LIG (up to ₹6L), or rural SECC priority lists.",
        documents: ["Aadhaar Card", "Income Certificate / BPL Card", "Bank Account Details", "Land/Plot Ownership Documents or Tenancy proof", "Affidavit of no pucca house"],
        link: "https://pmaymis.gov.in/",
        helpline: "1800-11-6163 / 1800-11-3377",
        steps: [
            "Check name in Gram Panchayat PMAY-G beneficiary list or visit pmaymis.gov.in for urban areas.",
            "Select 'Citizen Assessment' and enter Aadhaar details to verify identity.",
            "Fill in household head details, current housing status, and annual family income.",
            "Provide bank account and upload required identity proofs.",
            "Track inspection status and receive construction installments directly linked to geo-tagged progress."
        ],
        tags: ["house", "housing", "pucca makan", "home", "subsidy", "rural", "urban", "shelter"]
    },
    {
        id: "sukanya-samriddhi",
        name: "Sukanya Samriddhi Yojana (SSY)",
        hindiName: "सुकन्या समृद्धि योजना (बेटी बचाओ बेटी पढ़ाओ)",
        category: "Women",
        categoryIcon: "fa-solid fa-person-dress",
        ministry: "Ministry of Finance & Women and Child Development",
        benefitSummary: "High interest rate (8.2% p.a.) + 100% Tax-free maturity (Sec 80C)",
        description: "A specialized government-backed small savings scheme designed specifically for parents of girl children to build a substantial fund for higher education and marriage.",
        eligibility: "Parents or legal guardians can open an account in the name of a girl child from her birth up to the age of 10 years (maximum 2 girl children per family).",
        documents: ["Girl Child's Birth Certificate", "Identity & Address Proof of Guardian (Aadhaar/PAN)", "Photographs of Child and Parent"],
        link: "https://www.indiapost.gov.in/",
        helpline: "1800-266-6868",
        steps: [
            "Download or collect the SSY application form from any Post Office or authorized commercial bank.",
            "Fill in details with the girl child as account holder and parent as guardian.",
            "Attach birth certificate and guardian's Aadhaar & PAN card.",
            "Deposit the minimum opening amount of ₹250 (up to ₹1.5 Lakh annually).",
            "Receive an SSY Passbook to track deposits and compounding interest."
        ],
        tags: ["women", "girl", "daughter", "saving", "education", "marriage", "tax free", "sukanya"]
    },
    {
        id: "pm-vishwakarma",
        name: "PM Vishwakarma Yojana",
        hindiName: "पीएम विश्वकर्मा योजना",
        category: "Business",
        categoryIcon: "fa-solid fa-hammer",
        ministry: "Ministry of Micro, Small and Medium Enterprises",
        benefitSummary: "₹15,000 Toolkit incentive + up to ₹3 Lakh loan @ 5% concessional rate",
        description: "Holistic support initiative for traditional artisans and craftspeople across 18 trades (carpenters, blacksmiths, goldsmiths, potters, sculptors, cobblers, tailors, etc.) including skill training and stipend.",
        eligibility: "An artisan or craftsperson working with hands and tools in one of the 18 recognized family-based traditional trades, aged 18 or older.",
        documents: ["Aadhaar Card", "Active Mobile Number linked to Aadhaar", "Bank Account Details", "Ration Card (for family verification)"],
        link: "https://pmvishwakarma.gov.in/",
        helpline: "1800-267-7777",
        steps: [
            "Visit your nearest Common Service Centre (CSC) with Aadhaar and mobile phone.",
            "Complete biometric Aadhaar authentication on pmvishwakarma.gov.in.",
            "Register under your designated trade craft and upload bank details.",
            "Undergo Gram Panchayat / Urban Local Body verification.",
            "Receive PM Vishwakarma Certificate & ID card, ₹500/day training stipend, and ₹15,000 digital toolkit voucher."
        ],
        tags: ["artisan", "carpenter", "tailor", "craft", "toolkit", "15000", "loan", "vishwakarma"]
    },
    {
        id: "atal-pension",
        name: "Atal Pension Yojana (APY)",
        hindiName: "अटल पेंशन योजना",
        category: "Social",
        categoryIcon: "fa-solid fa-hand-holding-heart",
        ministry: "PFRDA, Ministry of Finance",
        benefitSummary: "Guaranteed monthly lifetime pension of ₹1,000 to ₹5,000 after 60 years",
        description: "A flagship social security scheme primarily targeted at unorganized sector workers ensuring income security and financial dignity during old age with lifelong spouse coverage.",
        eligibility: "Any Indian citizen between 18 and 40 years of age with a savings bank account (subscriber must not be an income tax payer).",
        documents: ["Aadhaar Card", "Active Savings Bank Account with auto-debit consent", "Nominee Details"],
        link: "https://www.npscra.nsdl.co.in/",
        helpline: "1800-110-069",
        steps: [
            "Log in to your bank's net banking portal or visit your local branch.",
            "Request APY enrollment and choose desired monthly pension (₹1,000 to ₹5,000).",
            "Fill in Aadhaar, nominee information, and activate auto-debit on your savings account.",
            "Receive a Permanent Retirement Account Number (PRAN) via SMS.",
            "Download your APY e-PRAN card from the official CRA-NSDL portal."
        ],
        tags: ["pension", "old age", "senior", "retirement", "social security", "monthly income", "unorganized"]
    },
    {
        id: "pm-matru-vandana",
        name: "PM Matru Vandana Yojana (PMMVY)",
        hindiName: "प्रधानमंत्री मातृ वंदना योजना",
        category: "Women",
        categoryIcon: "fa-solid fa-person-breastfeeding",
        ministry: "Ministry of Women and Child Development",
        benefitSummary: "Cash incentive of ₹5,000 for first child & ₹6,000 for second girl child",
        description: "A direct conditional cash transfer maternity benefit program compensating wage loss and ensuring optimal nutrition and healthcare during pregnancy and lactation.",
        eligibility: "Pregnant Women and Lactating Mothers (PW&LM) who belong to socially/economically disadvantaged categories (excluding central/state govt employees).",
        documents: ["Mother and Husband's Aadhaar Card", "Mother-Child Protection (MCP) Card", "Bank Account in Mother's Name", "Eligibility Category Proof (e.g., E-Shram / Ration card)"],
        link: "https://pmmvy.wcd.gov.in/",
        helpline: "011-23382393",
        steps: [
            "Register pregnancy at the local Anganwadi Centre (AWC) or approved government healthcare facility within 570 days of LMP.",
            "Obtain and update the Mother-Child Protection (MCP) card with ANC checkups.",
            "Anganwadi worker registers the beneficiary on the online PMMVY Portal (pmmvy.wcd.gov.in).",
            "First installment transferred on early registration and at least one ANC.",
            "Subsequent installments credited directly upon child birth registration and initial vaccination cycle."
        ],
        tags: ["mother", "pregnant", "maternity", "baby", "women", "nutrition", "cash incentive", "child"]
    },
    {
        id: "pm-svanidhi",
        name: "PM SVANidhi Scheme",
        hindiName: "पीएम स्ट्रीट वेंडर्स आत्मनिर्भर निधि",
        category: "Business",
        categoryIcon: "fa-solid fa-cart-shopping",
        ministry: "Ministry of Housing and Urban Affairs",
        benefitSummary: "Collateral-free working capital microloans of ₹10,000, ₹20,000 & ₹50,000",
        description: "Empowers urban street vendors with micro-credit to resume their livelihoods, along with 7% interest subsidy on timely repayment and digital cashback incentives up to ₹1,200/year.",
        eligibility: "Urban street vendors possessing a Certificate of Vending / ID card issued by Urban Local Bodies (ULBs) or recommendation letters from Town Vending Committees.",
        documents: ["Aadhaar Card", "Vending Certificate / Letter of Recommendation (LoR)", "Bank Account Details", "Mobile Number linked to Aadhaar"],
        link: "https://pmsvanidhi.mohua.gov.in/",
        helpline: "1800-11-1979",
        steps: [
            "Visit pmsvanidhi.mohua.gov.in or download the PM SVANidhi Mobile App.",
            "Log in using your Aadhaar-linked mobile number via OTP.",
            "Select vendor status (holding Vending Certificate or LoR issued by ULB).",
            "Choose preferred lending institution and loan amount (1st tranche: ₹10,000).",
            "Submit application; funds are credited to your bank account upon swift digital approval."
        ],
        tags: ["vendor", "street vendor", "thela", "small business", "microloan", "svanidhi", "cashback"]
    },
    {
        id: "pmkvy-skill",
        name: "Skill India (PMKVY 4.0)",
        hindiName: "प्रधानमंत्री कौशल विकास योजना",
        category: "Students",
        categoryIcon: "fa-solid fa-laptop-code",
        ministry: "Ministry of Skill Development and Entrepreneurship (MSDE)",
        benefitSummary: "100% Free Industry-aligned training, Govt certification & placement aid",
        description: "Enables Indian youth to take up industry-relevant short-term skill training in cutting-edge domains like AI, robotics, healthcare, digital marketing, and green energy.",
        eligibility: "Any Indian citizen aged 15-45 years, school/college dropouts or unemployed youth seeking certified vocational training.",
        documents: ["Aadhaar Card", "Educational Qualification Proof (10th/12th/Graduation)", "Bank Passbook", "Passport-size Photographs"],
        link: "https://www.pmkvyofficial.org/",
        helpline: "088000-55555 / 1800-123-9626",
        steps: [
            "Visit the Skill India Digital portal (skillindiadigital.gov.in).",
            "Register as a candidate with your mobile number and Aadhaar.",
            "Browse course modules based on your city, industry interest, and career goals.",
            "Enroll in an accredited training center or online course module.",
            "Complete practical assessment to receive a Government of India National Skill Certificate."
        ],
        tags: ["skill", "training", "youth", "placement", "jobs", "certification", "vocational", "pmkvy"]
    },
    {
        id: "pmgkay-ration",
        name: "PM Garib Kalyan Anna Yojana",
        hindiName: "प्रधानमंत्री गरीब कल्याण अन्न योजना",
        category: "Social",
        categoryIcon: "fa-solid fa-bowl-rice",
        ministry: "Department of Food & Public Distribution, Ministry of Consumer Affairs",
        benefitSummary: "5 KG free foodgrains (Rice/Wheat) per person per month",
        description: "Provides free foodgrains to over 80 Crore eligible priority households and Antyodaya Anna Yojana (AAY) families to ensure national food and nutritional security.",
        eligibility: "All active beneficiaries covered under the National Food Security Act (NFSA) via Antyodaya Anna Yojana (AAY) and Priority Household (PHH) ration cards.",
        documents: ["Aadhaar Card", "Ration Card registered under NFSA", "Biometric verification at Fair Price Shop"],
        link: "https://nfsa.gov.in/",
        helpline: "1967 / 1800-180-2087",
        steps: [
            "Check your family ration card seeding status on the One Nation One Ration Card (Mera Ration) app.",
            "Visit any nearest Fair Price Shop (FPS) anywhere in India.",
            "Place your finger on the electronic Point of Sale (ePoS) device for Aadhaar biometric verification.",
            "Collect your entitled free foodgrains without paying any per-kilogram grains charges.",
            "Obtain digital electronic receipt of collection."
        ],
        tags: ["ration", "free food", "rice", "wheat", "food security", "anna yojana", "bpl", "poor"]
    }
];

// ==========================================================================
// 2. Application State & Storage
// ==========================================================================
const state = {
    searchQuery: "",
    selectedCategory: "all",
    sortBy: "default",
    showOnlyBookmarked: false,
    bookmarks: JSON.parse(localStorage.getItem("schemesathi_bookmarks") || "[]"),
    checklist: JSON.parse(localStorage.getItem("schemesathi_checklist") || "{}"),
    theme: localStorage.getItem("schemesathi_theme") || "light"
};

// ==========================================================================
// 3. DOM Element References
// ==========================================================================
const elements = {
    schemeList: document.getElementById("schemeList"),
    search: document.getElementById("search"),
    clearSearchBtn: document.getElementById("clearSearchBtn"),
    sortBy: document.getElementById("sortBy"),
    categoryPills: document.getElementById("categoryPills"),
    bookmarkFilterBtn: document.getElementById("bookmarkFilterBtn"),
    headerBookmarkBtn: document.getElementById("headerBookmarkBtn"),
    bookmarkCount: document.getElementById("bookmarkCount"),
    savedCountLabel: document.getElementById("savedCountLabel"),
    resultsCount: document.getElementById("resultsCount"),
    activeFilterDesc: document.getElementById("activeFilterDesc"),
    resetFiltersBtn: document.getElementById("resetFiltersBtn"),
    
    // Hero Elements
    heroSearchInput: document.getElementById("heroSearchInput"),
    heroSearchBtn: document.getElementById("heroSearchBtn"),
    
    // Eligibility Wizard
    wizardOccupation: document.getElementById("wizardOccupation"),
    wizardAge: document.getElementById("wizardAge"),
    wizardGoal: document.getElementById("wizardGoal"),
    wizardCheckBtn: document.getElementById("wizardCheckBtn"),
    wizardResetBtn: document.getElementById("wizardResetBtn"),
    wizardResultBar: document.getElementById("wizardResultBar"),
    wizardResultText: document.getElementById("wizardResultText"),

    // Document Checklist
    checklistItems: document.getElementById("checklistItems"),
    checklistProgressBar: document.getElementById("checklistProgressBar"),
    checklistPercentage: document.getElementById("checklistPercentage"),
    checklistFeedback: document.getElementById("checklistFeedback"),
    resetChecklistBtn: document.getElementById("resetChecklistBtn"),

    // Modal
    schemeModal: document.getElementById("schemeModal"),
    modalCloseBtn: document.getElementById("modalCloseBtn"),
    modalCategory: document.getElementById("modalCategory"),
    modalMinistry: document.getElementById("modalMinistry"),
    modalTitle: document.getElementById("modalTitle"),
    modalHindiName: document.getElementById("modalHindiName"),
    modalBenefit: document.getElementById("modalBenefit"),
    modalDescription: document.getElementById("modalDescription"),
    modalEligibility: document.getElementById("modalEligibility"),
    modalDocuments: document.getElementById("modalDocuments"),
    modalSteps: document.getElementById("modalSteps"),
    modalHelpline: document.getElementById("modalHelpline"),
    modalOfficialLink: document.getElementById("modalOfficialLink"),
    modalShareBtn: document.getElementById("modalShareBtn"),

    // Toast Container
    toastContainer: document.getElementById("toastContainer"),

    // Theme & Navigation
    themeToggleBtn: document.getElementById("themeToggleBtn"),
    mobileMenuBtn: document.getElementById("mobileMenuBtn"),
    navMenu: document.getElementById("navMenu"),
    backToTopBtn: document.getElementById("backToTopBtn")
};

// Track currently open modal scheme
let currentModalScheme = null;

// ==========================================================================
// 4. Rendering Functions
// ==========================================================================

/**
 * Filter, sort, and render schemes list
 */
function renderSchemes() {
    const query = state.searchQuery.trim().toLowerCase();
    const cat = state.selectedCategory;
    const onlyBookmarks = state.showOnlyBookmarked;

    // Filter schemes
    let filtered = schemesData.filter(scheme => {
        // Category check
        if (cat !== "all" && scheme.category !== cat) {
            return false;
        }

        // Bookmark check
        if (onlyBookmarks && !state.bookmarks.includes(scheme.id)) {
            return false;
        }

        // Search keyword check
        if (query) {
            const inName = scheme.name.toLowerCase().includes(query);
            const inHindi = scheme.hindiName.toLowerCase().includes(query);
            const inDesc = scheme.description.toLowerCase().includes(query);
            const inBenefit = scheme.benefitSummary.toLowerCase().includes(query);
            const inMinistry = scheme.ministry.toLowerCase().includes(query);
            const inEligibility = scheme.eligibility.toLowerCase().includes(query);
            const inTags = scheme.tags.some(tag => tag.toLowerCase().includes(query));
            const inDocs = scheme.documents.some(doc => doc.toLowerCase().includes(query));

            return inName || inHindi || inDesc || inBenefit || inMinistry || inEligibility || inTags || inDocs;
        }

        return true;
    });

    // Sort schemes
    if (state.sortBy === "name-asc") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (state.sortBy === "name-desc") {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (state.sortBy === "category") {
        filtered.sort((a, b) => a.category.localeCompare(b.category));
    }

    // Update meta bar & counter
    updateResultsMeta(filtered.length);

    // Empty state handling
    if (filtered.length === 0) {
        elements.schemeList.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-magnifying-glass-chart"></i>
                <h3>No Government Schemes Match Your Search</h3>
                <p>We couldn't find any schemes matching "${escapeHtml(state.searchQuery || state.selectedCategory)}". Try refining your search query or reset filters.</p>
                <button class="btn btn-primary" onclick="resetAllFilters()">
                    <i class="fa-solid fa-rotate-left"></i> Reset All Filters
                </button>
            </div>
        `;
        return;
    }

    // Render scheme cards
    elements.schemeList.innerHTML = filtered.map(scheme => {
        const isSaved = state.bookmarks.includes(scheme.id);
        const docsPreview = scheme.documents.slice(0, 3).map(doc => `<span class="doc-pill">${escapeHtml(doc)}</span>`).join("");
        const moreDocsCount = scheme.documents.length > 3 ? `<span class="doc-pill">+${scheme.documents.length - 3} more</span>` : "";

        return `
            <article class="scheme-card" data-id="${scheme.id}">
                <div class="scheme-card-top">
                    <div class="card-badges">
                        <span class="category-tag cat-${scheme.category}">
                            <i class="${scheme.categoryIcon}"></i> ${scheme.category}
                        </span>
                        <span class="ministry-tag">${escapeHtml(scheme.ministry)}</span>
                    </div>
                    <button class="bookmark-btn ${isSaved ? 'saved' : ''}" 
                            data-action="bookmark" 
                            data-id="${scheme.id}" 
                            title="${isSaved ? 'Remove from Saved' : 'Save for later'}"
                            aria-label="${isSaved ? 'Remove from Saved' : 'Save for later'}">
                        <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
                    </button>
                </div>

                <h3 class="scheme-card-title">${escapeHtml(scheme.name)}</h3>
                <div class="scheme-card-hindi">${escapeHtml(scheme.hindiName)}</div>

                <div class="card-benefit-box">
                    <i class="fa-solid fa-gift"></i>
                    <div>
                        <strong>Key Benefit:</strong> ${escapeHtml(scheme.benefitSummary)}
                    </div>
                </div>

                <p class="scheme-card-desc">${escapeHtml(scheme.description)}</p>

                <div class="card-details-list">
                    <div class="detail-row">
                        <span class="detail-label"><i class="fa-solid fa-check"></i> Eligibility:</span>
                        <span>${escapeHtml(scheme.eligibility.substring(0, 95))}...</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label"><i class="fa-solid fa-folder"></i> Documents:</span>
                        <div class="doc-tag-pills">
                            ${docsPreview} ${moreDocsCount}
                        </div>
                    </div>
                </div>

                <div class="scheme-card-actions">
                    <button class="btn btn-outline" data-action="details" data-id="${scheme.id}">
                        <i class="fa-solid fa-eye"></i> View Details
                    </button>
                    <a href="${scheme.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" title="Opens official government portal">
                        Apply Online <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </article>
        `;
    }).join("");
}

/**
 * Update dynamic counts in category pills and UI labels
 */
function updateCategoryCounts() {
    const totalCount = schemesData.length;
    const countAllElem = document.getElementById("count-all");
    if (countAllElem) countAllElem.textContent = totalCount;

    const categories = ["Farmers", "Students", "Women", "Health", "Business", "Social"];
    categories.forEach(cat => {
        const count = schemesData.filter(s => s.category === cat).length;
        const elem = document.getElementById(`count-${cat}`);
        if (elem) elem.textContent = count;
    });

    // Update bookmark counts
    const bookmarkCount = state.bookmarks.length;
    if (elements.bookmarkCount) elements.bookmarkCount.textContent = bookmarkCount;
    if (elements.savedCountLabel) elements.savedCountLabel.textContent = bookmarkCount;
}

/**
 * Update the metadata text above the schemes grid
 */
function updateResultsMeta(count) {
    if (!elements.resultsCount) return;

    let text = `Showing <strong>${count}</strong> verified scheme${count === 1 ? '' : 's'}`;
    if (state.selectedCategory !== "all") {
        text += ` in <strong>${state.selectedCategory}</strong>`;
    }
    if (state.showOnlyBookmarked) {
        text += ` (Saved Only)`;
    }
    if (state.searchQuery) {
        text += ` matching "${escapeHtml(state.searchQuery)}"`;
    }
    elements.resultsCount.innerHTML = text;

    // Show/hide reset button
    const isFiltered = state.selectedCategory !== "all" || state.showOnlyBookmarked || state.searchQuery || state.sortBy !== "default";
    elements.resetFiltersBtn.style.display = isFiltered ? "inline-flex" : "none";
}

// ==========================================================================
// 5. User Interaction & Handlers
// ==========================================================================

/**
 * Bookmark toggle handler
 */
function toggleBookmark(schemeId) {
    const index = state.bookmarks.indexOf(schemeId);
    let message = "";

    if (index > -1) {
        state.bookmarks.splice(index, 1);
        message = "Scheme removed from saved bookmarks.";
    } else {
        state.bookmarks.push(schemeId);
        message = "Scheme saved to your bookmarks!";
    }

    localStorage.setItem("schemesathi_bookmarks", JSON.stringify(state.bookmarks));
    updateCategoryCounts();
    renderSchemes();
    showToast(message, index > -1 ? "info" : "success");
}

/**
 * Open details modal for a scheme
 */
function openModal(schemeId) {
    const scheme = schemesData.find(s => s.id === schemeId);
    if (!scheme) return;

    currentModalScheme = scheme;

    elements.modalCategory.textContent = scheme.category;
    elements.modalCategory.className = `badge-category cat-${scheme.category}`;
    elements.modalMinistry.textContent = scheme.ministry;
    elements.modalTitle.textContent = scheme.name;
    elements.modalHindiName.textContent = scheme.hindiName;
    elements.modalBenefit.textContent = scheme.benefitSummary;
    elements.modalDescription.textContent = scheme.description;
    elements.modalEligibility.textContent = scheme.eligibility;
    elements.modalHelpline.textContent = scheme.helpline;
    elements.modalOfficialLink.href = scheme.link;

    // Render documents
    elements.modalDocuments.innerHTML = scheme.documents.map(doc => `
        <span class="doc-tag-item"><i class="fa-solid fa-file-circle-check"></i> ${escapeHtml(doc)}</span>
    `).join("");

    // Render step-by-step
    elements.modalSteps.innerHTML = scheme.steps.map(step => `
        <li>${escapeHtml(step)}</li>
    `).join("");

    elements.schemeModal.classList.add("open");
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

/**
 * Close modal
 */
function closeModal() {
    elements.schemeModal.classList.remove("open");
    document.body.style.overflow = "";
    currentModalScheme = null;
}

/**
 * Share scheme link / details
 */
function shareCurrentScheme() {
    if (!currentModalScheme) return;

    const shareData = {
        title: `${currentModalScheme.name} - SchemeSathi`,
        text: `Check out ${currentModalScheme.name} (${currentModalScheme.hindiName}): ${currentModalScheme.benefitSummary}. Official portal: ${currentModalScheme.link}`,
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData).catch(() => {});
    } else {
        navigator.clipboard.writeText(`${shareData.text} \nDiscovered on SchemeSathi: ${window.location.href}`);
        showToast("Scheme information copied to clipboard!", "success");
    }
}

/**
 * Reset all filters to default
 */
window.resetAllFilters = function() {
    state.searchQuery = "";
    state.selectedCategory = "all";
    state.sortBy = "default";
    state.showOnlyBookmarked = false;

    if (elements.search) elements.search.value = "";
    if (elements.sortBy) elements.sortBy.value = "default";
    if (elements.clearSearchBtn) elements.clearSearchBtn.style.display = "none";
    if (elements.bookmarkFilterBtn) elements.bookmarkFilterBtn.classList.remove("active");

    // Reset category pills
    document.querySelectorAll(".cat-pill").forEach(pill => {
        pill.classList.toggle("active", pill.getAttribute("data-category") === "all");
    });

    renderSchemes();
    showToast("All filters have been reset.", "info");
};

/**
 * Toast Notification Helper
 */
function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    const iconClass = type === "success" ? "fa-circle-check" : "fa-circle-info";
    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${escapeHtml(message)}</span>`;

    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3200);
}

/**
 * Safe HTML Escaper
 */
function escapeHtml(text) {
    if (!text) return "";
    return text.toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// ==========================================================================
// 6. Interactive Eligibility Checker Wizard
// ==========================================================================
function initEligibilityWizard() {
    elements.wizardCheckBtn.addEventListener("click", () => {
        const occ = elements.wizardOccupation.value;
        const age = elements.wizardAge.value;
        const goal = elements.wizardGoal.value;

        let matchedCategory = "all";
        let searchKeyword = "";

        // Map selections
        if (occ !== "any") {
            matchedCategory = occ;
        }

        if (goal === "grant") {
            searchKeyword = "direct";
        } else if (goal === "health") {
            matchedCategory = "Health";
        } else if (goal === "education") {
            matchedCategory = "Students";
        } else if (goal === "loan") {
            matchedCategory = "Business";
        } else if (goal === "housing") {
            searchKeyword = "housing";
        } else if (goal === "pension") {
            matchedCategory = "Social";
            searchKeyword = "pension";
        }

        // Apply filters
        state.selectedCategory = matchedCategory;
        state.searchQuery = searchKeyword;
        if (elements.search) elements.search.value = searchKeyword;

        // Update pills
        document.querySelectorAll(".cat-pill").forEach(pill => {
            pill.classList.toggle("active", pill.getAttribute("data-category") === matchedCategory);
        });

        renderSchemes();

        // Calculate count of matched schemes
        const matchCount = document.querySelectorAll(".scheme-card").length;
        elements.wizardResultText.textContent = `Found ${matchCount} matching scheme${matchCount === 1 ? '' : 's'} based on your profile!`;
        elements.wizardResultBar.style.display = "flex";

        showToast(`Filtered ${matchCount} eligible schemes for you!`, "success");
    });

    elements.wizardResetBtn.addEventListener("click", () => {
        elements.wizardOccupation.value = "any";
        elements.wizardAge.value = "any";
        elements.wizardGoal.value = "any";
        elements.wizardResultBar.style.display = "none";
        resetAllFilters();
    });
}

// ==========================================================================
// 7. Interactive Document Readiness Tracker
// ==========================================================================
function initDocChecklist() {
    const checkboxes = elements.checklistItems.querySelectorAll("input[type='checkbox']");
    const totalDocs = checkboxes.length;

    // Restore saved state
    checkboxes.forEach(cb => {
        const docKey = cb.getAttribute("data-doc");
        if (state.checklist[docKey]) {
            cb.checked = true;
        }

        cb.addEventListener("change", () => {
            state.checklist[docKey] = cb.checked;
            localStorage.setItem("schemesathi_checklist", JSON.stringify(state.checklist));
            updateChecklistScore();
        });
    });

    function updateChecklistScore() {
        const checkedCount = Object.values(state.checklist).filter(Boolean).length;
        const percentage = Math.round((checkedCount / totalDocs) * 100);

        elements.checklistPercentage.textContent = `${percentage}%`;
        elements.checklistProgressBar.style.width = `${percentage}%`;

        if (percentage === 100) {
            elements.checklistFeedback.textContent = "🎉 Outstanding! You have all major digital records ready for instant DBT application.";
            elements.checklistFeedback.style.color = "var(--primary)";
        } else if (percentage >= 60) {
            elements.checklistFeedback.textContent = "👍 Good readiness! You can comfortably apply for most central and state welfare programs.";
            elements.checklistFeedback.style.color = "var(--primary-dark)";
        } else if (percentage > 0) {
            elements.checklistFeedback.textContent = "ℹ️ Keep going! Having Aadhaar and bank linked to DBT covers majority of basic requirements.";
            elements.checklistFeedback.style.color = "var(--text-secondary)";
        } else {
            elements.checklistFeedback.textContent = "Select the documents you have prepared to see your readiness score.";
            elements.checklistFeedback.style.color = "var(--text-secondary)";
        }
    }

    elements.resetChecklistBtn.addEventListener("click", () => {
        checkboxes.forEach(cb => {
            cb.checked = false;
        });
        state.checklist = {};
        localStorage.removeItem("schemesathi_checklist");
        updateChecklistScore();
        showToast("Document checklist reset.", "info");
    });

    updateChecklistScore();
}

// ==========================================================================
// 8. Awareness Tabs & FAQs Accordion
// ==========================================================================
function initTabsAndFaq() {
    // Awareness Section Tabs
    const tabBtns = document.querySelectorAll(".awareness-tab-nav .tab-btn");
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".awareness-tabs-card .tab-pane").forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            const targetId = btn.getAttribute("data-tab");
            const targetPane = document.getElementById(targetId);
            if (targetPane) targetPane.classList.add("active");
        });
    });

    // FAQs Accordion
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const questionBtn = item.querySelector(".faq-question");
        questionBtn.addEventListener("click", () => {
            const isActive = item.classList.contains("active");
            faqItems.forEach(i => i.classList.remove("active"));
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
}

// ==========================================================================
// 9. Search & Filter Listeners Setup
// ==========================================================================
function initSearchAndFilters() {
    // Main Search Input
    elements.search.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        elements.clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
        renderSchemes();
    });

    // Clear Search Button
    elements.clearSearchBtn.addEventListener("click", () => {
        elements.search.value = "";
        state.searchQuery = "";
        elements.clearSearchBtn.style.display = "none";
        renderSchemes();
        elements.search.focus();
    });

    // Hero Search Input & Button
    elements.heroSearchBtn.addEventListener("click", () => {
        const query = elements.heroSearchInput.value.trim();
        elements.search.value = query;
        state.searchQuery = query;
        elements.clearSearchBtn.style.display = query ? "block" : "none";
        renderSchemes();
        document.getElementById("schemes").scrollIntoView({ behavior: "smooth" });
    });

    elements.heroSearchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            elements.heroSearchBtn.click();
        }
    });

    // Quick Tag Pills in Hero
    document.querySelectorAll(".quick-tags .tag-pill").forEach(pill => {
        pill.addEventListener("click", () => {
            const cat = pill.getAttribute("data-category");
            state.selectedCategory = cat;
            state.searchQuery = "";
            elements.search.value = "";

            document.querySelectorAll(".cat-pill").forEach(p => {
                p.classList.toggle("active", p.getAttribute("data-category") === cat);
            });

            renderSchemes();
            document.getElementById("schemes").scrollIntoView({ behavior: "smooth" });
        });
    });

    // Category Pills in Directory
    elements.categoryPills.addEventListener("click", (e) => {
        const pill = e.target.closest(".cat-pill");
        if (!pill) return;

        document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");

        state.selectedCategory = pill.getAttribute("data-category");
        renderSchemes();
    });

    // Sort Dropdown
    elements.sortBy.addEventListener("change", (e) => {
        state.sortBy = e.target.value;
        renderSchemes();
    });

    // Bookmark Filter Toggle Pill
    elements.bookmarkFilterBtn.addEventListener("click", () => {
        state.showOnlyBookmarked = !state.showOnlyBookmarked;
        elements.bookmarkFilterBtn.classList.toggle("active", state.showOnlyBookmarked);
        renderSchemes();
    });

    // Header Bookmark Button
    elements.headerBookmarkBtn.addEventListener("click", () => {
        state.showOnlyBookmarked = true;
        elements.bookmarkFilterBtn.classList.add("active");
        renderSchemes();
        document.getElementById("schemes").scrollIntoView({ behavior: "smooth" });
    });

    // Reset Filters Button
    elements.resetFiltersBtn.addEventListener("click", window.resetAllFilters);

    // Footer Category Links
    document.querySelectorAll("[data-footer-category]").forEach(link => {
        link.addEventListener("click", (e) => {
            const cat = link.getAttribute("data-footer-category");
            state.selectedCategory = cat;
            document.querySelectorAll(".cat-pill").forEach(p => {
                p.classList.toggle("active", p.getAttribute("data-category") === cat);
            });
            renderSchemes();
        });
    });

    // Delegated Event Listener for Card Actions (Bookmarks & Details)
    elements.schemeList.addEventListener("click", (e) => {
        const bookmarkBtn = e.target.closest("[data-action='bookmark']");
        if (bookmarkBtn) {
            const id = bookmarkBtn.getAttribute("data-id");
            toggleBookmark(id);
            return;
        }

        const detailsBtn = e.target.closest("[data-action='details']");
        if (detailsBtn) {
            const id = detailsBtn.getAttribute("data-id");
            openModal(id);
            return;
        }
    });

    // Modal Events
    elements.modalCloseBtn.addEventListener("click", closeModal);
    elements.schemeModal.addEventListener("click", (e) => {
        if (e.target === elements.schemeModal) {
            closeModal();
        }
    });
    elements.modalShareBtn.addEventListener("click", shareCurrentScheme);

    // Keyboard Shortcuts: '/' to search, 'Esc' to close modal
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && elements.schemeModal.classList.contains("open")) {
            closeModal();
        } else if (e.key === "/" && document.activeElement !== elements.search && document.activeElement !== elements.heroSearchInput) {
            e.preventDefault();
            elements.search.focus();
            elements.search.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    });
}

// ==========================================================================
// 10. Theme Toggle & Mobile Navigation
// ==========================================================================
function initThemeAndNavigation() {
    // Theme setup
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = state.theme || (prefersDark ? "dark" : "light");
    applyTheme(initialTheme);

    elements.themeToggleBtn.addEventListener("click", () => {
        const nextTheme = state.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
    });

    function applyTheme(theme) {
        state.theme = theme;
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("schemesathi_theme", theme);

        const icon = elements.themeToggleBtn.querySelector("i");
        if (icon) {
            icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
        }
    }

    // Mobile Menu Toggle
    elements.mobileMenuBtn.addEventListener("click", () => {
        elements.navMenu.classList.toggle("open");
        const icon = elements.mobileMenuBtn.querySelector("i");
        icon.className = elements.navMenu.classList.contains("open") ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    });

    // Close mobile menu when clicking nav links
    elements.navMenu.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            elements.navMenu.classList.remove("open");
            const icon = elements.mobileMenuBtn.querySelector("i");
            if (icon) icon.className = "fa-solid fa-bars";
        });
    });

    // Back to Top Button
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            elements.backToTopBtn.classList.add("show");
        } else {
            elements.backToTopBtn.classList.remove("show");
        }
    });
}

// ==========================================================================
// 11. App Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    updateCategoryCounts();
    renderSchemes();
    initSearchAndFilters();
    initEligibilityWizard();
    initDocChecklist();
    initTabsAndFaq();
    initThemeAndNavigation();
});
