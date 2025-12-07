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
    // Base interest rate
    baseInterestRate: 12, // 12% annual interest

    // Display strings (for easy updates)
    display: {
      baseRate: "Up to 12%",
      maxRate: "Up to 12%",
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
  },

  // ===========================
  // ETYMOLOGY & BRANDING
  // ===========================
  etymology: {
    word: "Nekkha",
    script: "नेक्ख",
    language: "Pali",
    meaning: "Gold and Precious Treasures",
    era: "Time of the Buddha (5th-4th century BCE)",
    description:
      "In ancient Pali, the sacred language of early Buddhism spoken during the time of the Buddha (5th-4th century BCE), Nekkha referred to gold and precious treasures. Pali, derived from Middle Indo-Aryan languages of the Magadha region (modern-day Bihar, India), was used to preserve the Buddha's teachings in the Tipiṭaka. Just as gold represented enduring wealth in that era, today we honor this ancient wisdom by helping you grow your digital gold through secure, transparent cryptocurrency deposits.",
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
      "Deposit Nexa cryptocurrency and earn competitive up to 12% annual fixed deposit rates. Secure, transparent, and powered by DeFi technology.",
    stats: [
      {
        number: "Up to 12%",
        label: "Annual Interest",
        description: "Consistent returns on your deposits",
      },
      {
        number: "1 Crore",
        label: "Minimum Deposit",
        description: "Start earning with 1 crore Nexa",
      },
      {
        number: "30 Days",
        label: "Lock-in Period",
        description: "Minimum commitment period",
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
      id: "consistent-returns",
      icon: "users",
      title: "Consistent Returns",
      description:
        "Earn up to 12% annual interest on your Nexa deposits. Predictable, reliable returns with daily compounding and monthly payouts for maximum growth.",
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
      id: "minimum-deposit",
      question: "What is the minimum deposit amount?",
      answer:
        "The minimum deposit is 1 crore Nexa (10,000,000 Nexa). This ensures meaningful returns and helps maintain the platform's sustainability.",
    },
    {
      id: "interest-calculation",
      question: "How is interest calculated?",
      answer:
        "Interest is calculated daily and compounded on your deposit at a rate of up to 12% annually. All interest accumulates and pays out monthly, giving you consistent and predictable returns on your investment.",
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
        "Transfer minimum 1 crore Nexa to your Nekkha wallet. Your deposits are secured by blockchain technology and smart contracts.",
    },
    {
      step: 3,
      title: "Earn Interest",
      description:
        "Your deposits earn up to 12% annually with daily compounding. Watch your wealth grow with consistent, reliable returns paid out monthly.",
    },
  ],

  // ===========================
  // FOOTER STATS
  // ===========================
  footerStats: [
    {
      number: "Up to 12%",
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
        id: "early-banking",
        era: "1600s - 1800s",
        title: "Early Banking Systems",
        description:
          "The first banks emerged in Europe, offering basic deposit services. Merchants and nobility stored wealth in vaults, but banking was reserved for the elite with minimal interest earnings.",
        image: "assets/images/early-banking.jpg",
        imageAlt: "Early European banking institutions",
      },
      {
        id: "traditional-banking",
        era: "1900s - 1970s",
        title: "Traditional Fixed Deposits",
        description:
          "Banks introduced FDs for the masses - deposit money, earn fixed interest. Revolutionary for savers, but limited by geography, inflation, and low returns typically 3-5% annually.",
        image: "assets/images/traditional-bank.jpg",
        imageAlt: "Traditional banking and fixed deposits",
      },
      {
        id: "digital-banking",
        era: "1980s - 2000s",
        title: "Digital Banking Era",
        description:
          "ATMs, online banking, and digital transactions transformed finance. Interest rates remained low (1-4%), and banks still controlled your money. Convenience improved, but returns didn't.",
        image: "assets/images/digital-banking.jpg",
        imageAlt: "Digital banking and online transactions",
      },
      {
        id: "cryptocurrency",
        era: "2009 - 2020",
        title: "Cryptocurrency Emergence",
        description:
          "Bitcoin introduced decentralized money. People could own and control their assets without banks. Early adopters saw massive returns, but no structured deposit systems existed yet.",
        image: "assets/images/cryptocurrency.jpg",
        imageAlt: "Bitcoin and early cryptocurrency",
      },
      {
        id: "defi",
        era: "2020s - Present",
        title: "DeFi Revolution",
        description:
          "Cryptocurrency fixed deposits combine the best of all eras - the security of gold, liquidity of modern banking, with blockchain transparency and higher returns (8-12% annually).",
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
