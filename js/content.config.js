/**
 * Nekkha.com Content Configuration
 *
 * Centralized content management for easy updates and future i18n support.
 * Update values here instead of directly in HTML.
 *
 * For multi-language support:
 * - Structure is ready for i18n libraries (i18next, vue-i18n, etc.)
 * - Or use browser's built-in translation (add lang="en" to <html>)
 * - Future: Add content.hi.js, content.bn.js, content.ne.js for Hindi, Bengali, Nepali
 */

const CONTENT_CONFIG = {
  // ===========================
  // SITE METADATA
  // ===========================
  site: {
    name: "Nekkha",
    tagline: "Digital Gold, Reimagined",
    domain: "nekkha.com",
    language: "en",
    supportedLanguages: ["en", "hi", "bn", "ne"], // English, Hindi, Bengali, Nepali
  },

  // ===========================
  // FINANCIAL RATES & TERMS
  // ===========================
  rates: {
    // Base interest rate (without referral)
    baseInterestRate: 12, // 12% annual interest

    // Referral structure
    referralBonus: 1, // 1% of the base rate (12% × 1% = 0.12% total)
    referralBonusPercentage: 8.33, // 1% is 8.33% of 12% (for display: "1% of 12%")

    // What referred users get
    referredUserRate: 11, // 11% annual interest (12% - 1%)
    referrerGetsFromReferred: 1, // Referrer gets 1% of the referred user's 11%

    // Total potential earnings
    maxTotalRate: 12, // Maximum 12% if you have no referrer
    referredUserTotalRate: 11, // 11% if you were referred by someone

    // Display strings (for easy updates)
    display: {
      baseRate: "12%",
      referredRate: "11%",
      referralBonus: "1%",
      referralBonusDescription: "1% of 12%",
      maxRate: "12%",
    },
  },

  // ===========================
  // DEPOSIT REQUIREMENTS
  // ===========================
  deposit: {
    minimumAmount: 10000000, // 1 crore Nexa (in base units)
    minimumAmountDisplay: "1 crore Nexa",
    minimumAmountFormatted: "1,00,00,000",

    lockInPeriod: 30, // days
    lockInPeriodDisplay: "1 month",

    cooldownPeriod: 30, // days
    cooldownPeriodDisplay: "1 month",

    compoundingFrequency: "daily",
    payoutFrequency: "monthly",
  },

  // ===========================
  // CONTACT INFORMATION
  // ===========================
  contact: {
    whatsapp: {
      number: "+1234567890", // UPDATE: Your WhatsApp number
      countryCode: "+1",
      displayNumber: "+1 (234) 567-890",
      link: "https://wa.me/1234567890",
    },
    phone: {
      number: "+1234567890", // UPDATE: Your phone number
      displayNumber: "+1 (234) 567-890",
      link: "tel:+1234567890",
    },
    email: {
      support: "support@nekkha.com", // UPDATE: Your support email
      sales: "sales@nekkha.com",
      general: "hello@nekkha.com",
    },
    social: {
      twitter: "https://twitter.com/nekkha", // UPDATE: Your social links
      linkedin: "https://linkedin.com/company/nekkha",
      telegram: "https://t.me/nekkha",
      discord: "https://discord.gg/nekkha",
    },
  },

  // ===========================
  // WEB APP URLS
  // ===========================
  webapp: {
    login: "https://app.nekkha.com/login", // UPDATE: Your webapp login URL
    signup: "https://app.nekkha.com/signup", // UPDATE: Your webapp signup URL
    dashboard: "https://app.nekkha.com/dashboard",
    deposits: "https://app.nekkha.com/deposits",
    referrals: "https://app.nekkha.com/referrals",
  },

  // ===========================
  // ETYMOLOGY & BRANDING
  // ===========================
  etymology: {
    word: "Nekkha",
    script: "नेक्ख",
    language: "Pali",
    meaning: "Gold",
    era: "Time of the Buddha",
    description:
      "In the time of the Buddha, gold was called Nekkha in Pali. Today, we honor this ancient wisdom by helping you grow your digital gold.",
  },

  // ===========================
  // HERO SECTION CONTENT
  // ===========================
  hero: {
    title: {
      highlight: "Earn Up To 12% Interest",
      main: "on Your Nexa Deposits",
    },
    subtitle:
      "Deposit Nexa cryptocurrency and earn competitive fixed deposit rates. Sign up directly for 12%, or use a referral code for 11% (your referrer gets 1% bonus). Secure, transparent, and powered by DeFi technology.",
    stats: [
      {
        number: "12%",
        label: "Direct Signup Rate",
        description: "Annual interest if you sign up without a referral code",
      },
      {
        number: "11%",
        label: "With Referral Code",
        description: "Annual interest if you use someone's referral code",
      },
      {
        number: "+1%",
        label: "Referrer Bonus",
        description: "Extra earnings when you refer others",
      },
    ],
    cta: {
      primary: "Start Earning Today",
      secondary: "Learn How It Works",
    },
  },

  // ===========================
  // FEATURES SECTION
  // ===========================
  features: [
    {
      id: "high-returns",
      icon: "chart",
      title: "High Returns",
      description:
        "Earn up to 12% annual interest on your Nexa deposits. Higher returns than traditional banking with the security of blockchain technology.",
    },
    {
      id: "referral-program",
      icon: "users",
      title: "Referral Rewards",
      description:
        "Earn up to 12% on your deposits. If you sign up without a referral code, you get the full 12%. If someone refers you, you get 11% and they earn a 1% bonus from your earnings. Refer others to earn 1% bonus from their deposits too.",
    },
    {
      id: "secure-defi",
      icon: "shield",
      title: "Secure & Transparent",
      description:
        "Built on decentralized infrastructure with full transparency. Your funds are protected by smart contracts and blockchain security.",
    },
    {
      id: "easy-access",
      icon: "user",
      title: "Easy Access",
      description:
        "Simple deposit process with a minimum lock-in period of 1 month. Start with 1 crore Nexa and manage everything from your dashboard.",
    },
    {
      id: "no-fees",
      icon: "check",
      title: "No Hidden Fees",
      description:
        "What you see is what you get. No surprise charges, no hidden fees. Just transparent, straightforward returns on your investment.",
    },
    {
      id: "defi-innovation",
      icon: "grid",
      title: "DeFi Innovation",
      description:
        "Leverage the power of decentralized finance. Your deposits work harder in the crypto ecosystem than traditional banking systems.",
    },
  ],

  // ===========================
  // FAQ CONTENT
  // ===========================
  faq: [
    {
      id: "how-referral-works",
      question: "How does the referral system work?",
      answer:
        "Simple breakdown: Sign up directly = earn 12% on your deposits. Sign up with someone's referral code = you earn 11%, they earn 1% bonus from your earnings. When you refer others with your code = they earn 11%, you earn 1% bonus from their earnings. The 1% bonus is passive income that you earn on top of your own deposit interest.",
    },
    {
      id: "minimum-deposit",
      question: "What is the minimum deposit amount?",
      answer:
        "The minimum deposit is 1 crore Nexa (10,000,000 Nexa). This ensures meaningful returns and helps maintain the platform's sustainability.",
    },
    {
      id: "interest-calculation",
      question: "How is interest calculated?",
      answer:
        "Interest is calculated daily and compounded on your deposit. Your rate: 12% annually if you signed up directly, or 11% annually if you used a referral code. Referral bonus: If someone signs up with your code, you earn an additional 1% annually from their deposit earnings. All interest accumulates and pays out monthly.",
    },
    {
      id: "withdrawal-process",
      question: "When can I withdraw my funds?",
      answer:
        "You can withdraw your funds after the 1-month lock-in period. Once you request a withdrawal, there's a 1-month cooldown period before funds are released to ensure network stability.",
    },
    {
      id: "security-measures",
      question: "How secure are my deposits?",
      answer:
        "Your deposits are secured by blockchain technology and smart contracts. All transactions are transparent and verifiable on the Nexa blockchain. We use industry-standard security practices including cold storage and multi-signature wallets.",
    },
  ],

  // ===========================
  // HOW IT WORKS STEPS
  // ===========================
  howItWorks: [
    {
      step: 1,
      title: "Create Account",
      description:
        "Sign up in minutes with just your email and wallet address. Complete KYC verification for enhanced security.",
    },
    {
      step: 2,
      title: "Deposit Nexa",
      description:
        "Transfer minimum 1 crore Nexa to your Nekkha wallet. Optional: Use a referral code to earn 11% (the referrer gets 1% bonus). Without a code, you earn the full 12%.",
    },
    {
      step: 3,
      title: "Earn Interest",
      description:
        "Your deposits earn 12% annually. If you used someone's referral code, you earn 11% (they get 1% bonus). Share your referral link to earn 1% bonus from anyone who signs up with your code.",
    },
  ],

  // ===========================
  // FOOTER STATS
  // ===========================
  footerStats: [
    {
      number: "12%",
      label: "Annual Interest",
    },
    {
      number: "1M+",
      label: "Nexa Deposited",
    },
    {
      number: "24/7",
      label: "Support Available",
    },
  ],

  // ===========================
  // EVOLUTION TIMELINE
  // ===========================
  evolution: {
    sectionTitle: "The Evolution of Fixed Deposits",
    sectionSubtitle: "From ancient barter systems to modern DeFi solutions",
    timeline: [
      {
        id: "barter",
        era: "Ancient Era",
        title: "Barter Trading",
        description:
          "The earliest form of value exchange. People traded goods directly - wheat for cloth, livestock for tools. No standardized value, just mutual agreement.",
        image: "assets/images/barter-system.jpg",
        imageAlt: "Ancient barter trading system",
      },
      {
        id: "gold",
        era: "1000 BCE - 1900s",
        title: "Gold & Precious Metals",
        description:
          "Standardized currency emerged. Gold coins became the universal store of value. People saved wealth by hoarding gold, but it earned no interest.",
        image: "assets/images/gold-coins.jpg",
        imageAlt: "Historical gold coins and precious metals",
      },
      {
        id: "traditional-banking",
        era: "1900s - 2000s",
        title: "Traditional Fixed Deposits",
        description:
          "Banks introduced FDs - deposit money, earn fixed interest. Revolutionary for savers, but limited by geography, inflation, and low returns.",
        image: "assets/images/traditional-bank.jpg",
        imageAlt: "Traditional banking and fixed deposits",
      },
      {
        id: "defi",
        era: "2020s - Present",
        title: "DeFi Revolution",
        description:
          "Cryptocurrency fixed deposits combine the best of all eras - the security of gold, liquidity of modern banking, with blockchain transparency and higher returns.",
        image: "assets/images/crypto-defi.jpg",
        imageAlt: "Modern cryptocurrency and DeFi platforms",
      },
    ],
  },

  // ===========================
  // WHY NEKKHA SECTION
  // ===========================
  whyNekkha: {
    sectionTitle: "Why Nekkha FD is Important",
    sectionSubtitle: "The future of wealth preservation and growth",
    benefits: [
      {
        id: "inflation",
        number: "01",
        title: "Hedge Against Inflation",
        description:
          "Traditional savings accounts barely keep up with inflation. Nexa FDs offer competitive returns that help your wealth grow, not shrink.",
      },
      {
        id: "ownership",
        number: "02",
        title: "True Ownership",
        description:
          "Your crypto, your keys, your control. Unlike banks that use your deposits for loans, you maintain true ownership of your Nexa.",
      },
      {
        id: "accessibility",
        number: "03",
        title: "Global Accessibility",
        description:
          "No geographical barriers, no minimum net worth requirements. Anyone with Nexa can participate in wealth building, anywhere in the world.",
      },
      {
        id: "transparency",
        number: "04",
        title: "Transparent Returns",
        description:
          "Blockchain technology ensures complete transparency. Track your earnings in real-time, verify transactions, and see exactly where your returns come from.",
      },
      {
        id: "no-middlemen",
        number: "05",
        title: "No Middlemen",
        description:
          "DeFi eliminates unnecessary intermediaries. Lower costs mean higher returns for you. The future of finance is direct and decentralized.",
      },
      {
        id: "availability",
        number: "06",
        title: "24/7 Availability",
        description:
          "Unlike traditional banks with business hours, crypto markets never sleep. Access your account, monitor performance, and plan your finances anytime.",
      },
    ],
  },

  // ===========================
  // HOW IT WORKS SECTION
  // ===========================
  howItWorksSection: {
    sectionTitle: "How It Works",
    sectionSubtitle: "Start earning in three simple steps",
    requirementsTitle: "Requirements",
    requirements: [
      "Minimum deposit: 1 crore Nexa (10,000,000 NEXA)",
      "Minimum lock-in period: 1 month cooldown",
      "Valid Nexa wallet address",
      "Completed KYC verification",
    ],
  },

  // ===========================
  // ABOUT SECTION
  // ===========================
  about: {
    sectionTitle: "About Nekkha",
    sectionSubtitle: "Building the future of decentralized finance",
    mission: {
      title: "Our Mission",
      paragraphs: [
        "At Nekkha, we believe everyone deserves access to premium financial services. We're bridging the gap between traditional fixed deposits and the innovative world of cryptocurrency, making wealth building accessible to all.",
        "Our platform leverages blockchain technology to provide transparent, secure, and high-yield fixed deposit services for Nexa cryptocurrency holders. We're committed to democratizing finance and empowering individuals worldwide.",
      ],
    },
    values: {
      title: "Our Values",
      list: [
        {
          key: "Transparency",
          description: "Every transaction is recorded on the blockchain",
        },
        {
          key: "Security",
          description: "Your funds are protected by cutting-edge technology",
        },
        {
          key: "Innovation",
          description: "We're constantly improving our platform",
        },
        {
          key: "Community",
          description: "Your success is our success",
        },
      ],
    },
    stats: [
      {
        number: "100%",
        label: "Transparent Operations",
      },
      {
        number: "24/7",
        label: "Customer Support",
      },
      {
        number: "Up to 12%",
        label: "Annual Interest",
      },
    ],
  },

  // ===========================
  // FAQ SECTION
  // ===========================
  faqSection: {
    sectionTitle: "Frequently Asked Questions",
    sectionSubtitle: "Everything you need to know about Nekkha FD",
  },

  // ===========================
  // CONTACT SECTION
  // ===========================
  contactSection: {
    title: "Get in Touch",
    description: "Choose your preferred way to reach us. We're here to help!",
    socialTitle: "Follow Us",
  },

  // ===========================
  // FOOTER SECTION
  // ===========================
  footer: {
    tagline: "Building the future of decentralized finance",
    description:
      "Earn up to 12% annual interest on your Nexa deposits. Secure, transparent, and powered by blockchain technology.",
    ecosystemTitle: "Nexa Ecosystem",
    ecosystemLinks: [
      { name: "Nexa.cafe", url: "https://nexa.cafe" },
      { name: "Nexa.land", url: "https://nexa.land" },
      { name: "Nexa.house", url: "https://nexa.house" },
      { name: "Nexa.training", url: "https://nexa.training" },
      { name: "Nexa.institute", url: "https://nexa.institute" },
    ],
    legalTitle: "Legal",
    legalLinks: [
      { name: "Terms of Service", url: "#terms" },
      { name: "Privacy Policy", url: "#privacy" },
      { name: "Risk Disclosure", url: "#risk" },
      { name: "Compliance", url: "#compliance" },
    ],
    copyright: `© ${new Date().getFullYear()} Nekkha.com. All rights reserved.`,
  },
};

// Export for use in HTML or bundler
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONTENT_CONFIG;
}
