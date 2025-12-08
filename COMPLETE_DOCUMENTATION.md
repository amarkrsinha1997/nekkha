# Nekkha.com - Complete Documentation
**Last Updated:** December 8, 2025 | **Version:** 3.0 | **Status:** Production Ready with Multi-Language Support

> **🆕 NEW:** Runtime language switching implemented! Switch between English and Hindi instantly with the language toggle in the navbar.

---

# Table of Contents

1. [Quick Start Guide](#quick-start-guide)
2. [Project Overview](#project-overview)
3. [Language Switching Feature](#language-switching-feature) 🆕
4. [Master TODO & Pre-Launch Checklist](#master-todo--pre-launch-checklist)
5. [Interest Rate Structure](#interest-rate-structure)
6. [Content Management & Updates](#content-management--updates)
7. [Multi-Language Implementation](#multi-language-implementation) 🆕
8. [Commands Reference](#commands-reference)
9. [Action Items & Link Updates](#action-items--link-updates)
10. [Image Requirements](#image-requirements)
11. [PWA Icons](#pwa-icons)
12. [Design Specifications](#design-specifications)
13. [File Structure](#file-structure)
14. [Recent Updates](#recent-updates)

---

# Quick Start Guide

Welcome! Your modern landing page for Nekkha.com is ready. Here's everything you need to know to get started.

## 🚀 Quick Start

### Option 1: View Immediately (Simplest)
```bash
cd /Users/apple/Documents/Nekkha/Nekkha.com
open index.html
```

### Option 2: Run Local Server (Recommended)
```bash
cd /Users/apple/Documents/Nekkha/Nekkha.com
npm run serve
```
Then open http://localhost:3000

### Option 3: Development Mode (For making changes)
```bash
cd /Users/apple/Documents/Nekkha/Nekkha.com
npm run dev
```
This starts both the SCSS compiler (watches for changes) and a local server.

## 📁 What's Been Created

```
Nekkha.com/
├── index.html                 ✅ Complete landing page
├── COMPLETE_DOCUMENTATION.md ✅ This file - ALL docs in one place
├── README.md                 ✅ Basic project info
│
├── scss/
│   ├── _variables.scss       ✅ All color variables
│   ├── _mixins.scss         ✅ Reusable SCSS patterns
│   └── styles.scss          ✅ Main stylesheet
│
├── css/
│   └── styles.css           ✅ Compiled CSS (production ready)
│
├── js/
│   ├── main.js              ✅ All JavaScript functionality
│   ├── content.config.js    ✅ Content management (English)
│   └── content.hi.js        ✅ Hindi translation example
│
├── assets/
│   ├── images/              📁 Ready for your images
│   └── icons/               📁 Ready for PWA icons
│
├── sitemap.xml              ✅ SEO sitemap
├── robots.txt               ✅ Search engine rules
├── manifest.json            ✅ PWA manifest
└── package.json             ✅ Node.js config
```

## ✅ What's Already Working

### Features Implemented
- ✅ Animated starfield background
- ✅ Sticky navigation with scroll effect
- ✅ **Runtime language switching (English ⇄ Hindi)** 🆕
- ✅ Mobile responsive menu
- ✅ Hero section with stats
- ✅ Features section (6 feature cards)
- ✅ Evolution timeline (7 stages with animations)
- ✅ Why Nekkha slider (6 benefit cards)
- ✅ How It Works (3-step process)
- ✅ FAQ accordion (5 questions)
- ✅ Contact buttons with Font Awesome icons
- ✅ About section
- ✅ Footer with Nexa ecosystem links
- ✅ Back to top button
- ✅ Smooth scrolling
- ✅ **All content dynamically rendered from config** 🆕
- ✅ SEO optimization
- ✅ Accessibility (WCAG 2.1 AA)
- ✅ Responsive design (mobile, tablet, desktop)

### Color Palette in Use
- **Deep Black:** #05070a (background)
- **Royal Blue:** #1a4c8e (primary buttons)
- **Bright Blue:** #3374cb (accents)
- **Bright Gold:** #ebc73f (highlights)
- **WhatsApp Green:** #25D366 (WhatsApp button only)
- **White:** #ffffff (text)

---

# Project Overview

## About Nekkha.com

### What is Nekkha.com?
Nekkha.com is a decentralized finance (DeFi) platform that provides Fixed Deposit services for Nexa cryptocurrency holders. Users can deposit their Nexa and earn competitive interest rates.

### Etymology
**Nekkha (नेक्ख)** - In the time of the Buddha, gold was called "Nekkha" in Pali. Today, we honor this ancient wisdom by helping you grow your digital gold.

---

# Language Switching Feature

## 🌐 Runtime Language Switching (NEW!)

The website now supports **instant language switching** between English and Hindi without page reload!

### Using the Language Switcher

1. **Locate the globe icon (🌐)** in the navigation bar
2. **Desktop:** Hover over the icon to see language options
3. **Mobile:** Tap the icon to open the dropdown
4. **Select your language:**
   - 🇬🇧 English
   - 🇮🇳 हिन्दी (Hindi)

### What Changes When You Switch

**Everything** updates instantly:
- ✅ Navigation menu and buttons
- ✅ Hero section (title, subtitle, stats, CTAs)
- ✅ All 6 feature cards
- ✅ Complete evolution timeline (7 historical eras)
- ✅ Why Nekkha benefits slider (6 cards)
- ✅ How It Works steps and requirements
- ✅ FAQ questions and answers
- ✅ Contact section labels
- ✅ About section (mission, values, stats)
- ✅ Footer (all links, newsletter, copyright)

### Language Persistence

Your language choice is **automatically saved**:
- ✅ Persists across page refreshes
- ✅ Persists across browser sessions
- ✅ Per device/browser preference
- ✅ No cookies needed (uses localStorage)

### Technical Details

```javascript
// Language stored in browser:
localStorage.setItem('nekkhaSiteLang', 'en' | 'hi')

// HTML lang attribute updates automatically:
<html lang="en"> → <html lang="hi">

// Content loaded from:
js/content.config.js  (English - 500+ lines)
js/content.hi.js      (Hindi - 700+ lines)
```

### How It Works Internally

1. Page loads with default English config
2. `initLanguage()` checks localStorage for saved preference
3. If Hindi was previously selected:
   - Loads `content.hi.js` dynamically
   - Waits for script to load
   - Calls `rerenderContent()` to update all sections
4. When user switches language:
   - Saves choice to localStorage
   - Loads new config file
   - Re-renders entire page with new language
   - Updates `html[lang]` attribute

### Adding More Languages

The system is ready for additional languages:

**To add Bengali:**
1. Copy `js/content.hi.js` → `js/content.bn.js`
2. Translate all string values (keep structure identical)
3. Add Bengali option to language dropdown in `index.html`
4. That's it! The system handles the rest.

**Same process for:**
- Nepali (`js/content.ne.js`)
- Any other language

### Key Files

```
js/
├── content.config.js    # English (master template)
├── content.hi.js        # Hindi translation
├── content.bn.js        # Bengali (future)
├── content.ne.js        # Nepali (future)
└── main.js              # Language switching logic
```

### Testing Language Switching

```bash
# 1. Start dev server
npm run dev

# 2. Open in browser
http://localhost:3000

# 3. Click globe icon in navbar
# 4. Select हिन्दी
# 5. Entire page updates to Hindi!
# 6. Refresh page - Hindi persists
# 7. Switch back to English - instant update
```

### Key Features

#### Fixed Deposit Service
- Deposit Nexa cryptocurrency
- Earn percentage-based interest on deposits
- Secure and transparent DeFi platform

#### Terms & Requirements
- **Minimum Deposit:** 1 Crore Nexa (10,000,000 NEXA)
- **Lock-in Period:** 1 month minimum
- **Cooldown Period:** 1 month before withdrawal
- **Interest Calculation:** Daily compounding

---

# Master TODO & Pre-Launch Checklist

## 🎯 IMMEDIATE PRIORITIES

### 1. Essential Content (MUST DO BEFORE LAUNCH)
- [ ] Add actual logo (replace `<span class="logo-text">NEKKHA</span>`)
- [ ] Update WhatsApp number in `content.config.js` line 83
- [ ] Update Phone number in `content.config.js` line 88
- [ ] Update Email in `content.config.js` line 93
- [ ] Update webapp URLs in `content.config.js` lines 108-109

### 2. Image Assets (HIGH PRIORITY)

**Timeline Images (4 required)**
```
assets/images/
  ├── barter-system.jpg       (ancient trading scene)
  ├── gold-coins.jpg          (historical gold currency)
  ├── traditional-bank.jpg    (modern bank building)
  └── crypto-defi.jpg         (DeFi/crypto interface)
```
- Size: 800x600px recommended
- Format: WebP with JPG fallback
- Optimize: <200KB each

**Social Sharing Images**
```
assets/
  ├── og-image.jpg           (1200x630px - Facebook/LinkedIn)
  └── twitter-image.jpg      (1200x675px - Twitter)
```

**Favicon & PWA Icons**
```
/
  ├── favicon.ico            (16x16, 32x32 multi-size)
  ├── apple-touch-icon.png   (180x180)
  └── manifest icons:
      ├── icon-192.png       (192x192)
      └── icon-512.png       (512x512)
```

### 3. Technical Setup

**Analytics & Tracking**
- [ ] Get Google Analytics 4 tracking ID
- [ ] Add GA4 code to `index.html` line ~755
- [ ] Optional: Facebook Pixel

**Domain & Hosting**
- [ ] Purchase domain: nekkha.com
- [ ] Set up hosting (Vercel/Netlify/Custom)
- [ ] Configure SSL certificate (HTTPS)
- [ ] Set up CDN (Cloudflare recommended)

### 4. Testing & Validation

**Browser Testing**
- [ ] Chrome Desktop (Windows/Mac)
- [ ] Chrome Mobile (Android/iOS)
- [ ] Firefox Desktop
- [ ] Safari Desktop (Mac)
- [ ] Safari Mobile (iOS)
- [ ] Edge Desktop

**Performance (Lighthouse)**
- [ ] Performance score: 90+
- [ ] Accessibility score: 95+
- [ ] Best Practices score: 90+
- [ ] SEO score: 95+

**Accessibility (WCAG 2.1 AA)**
- [ ] Screen reader test (NVDA/JAWS)
- [ ] Keyboard navigation
- [ ] Focus indicators visible
- [ ] Color contrast ratio 4.5:1+

---

# Interest Rate Structure

## 📊 Rate Structure Explained

### The Simple Breakdown

**Direct Signup (No Referral Code)**
- User gets: **12% annually**
- Example: 1 crore deposit = 12 lakh/year

**Signup With Referral Code**
- The 12% base rate is **split** between you and your referrer:
  - User gets: **11% annually** (11/12 of the base rate)
  - Referrer gets: **1% annually** (1/12 of the base rate)
- Example: 1 crore deposit = 11 lakh/year (user) + 1 lakh/year (referrer)

**When You Refer Others**
- Your referral gets: **11% annually**
- You get: **1% annually** from the base 12% rate on their deposit (passive income on top of your own deposit)
- Example: Friend deposits 1 crore = they get 11 lakh/year, you get 1 lakh/year

### Key Points

The 12% base interest rate is the platform's total payout. When a referral code is used:
- **11%** goes to the depositor (the person who used the code)
- **1%** goes to the referrer (the person whose code was used)
- Total = **12%** (the full base rate is distributed)

**Important:** The referrer's 1% comes from the platform's 12% base rate, NOT from the user's 11% earnings. This is a split of the base rate (1/12), not a bonus deducted from the user's portion.

### Messaging Rules

✅ **ALWAYS SAY:**
- "12% if you sign up directly (without referral code)"
- "11% if you use a referral code (the 12% is split: 11% to you + 1% to referrer)"
- "Referrer earns 1% from the base rate on your deposit (1/12 of the total interest paid)"

❌ **NEVER SAY:**
- "Referrer gets 1% bonus from your earnings" (implies they get 1% of your 11%)
- "11,000 Nexa bonus" when referring to 1 crore deposit (should be 1 lakh)
- Just "11%" without explaining the split mechanism

## Visual Breakdown

```
SCENARIO 1: Direct Signup (No Referral)
┌──────────────────────────────────────┐
│  You Deposit: 1 Crore Nexa           │
│  ↓                                   │
│  Your Interest Rate: 12% annually    │
│  ↓                                   │
│  You Earn: 12,00,000 Nexa/year      │
└──────────────────────────────────────┘

SCENARIO 2: You Were Referred
┌──────────────────────────────────────┐
│  Friend Alice referred you           │
│  ↓                                   │
│  You Deposit: 1 Crore Nexa           │
│  ↓                                   │
│  Base Rate Split:                    │
│  - Your Share: 11% (11/12)          │
│  - Alice's Share: 1% (1/12)         │
│  ↓                                   │
│  You Earn: 11,00,000 Nexa/year      │
│  Alice Earns: 1,00,000 Nexa/year    │
│  ↓                                   │
│  Total Paid by Platform: 12 lakh     │
│  (12% of your 1 crore deposit)       │
└──────────────────────────────────────┘

SCENARIO 3: You Refer Someone
┌──────────────────────────────────────┐
│  You share referral link with Bob    │
│  ↓                                   │
│  Bob deposits: 1 Crore Nexa          │
│  ↓                                   │
│  Base Rate Split:                    │
│  - Bob's Share: 11% (11/12)         │
│  - Your Share: 1% (1/12)            │
│  ↓                                   │
│  Bob Earns: 11,00,000 Nexa/year     │
│  You Earn: 1,00,000 Nexa/year       │
│  (PASSIVE INCOME!)                   │
│  ↓                                   │
│  Total Paid by Platform: 12 lakh     │
│  (12% of Bob's 1 crore deposit)      │
└──────────────────────────────────────┘
```

### Scaling Example

If you refer 10 people who each deposit 1 crore:

```
Your Deposit: 1 Crore @ 12% = 12,00,000 Nexa/year
10 Referrals: 10 × 11,000 = 1,10,000 Nexa/year
─────────────────────────────────────────────────
TOTAL: 13,10,000 Nexa/year
Effective Rate: 13.1%
```

---

# Content Management & Updates

## 🎯 Most Common Updates

### Update Interest Rates
**File:** `js/content.config.js`  
**Lines:** 24-50

```javascript
rates: {
  baseInterestRate: 12,      // ← Change this
  referredUserRate: 11,      // ← And this
  referralBonus: 1,          // ← And this
}
```

### Update Contact Details
**File:** `js/content.config.js`  
**Lines:** 73-103

```javascript
contact: {
  whatsapp: {
    number: "+1234567890",   // ← Update
    link: "https://wa.me/1234567890",
  },
  phone: {
    number: "+1234567890",   // ← Update
  },
  email: {
    support: "support@nekkha.com",  // ← Update
  },
}
```

### Update Webapp URLs
**File:** `js/content.config.js`  
**Lines:** 105-112

```javascript
webapp: {
  login: "https://app.nekkha.com/login",    // ← Update
  signup: "https://app.nekkha.com/signup",  // ← Update
}
```

Also update in HTML:
- Line ~101: Login button
- Line ~102: Get Started button

## 📝 How to Apply Changes

### Evolution Timeline Content

**The evolution timeline is now loaded dynamically from `content.config.js`!**

1. Edit `js/content.config.js` lines 280-330 (evolution section)
2. Update any timeline item (era, title, description)
3. Save file
4. Refresh browser - changes appear immediately!

**Example:**
```javascript
// js/content.config.js
evolution: {
  sectionTitle: "The Evolution of Fixed Deposits", // ← Edit this
  sectionSubtitle: "From ancient barter...", // ← Or this
  timeline: [
    {
      era: "Ancient Era", // ← Edit timeline content
      title: "Barter Trading",
      description: "The earliest form...",
      // ...
    }
  ]
}
```

### Other Content Updates

1. Edit `js/content.config.js`
2. Save file
3. Refresh browser
4. Changes appear immediately (no build needed)

---

# Multi-Language Implementation

## ✅ Implementation Complete!

The website now has **full runtime language switching** implemented and working!

### What's Live Now

✅ **Language Switcher UI** - Globe icon (🌐) in navbar  
✅ **Instant Switching** - No page reload needed  
✅ **Two Languages** - English & Hindi fully translated  
✅ **Auto-Save** - Language preference persists via localStorage  
✅ **All Content Dynamic** - Every section renders from config files  

### How to Use

**For Users:**
1. Click the globe icon in the navbar
2. Select English or हिन्दी
3. Page updates instantly
4. Your choice is saved automatically

**For Developers:**
All content is in configuration files:
- `js/content.config.js` - English (master template)
- `js/content.hi.js` - Hindi translation

### Content Coverage

**Everything** is translated and switchable:
- Navigation menu (7 links + 2 CTAs)
- Hero section (etymology, title, subtitle, 3 stats, 2 CTAs)
- Features section (headers + rate clarity + 6 cards)
- Evolution timeline (headers + 7 historical eras)
- Why Nekkha slider (headers + 6 benefit cards)
- How It Works (headers + 3 steps + 4 requirements)
- FAQ section (headers + 5 Q&A pairs)
- Contact section (headers + 3 contact methods + social links)
- About section (headers + mission + values + 4 stats)
- Footer (tagline + 4 columns + newsletter + copyright)

### Adding New Languages

To add Bengali, Nepali, or any other language:

**Step 1:** Copy the English config
```bash
cp js/content.config.js js/content.bn.js  # Bengali
cp js/content.config.js js/content.ne.js  # Nepali
```

**Step 2:** Translate all string values
```javascript
// js/content.bn.js
const CONTENT_CONFIG = {
  site: {
    name: "নেক্খা",  // Translate
    tagline: "ডিজিটাল সোনা...",  // Translate
    language: "bn",  // Update language code
  },
  // ... translate all other strings
  // Keep structure identical!
}
```

**Step 3:** Add to language dropdown in `index.html`
```html
<div class="lang-dropdown">
  <a href="#" class="lang-option active" data-lang="en">
    <span class="lang-flag">🇬🇧</span>
    <span>English</span>
  </a>
  <a href="#" class="lang-option" data-lang="hi">
    <span class="lang-flag">🇮🇳</span>
    <span>हिन्दी</span>
  </a>
  <!-- Add new language -->
  <a href="#" class="lang-option" data-lang="bn">
    <span class="lang-flag">🇧🇩</span>
    <span>বাংলা</span>
  </a>
</div>
```

**That's it!** The system handles the rest automatically.

### Technical Architecture

**Files Structure:**
```
js/
├── content.config.js    # English (500+ lines)
├── content.hi.js        # Hindi (700+ lines)
├── content.bn.js        # Bengali (future)
├── content.ne.js        # Nepali (future)
└── main.js              # Render functions + language logic
```

**Key Functions in `main.js`:**
- `initLanguage()` - Checks localStorage, loads saved language
- `switchLanguage(lang)` - Switches language, saves preference
- `loadLanguageConfig(lang)` - Dynamically loads config file
- `rerenderContent()` - Re-renders all sections
- `loadNavigation()` - Renders navbar
- `loadHero()` - Renders hero section
- `loadFeaturesSection()` - Renders features
- `loadEvolutionSection()` - Renders timeline
- `loadWhyNekkhaSection()` - Renders slider
- `loadHowItWorksSection()` - Renders steps
- `loadFAQSection()` - Renders FAQ
- `loadContactSection()` - Renders contact
- `loadAboutSection()` - Renders about
- `loadFooter()` - Renders footer

### Build System

**Development:**
```bash
npm run dev  # SCSS watcher + dev server
```

**Production:**
```bash
npm run build         # Build CSS + JS
npm run build:js      # Build both language bundles
npm run build:js:en   # Build English bundle
npm run build:js:hi   # Build Hindi bundle
```

**Output:**
```
dist/
├── main.en.js    # English bundle (minified)
└── main.hi.js    # Hindi bundle (minified)
```

### SEO Considerations

**Current Implementation:**
- HTML `lang` attribute updates dynamically
- Meta tags are static (in HTML)
- Content is client-side rendered

**For Better SEO:**
Consider generating separate HTML files per language:
- `index.html` (English)
- `hi/index.html` (Hindi)
- `bn/index.html` (Bengali)
- Add `<link rel="alternate" hreflang="hi" href="/hi/">`

Or use server-side rendering to serve language-specific HTML.

### Testing Language Switching

```bash
# Start dev server
npm run dev

# Open browser
http://localhost:3000

# Test switching:
1. Click globe icon (🌐)
2. Select हिन्दी
3. Verify all content changes
4. Refresh page - Hindi persists
5. Switch back to English
6. Verify localStorage saves choice
```

```javascript
const CONTENT_CONFIG_HI = {
  site: {
    name: "नेक्खा",
    tagline: "डिजिटल सोना, फिर से कल्पना",
    language: "hi",
  },
  
  rates: {
    baseInterestRate: 12,  // Same numbers
    // ... translate display strings
  },
  
  hero: {
    title: "अपने नेक्सा पर प्रीमियम ब्याज अर्जित करें",
    subtitle: "नेक्सा क्रिप्टोकरेंसी जमा करें और...",
  },
}
```

### Switching Languages

In `index.html`, change:
```html
<!-- English -->
<script src="js/content.config.js"></script>

<!-- OR Hindi -->
<script src="js/content.hi.js"></script>
```

---

# i18n Implementation Guide

## ✅ What's Been Done

### 1. Documentation Cleanup
- ✅ Removed all 12 individual documentation files from `docs/` folder
- ✅ Everything consolidated into this file
- ✅ Removed empty `docs/` directory

### 2. Content Centralization Complete
- ✅ **ALL website content** now stored in `js/content.config.js`
- ✅ Includes every section:
  - Hero section (title, subtitle, stats, CTAs)
  - Features (all 6 feature cards)
  - Evolution timeline (4 historical eras)
  - Why Nekkha (6 benefits)
  - How It Works (3 steps + requirements)
  - FAQ (5 questions with answers)
  - About section (mission, values, stats)
  - Contact section (titles, descriptions)
  - Footer (ecosystem links, legal links, copyright)
  - Site metadata
  - Interest rates structure
  - Contact information
  - Webapp URLs

## 📋 Current Status

### What Works Now
- ✅ Content centralized in one config file
- ✅ Easy to update rates, contact info, URLs
- ✅ Ready for multi-language support
- ✅ Can create `content.hi.js`, `content.bn.js`, etc.

### How to Use Currently

**To change interest rates:**
```javascript
// Edit js/content.config.js line 29
baseInterestRate: 12,
```

**To add Hindi translation:**
1. Copy `js/content.config.js` → `js/content.hi.js`
2. Translate all string values (keep structure same)
3. In `index.html`, change:
   ```html
   <script src="js/content.config.js"></script>
   <!-- to -->
   <script src="js/content.hi.js"></script>
   ```

## 🚀 Optional Enhancement: Dynamic Content Loading

Currently, content is in `content.config.js` but HTML still has hardcoded text. Here's how to make it fully dynamic:

### Step 1: Add ContentLoader to main.js

Add this class to `js/main.js`:

```javascript
/**
 * ContentLoader - Dynamically populate HTML from CONTENT_CONFIG
 */
class ContentLoader {
  constructor(config) {
    this.config = config;
  }

  /**
   * Initialize - load all content on page load
   */
  init() {
    // Load all elements with data-content attribute
    document.querySelectorAll('[data-content]').forEach(element => {
      const path = element.getAttribute('data-content');
      const value = this.getNestedValue(this.config, path);
      
      if (value !== undefined) {
        // Handle different element types
        if (element.tagName === 'IMG') {
          element.src = value;
        } else if (element.tagName === 'A') {
          element.href = value;
        } else {
          element.textContent = value;
        }
      }
    });

    // Load complex sections
    this.loadFeatures();
    this.loadTimeline();
    this.loadWhyNekkha();
    this.loadHowItWorks();
    this.loadFAQ();
    this.loadAbout();
  }

  /**
   * Get nested object value by string path
   * Example: getNestedValue(obj, 'hero.title.main')
   */
  getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  /**
   * Load Features section dynamically
   */
  loadFeatures() {
    const container = document.querySelector('.features-grid');
    if (!container) return;

    container.innerHTML = this.config.features.map(feature => `
      <div class="feature-card">
        <div class="feature-icon">
          <!-- SVG icon here -->
        </div>
        <h3 class="feature-title">${feature.title}</h3>
        <p class="feature-description">${feature.description}</p>
      </div>
    `).join('');
  }

  /**
   * Load Evolution timeline
   */
  loadTimeline() {
    const container = document.querySelector('.timeline');
    if (!container) return;

    container.innerHTML = this.config.evolution.timeline.map((item, index) => `
      <div class="timeline-item">
        <div class="timeline-content ${index % 2 === 1 ? 'reverse' : ''}">
          <div class="timeline-image">
            <img src="${item.image}" alt="${item.imageAlt}" loading="lazy">
            <div class="image-placeholder">${item.title}</div>
          </div>
          <div class="timeline-text">
            <span class="timeline-year">${item.era}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  /**
   * Load Why Nekkha benefits
   */
  loadWhyNekkha() {
    const container = document.querySelector('.why-grid');
    if (!container) return;

    container.innerHTML = this.config.whyNekkha.benefits.map(benefit => `
      <div class="why-card">
        <div class="why-number">${benefit.number}</div>
        <h3>${benefit.title}</h3>
        <p>${benefit.description}</p>
      </div>
    `).join('');
  }

  /**
   * Load How It Works steps
   */
  loadHowItWorks() {
    const stepsContainer = document.querySelector('.steps');
    if (!stepsContainer) return;

    stepsContainer.innerHTML = this.config.howItWorks.map(step => `
      <div class="step">
        <div class="step-number">${step.step}</div>
        <div class="step-content">
          <h3>${step.title}</h3>
          <p>${step.description}</p>
        </div>
      </div>
    `).join('');
  }

  /**
   * Load FAQ accordion
   */
  loadFAQ() {
    const container = document.querySelector('.faq-list');
    if (!container) return;

    container.innerHTML = this.config.faq.map(item => `
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          ${item.question}
          <svg class="faq-icon" width="20" height="20" viewBox="0 0 20 20">
            <path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </button>
        <div class="faq-answer">
          <p>${item.answer}</p>
        </div>
      </div>
    `).join('');
  }

  /**
   * Load About section
   */
  loadAbout() {
    // Mission paragraphs
    const missionContainer = document.querySelector('.about-text');
    if (missionContainer) {
      const missionHTML = `
        <h3>${this.config.about.mission.title}</h3>
        ${this.config.about.mission.paragraphs.map(p => `<p>${p}</p>`).join('')}
        
        <h3>${this.config.about.values.title}</h3>
        <ul class="values-list">
          ${this.config.about.values.list.map(v => 
            `<li><strong>${v.key}:</strong> ${v.description}</li>`
          ).join('')}
        </ul>
      `;
      missionContainer.innerHTML = missionHTML;
    }

    // Stats
    const statsContainer = document.querySelector('.about-stats');
    if (statsContainer) {
      statsContainer.innerHTML = this.config.about.stats.map(stat => `
        <div class="stat-card">
          <h4>${stat.number}</h4>
          <p>${stat.label}</p>
        </div>
      `).join('');
    }
  }
}

// Initialize content loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const contentLoader = new ContentLoader(CONTENT_CONFIG);
  contentLoader.init();
  
  // Also initialize FAQ accordion after loading
  initFAQAccordion();
});
```

### Step 2: Update HTML with data-content attributes

**Example - Hero Section:**

```html
<!-- BEFORE (hardcoded) -->
<h1>Earn Up To 12% Interest on Your Nexa Deposits</h1>

<!-- AFTER (dynamic) -->
<h1>
  <span data-content="hero.title.highlight"></span>
  <span data-content="hero.title.main"></span>
</h1>
```

**Example - Contact Info:**

```html
<!-- BEFORE -->
<a href="tel:+1234567890">+1 (234) 567-890</a>

<!-- AFTER -->
<a data-content="contact.phone.link" href="#">
  <span data-content="contact.phone.displayNumber"></span>
</a>
```

### Step 3: Language Switching UI

Add language selector to navigation:

```html
<div class="language-selector">
  <button id="langBtn" aria-label="Change Language">
    <span id="currentLang">EN</span>
    <svg><!-- chevron down icon --></svg>
  </button>
  <ul class="lang-menu hidden">
    <li><a href="#" data-lang="en">English</a></li>
    <li><a href="#" data-lang="hi">हिन्दी</a></li>
    <li><a href="#" data-lang="bn">বাংলা</a></li>
    <li><a href="#" data-lang="ne">नेपाली</a></li>
  </ul>
</div>
```

Add language switcher logic:

```javascript
class LanguageSwitcher {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'en';
    this.setupListeners();
  }

  async switchLanguage(lang) {
    // Load the appropriate config file
    const script = document.createElement('script');
    script.src = `js/content.${lang}.js`;
    
    script.onload = () => {
      // Reinitialize content loader with new config
      const contentLoader = new ContentLoader(CONTENT_CONFIG);
      contentLoader.init();
      
      // Update HTML lang attribute
      document.documentElement.lang = lang;
      
      // Save preference
      localStorage.setItem('language', lang);
      
      // Update UI
      document.getElementById('currentLang').textContent = lang.toUpperCase();
    };
    
    document.head.appendChild(script);
  }

  setupListeners() {
    document.querySelectorAll('[data-lang]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = e.target.getAttribute('data-lang');
        this.switchLanguage(lang);
      });
    });
  }
}

// Initialize on page load
new LanguageSwitcher();
```

## 🎯 Benefits vs Trade-offs

### Pros of Dynamic Loading:
- ✅ **Instant language switching** - No page reload needed
- ✅ **Single source of truth** - All content in config files
- ✅ **Easy translations** - Just create new config files
- ✅ **No HTML editing** - Update content without touching HTML
- ✅ **Consistency** - Impossible to have mismatched content

### Cons of Dynamic Loading:
- ❌ Slightly slower initial page load (content loaded via JS)
- ❌ SEO: Search engines see empty HTML until JS runs
- ❌ More complex architecture
- ❌ Requires JavaScript to be enabled

## 💡 Recommended Approach

### For Now (Keep it Simple):
- ✅ Use current setup: Content in config file for reference
- ✅ Manually update HTML when content changes
- ✅ Keep hardcoded text in HTML for best SEO
- ✅ This is production-ready and works perfectly!

### For Future (When You Need It):
Implement dynamic loading when you need:
- Multiple languages with instant switching
- Frequent content updates by non-technical team
- Content management by marketing team

## 📝 How to Add a New Language (Simple Method)

1. **Copy the config file:**
   ```bash
   cp js/content.config.js js/content.hi.js
   ```

2. **Translate all strings:**
   ```javascript
   // content.hi.js
   const CONTENT_CONFIG = {
     site: {
       name: "नेक्खा",
       tagline: "डिजिटल सोना, फिर से कल्पना",
     },
     hero: {
       title: {
         highlight: "अपने नेक्सा जमा पर 12% तक ब्याज अर्जित करें",
         main: "",
       },
       // ... translate all strings (keep numbers same)
     }
   }
   ```

3. **Switch the script tag in index.html:**
   ```html
   <!-- For English -->
   <script src="js/content.config.js"></script>
   
   <!-- For Hindi -->
   <script src="js/content.hi.js"></script>
   ```

4. **Test the site** - All content should now be in your language

## ✅ What's Already Done

**Content Structure Ready:**
- ✅ All features (6 cards)
- ✅ Evolution timeline (4 eras)  
- ✅ Why Nekkha (6 benefits)
- ✅ How It Works (3 steps + 4 requirements)
- ✅ FAQ (5 Q&As)
- ✅ About (mission, values, 3 stats)
- ✅ Footer (5 ecosystem links, 4 legal links)
- ✅ Contact info (WhatsApp, Phone, Email, Social)
- ✅ Webapp URLs (Login, Signup, Dashboard)

**Next Steps:**
1. Add actual logo, images, contact information
2. Test the site thoroughly
3. When ready for translations: Copy config and translate
4. Launch!

---

# Commands Reference

## 📦 Installation

```bash
npm install
```

## 🚀 Development

```bash
# Start dev server (SCSS watch + local server)
npm run dev

# Watch SCSS only
npm run sass

# Serve only (no SCSS compilation)
npm run serve
```

## 🏗️ Build

```bash
# Build for production (minified CSS)
npm run build
```

## 🔍 SEO

```bash
# Regenerate sitemap
npm run sitemap

# Regenerate robots.txt
npm run robots

# Regenerate both
npm run seo
```

## 📝 Manual SCSS Compilation

```bash
# Development build
sass scss/styles.scss css/styles.css

# Production build (minified)
sass scss/styles.scss css/styles.css --style=compressed --no-source-map

# Watch mode
sass scss/styles.scss css/styles.css --watch
```

---

# Action Items & Link Updates

## 🔗 Links to Update

### WebApp Integration (CRITICAL)

**In `js/content.config.js`:**
```javascript
webapp: {
  login: "https://app.nekkha.com/login",    // ← Update
  signup: "https://app.nekkha.com/signup",  // ← Update
}
```

**Also update in `index.html`:**
- Line ~101: Login button
- Line ~102: Get Started button

### Social Media Links (IMPORTANT)

**In `js/content.config.js`:**
```javascript
social: {
  twitter: "https://twitter.com/Nekkhacom",      // ← Update
  linkedin: "https://linkedin.com/company/Nekkha", // ← Update
  telegram: "https://t.me/Nekkhaofficial",        // ← Update
  discord: "https://discord.gg/Nekkha",           // ← Update
}
```

### Legal Pages (MEDIUM PRIORITY)

Create these pages:
- `/terms.html` - Terms of Service
- `/privacy.html` - Privacy Policy
- `/risk-disclosure.html` - Risk Disclosure
- `/compliance.html` - Compliance

---

# Image Requirements

## Required Images

### Timeline/Evolution Section
- `barter-system.jpg` - Historical image of barter trading (800x600px)
- `gold-coins.jpg` - Gold coins and precious metals (800x600px)
- `traditional-bank.jpg` - Traditional banking/FD imagery (800x600px)
- `crypto-defi.jpg` - Modern cryptocurrency and DeFi (800x600px)

### Social Media / Open Graph
- `og-image.jpg` - 1200x630px for Facebook/LinkedIn sharing
- `twitter-image.jpg` - 1200x675px for Twitter cards

### General
- `logo.png` or `logo.svg` - Nekkha.com logo (140x50px recommended)

## Image Guidelines

- **Format:** WebP preferred, with JPG/PNG fallbacks
- **Optimization:** Use tools like ImageOptim, TinyPNG
- **Max file size:** 200KB per image
- **Alt text:** Always provide descriptive alt text in HTML

## Optimization Commands

```bash
# Convert to WebP
cwebp -q 80 image.jpg -o image.webp

# Optimize PNG
pngquant --quality=65-80 image.png

# Optimize JPG
jpegoptim --max=80 image.jpg
```

---

# PWA Icons

## Required Icons

All icons should be square PNG files with transparent backgrounds:

- `icon-72x72.png`
- `icon-96x96.png`
- `icon-128x128.png`
- `icon-144x144.png`
- `icon-152x152.png`
- `icon-192x192.png`
- `icon-384x384.png`
- `icon-512x512.png`

## Also Needed

- `favicon.ico` - Place in root directory (16x16, 32x32 multi-size)
- `apple-touch-icon.png` - 180x180px, place in root directory

## Generate Icons

### Online Tools
- https://realfavicongenerator.net/
- https://www.favicon-generator.org/

### Command Line (ImageMagick)
```bash
# Install ImageMagick first
brew install imagemagick  # macOS

# Generate all sizes from source
convert source-icon.png -resize 72x72 icon-72x72.png
convert source-icon.png -resize 96x96 icon-96x96.png
convert source-icon.png -resize 128x128 icon-128x128.png
convert source-icon.png -resize 144x144 icon-144x144.png
convert source-icon.png -resize 152x152 icon-152x152.png
convert source-icon.png -resize 192x192 icon-192x192.png
convert source-icon.png -resize 384x384 icon-384x384.png
convert source-icon.png -resize 512x512 icon-512x512.png

# Generate favicon.ico (multiple sizes in one file)
convert source-icon.png -define icon:auto-resize=16,32,48,64,256 ../favicon.ico
```

---

# Design Specifications

## ⚠️ Design Rules - DO NOT VIOLATE

### NEVER Add These Elements:
- ❌ **Left borders on cards** (looks childish and unprofessional)
- ❌ **Text emoji icons** (💡, 💰, 📊, etc.) in production HTML
- ❌ Use clean, professional SVG icons instead

---

## Approved Color Palette (USE ONLY THESE)

```scss
// Primary Colors (MAIN PALETTE)
$color-deep-black: #05070a;           // Background
$color-royal-blue: #1a4c8e;           // Primary buttons
$color-royal-blue-light: #3374cb;     // Hover states
$color-gold: #ebc73f;                 // Success, Highlights
$color-gold-light: #efc426;           // Accents
$color-white: #ffffff;                // Text

// Special Use (ONLY WHERE SPECIFIED)
$color-whatsapp-green: #25D366;       // WhatsApp button ONLY
```

**Color Usage Rules:**
- ✅ WhatsApp button: #25D366 (official WhatsApp green)
- ✅ Phone button: #1a4c8e (royal blue)
- ✅ Email button: #ebc73f (gold)
- ❌ Do NOT use colors outside this palette

## Typography

```scss
// Fonts
$font-primary: 'Inter', sans-serif;          // Body text
$font-heading: 'Space Grotesk', sans-serif;  // Headings

// Sizes
Desktop: 16px base, headings 2.5rem-4rem
Mobile: 14px base, headings 1.5rem-2.5rem
```

## Spacing

```scss
$spacing-xs: 0.5rem;    // 8px
$spacing-sm: 1rem;      // 16px
$spacing-md: 1.5rem;    // 24px
$spacing-lg: 2rem;      // 32px
$spacing-xl: 3rem;      // 48px
$spacing-2xl: 4rem;     // 64px
$spacing-3xl: 6rem;     // 96px
```

## Breakpoints

```scss
$breakpoint-sm: 576px;   // Small phones
$breakpoint-md: 768px;   // Tablets portrait
$breakpoint-lg: 1024px;  // Tablets landscape / Small desktop
$breakpoint-xl: 1280px;  // Desktop
$breakpoint-2xl: 1440px; // Large desktop
```

---

# File Structure

```
/Nekkha.com/
├── index.html                      # Main page
├── COMPLETE_DOCUMENTATION.md       # ← ALL documentation
├── IMPLEMENTATION_GUIDE.md         # ← How to use i18n system
├── README.md                       # Basic project info
│
├── css/
│   └── styles.css                  # Compiled CSS (minified)
│
├── scss/
│   ├── styles.scss                 # Main stylesheet
│   ├── _variables.scss             # Colors, spacing, breakpoints
│   └── _mixins.scss                # Responsive utilities
│
├── js/
│   ├── main.js                     # App logic (starfield, nav, FAQ)
│   ├── content.config.js           # ✅ ALL CONTENT (English)
│   └── content.hi.js               # Hindi translation example
│
├── assets/
│   ├── images/                     # Timeline, logo, social cards
│   ├── og-image.jpg                # Social sharing
│   └── twitter-image.jpg           # Twitter cards
│
├── scripts/
│   ├── generate-sitemap.sh         # Auto sitemap
│   └── generate-robots.sh          # Auto robots.txt
│
├── package.json
├── sitemap.xml
├── robots.txt
└── manifest.json
```

---

# Recent Updates

## December 8, 2025 - Major Feature Release 🚀

### 1. Runtime Language Switching Implemented! ✅
- **Complete multi-language system live**
- Instant switching between English and Hindi
- No page reload required
- Language preference saved in localStorage
- Globe icon (🌐) in navbar for easy access
- All 700+ lines of content dynamically rendered
- Mobile and desktop responsive

### 2. Full Content Centralization ✅
- **Every section now loads from config files**
- 10+ render functions in `main.js`:
  - `loadNavigation()` - Navbar links and CTAs
  - `loadHero()` - Hero section with etymology
  - `loadFeaturesSection()` - Features + rate clarity
  - `loadEvolutionSection()` - Timeline (7 eras)
  - `loadWhyNekkhaSection()` - Benefits slider (6 cards)
  - `loadHowItWorksSection()` - Steps + requirements
  - `loadFAQSection()` - FAQ items
  - `loadContactSection()` - Contact info
  - `loadAboutSection()` - Mission, values, stats
  - `loadFooter()` - All footer content
- Update content in one place, reflects everywhere

### 3. Build System Enhanced ✅
- Added `esbuild` for JavaScript bundling
- New build scripts:
  - `npm run build:js` - Build both language bundles
  - `npm run build:js:en` - English bundle
  - `npm run build:js:hi` - Hindi bundle
- Output: `dist/main.en.js`, `dist/main.hi.js`

### 4. Language Files Complete ✅
- `js/content.config.js` - English (500+ lines)
- `js/content.hi.js` - Hindi (700+ lines)
- Identical schema across both files
- Ready to add Bengali and Nepali

## December 7, 2025 - Previous Updates

### 1. Why Nekkha Section Now a Slider ✅
- **Converted static grid to responsive slider**
- Desktop: Shows 2 cards at a time
- Mobile/Tablet: Shows 1 card at a time
- Features:
  - Previous/Next navigation buttons
  - Dot indicators for slide position
  - Touch/swipe support on mobile
  - Smooth transitions
  - Infinite loop

### 2. Evolution Timeline Expanded ✅
- **Extended from 4 to 7 historical eras**
- Added: Early Banking, Digital Banking, Cryptocurrency
- Timeline content loads from `content.config.js`
- No more hardcoded text in HTML
- Fixed timeline-year visibility (now shows above dots)

### 2. Timeline Year Visibility Fixed ✅
- Added `z-index: 2` to timeline years
- Era labels now visible above timeline dots
- Professional appearance maintained

### 3. Content Management System Complete ✅
- **ALL website content** moved to `js/content.config.js`:
  - Features section (6 cards)
  - Evolution timeline (4 eras)
  - Why Nekkha benefits (6 benefits)
  - How It Works (3 steps + requirements)
  - FAQ (5 Q&As)
  - About section (mission, values, stats)
  - Footer content
- Ready for instant language switching!
- See `IMPLEMENTATION_GUIDE.md` for how to add translations

### 2. Documentation Consolidated ✅
- Removed all 12 separate doc files from `docs/` folder
- Everything now in `COMPLETE_DOCUMENTATION.md`
- Added `IMPLEMENTATION_GUIDE.md` for i18n implementation

### 3. Button Styles Updated ✅
- Login button: Dark background with border
- Get Started button: Solid royal blue
- Both updated in `scss/_mixins.scss`

### 4. SASS Build Fixed ✅
- Fixed incorrect mixin calls
- Changed to correct `respond-to()` and `respond-below()`
- All SASS compiles without errors

### 5. Interest Rate Structure Clarified ✅
- 12% for direct signups
- 11% if you use a referral code
- 1% bonus for referrers (passive income)

### 6. Contact Layout Responsive ✅
- Desktop: 3 columns side-by-side
- Tablet portrait & Mobile: 1 column stacked
- Slimmer padding for cleaner look

---

# Quick Reference

## Most Important Files to Edit

1. **`js/content.config.js`** - All text content, rates, contact info
2. **`scss/styles.scss`** - All styling and layout
3. **`index.html`** - Page structure (avoid editing if possible)
4. **`assets/images/`** - Add your images here

## Key Line Numbers

### In `js/content.config.js`:
- Line 29: Base interest rate (12%)
- Lines 83-93: Contact information
- Lines 108-109: Webapp URLs

### In `index.html`:
- Line ~84: Logo
- Line ~101-102: Login/Signup buttons
- Lines ~577-599: Contact buttons

## Common Tasks

### Update Logo
```html
<!-- index.html line ~84 -->
<img src="/assets/images/logo.svg" alt="Nekkha" width="140" height="50">
```

### Update Contact Info
```javascript
// js/content.config.js lines 83-93
whatsapp: { number: "+918001234567" },
phone: { number: "+918001234567" },
email: { support: "hello@nekkha.com" },
```

### Update Rates
```javascript
// js/content.config.js line 29
baseInterestRate: 12,
referredUserRate: 11,
referralBonus: 1,
```

---

# Support & Help

## If You Need Help With:

- **Language switching** → See [Language Switching Feature](#language-switching-feature)
- **Adding translations** → See [Multi-Language Implementation](#multi-language-implementation)
- **Content updates** → See [Content Management & Updates](#content-management--updates)
- **Commands** → See [Commands Reference](#commands-reference)
- **Images** → See [Image Requirements](#image-requirements)
- **Design** → See [Design Specifications](#design-specifications)

## Testing Your Changes

```bash
# 1. Start development server
npm run dev

# 2. Open browser
http://localhost:3000

# 3. Check console for errors
Press F12 → Console tab

# 4. Test responsiveness
Press F12 → Device toolbar (Cmd/Ctrl + Shift + M)
```

---

# Pre-Launch Final Checklist

## Must Complete Before Going Live

- [ ] Logo file added and displayed
- [ ] All contact info updated (WhatsApp, Phone, Email)
- [ ] Webapp URLs updated (Login, Signup)
- [ ] 4 timeline images added
- [ ] Social sharing images added (OG, Twitter)
- [ ] Favicon and PWA icons added
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile device (iOS & Android)
- [ ] **Test language switching** (EN ⇄ HI)
- [ ] Run Lighthouse audit (90+ all scores)
- [ ] Verify all links work
- [ ] No console errors
- [ ] Domain purchased and configured
- [ ] SSL certificate active
- [ ] Analytics configured

---

**End of Complete Documentation**

*This is the **single source of truth** for all Nekkha.com documentation. Everything you need to know is in this file.*

## 🎉 What's New in V3.0

✅ **Runtime language switching** - Instant EN ⇄ HI toggle  
✅ **Full content centralization** - All text in config files  
✅ **10+ dynamic render functions** - Every section auto-renders  
✅ **Build system** - esbuild for JS bundling  
✅ **Ready for expansion** - Add Bengali/Nepali easily  

## 📊 Current Stats

- **Lines of Config:** 1,200+ (across EN & HI)
- **Dynamic Sections:** 10 (all major sections)
- **Supported Languages:** 2 (EN, HI)
- **Ready Languages:** 2 more (BN, NE)
- **Build Scripts:** 4 (SCSS + 3 JS bundles)

## 🚀 Quick Actions

```bash
# Test language switching
npm run dev
# Visit http://localhost:3000
# Click 🌐 → Select हिन्दी

# Add a new language
cp js/content.config.js js/content.bn.js
# Translate strings, add to dropdown

# Build for production
npm run build
```

---

**Version:** 3.0  
**Last Updated:** December 8, 2025  
**Status:** Production Ready with Multi-Language Support ✨


