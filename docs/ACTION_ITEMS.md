# Action Items & Link Updates

This file contains all the placeholders and action items that need to be updated before launch.

## 🔗 Links to Update

### WebApp Integration (CRITICAL)
These placeholder anchors need real URLs:

**In `index.html`:**
1. Line ~52: `href="#webapp-login"` → Update to actual login URL
2. Line ~53: `href="#webapp-signup"` → Update to actual signup URL
3. Line ~74: `href="#webapp-signup"` → Update to actual signup URL (Hero CTA)

**Recommended Format:**
```html
<a href="https://app.nekka.com/login" class="btn btn-outline">Login</a>
<a href="https://app.nekka.com/signup" class="btn btn-primary">Get Started</a>
```

### Social Media Links (IMPORTANT)
Update these placeholder links in `index.html`:

**Contact Section (Lines ~422-431):**
```html
<!-- Find and update these: -->
<a href="#" aria-label="Twitter" target="_blank" rel="noopener">
<a href="#" aria-label="LinkedIn" target="_blank" rel="noopener">
<a href="#" aria-label="Telegram" target="_blank" rel="noopener">
<a href="#" aria-label="Discord" target="_blank" rel="noopener">
```

**Footer Section (Lines ~532-534):**
```html
<!-- Same social links repeated -->
```

**Recommended URLs:**
- Twitter: `https://twitter.com/nekkacom`
- LinkedIn: `https://linkedin.com/company/nekka`
- Telegram: `https://t.me/nekkaofficial`
- Discord: `https://discord.gg/nekka`

### Legal Pages (MEDIUM PRIORITY)
Footer links that need actual pages:

```html
Line ~501: <a href="#terms">Terms of Service</a>
Line ~502: <a href="#privacy">Privacy Policy</a>
Line ~503: <a href="#risk">Risk Disclosure</a>
Line ~504: <a href="#compliance">Compliance</a>
```

**Create these pages or update links to:**
- `/terms.html`
- `/privacy.html`
- `/risk-disclosure.html`
- `/compliance.html`

## 🖼️ Images to Add

### Logo (CRITICAL)
**Current:** Placeholder with text "NEKKA"
**Location in HTML:** Lines ~42-48
**Files Needed:**
- `/assets/images/logo.png` (or `.svg` preferred)
- Recommended size: 140x50px or SVG scalable
- Should work on dark background

**How to Update:**
```html
<!-- Replace this: -->
<div class="logo-placeholder">
    <span class="logo-text">NEKKA</span>
</div>

<!-- With this: -->
<img src="/assets/images/logo.svg" alt="Nekka.com" width="140" height="50">
```

### Evolution Timeline Images (HIGH PRIORITY)
**Locations in HTML:** Lines ~182-233

1. **Barter System Image**
   - File: `/assets/images/barter-system.jpg`
   - Alt text: "Ancient barter trading system"
   - Aspect ratio: 16:10
   - Recommended: Historical painting or illustration

2. **Gold Coins Image**
   - File: `/assets/images/gold-coins.jpg`
   - Alt text: "Historical gold coins and precious metals"
   - Aspect ratio: 16:10
   - Recommended: Gold coins, historical currency

3. **Traditional Banking Image**
   - File: `/assets/images/traditional-bank.jpg`
   - Alt text: "Traditional banking and fixed deposits"
   - Aspect ratio: 16:10
   - Recommended: Bank building or vault, vintage banking

4. **Crypto DeFi Image**
   - File: `/assets/images/crypto-defi.jpg`
   - Alt text: "Modern cryptocurrency and DeFi platforms"
   - Aspect ratio: 16:10
   - Recommended: Modern, futuristic crypto visualization

**Current State:** All show placeholder boxes with text
**Action:** Add images and they'll automatically display

### Social Sharing Images (IMPORTANT)
Update in `<head>` section:

**Line ~21:**
```html
<meta property="og:image" content="https://nekka.com/assets/og-image.jpg">
```
- File needed: `/assets/og-image.jpg`
- Size: 1200x630px
- Format: JPG or PNG
- Content: Nekka branding with tagline

**Line ~26:**
```html
<meta property="twitter:image" content="https://nekka.com/assets/twitter-image.jpg">
```
- File needed: `/assets/twitter-image.jpg`
- Size: 1200x600px
- Format: JPG or PNG

### PWA Icons (MEDIUM PRIORITY)
See `/assets/icons/README.md` for complete list.

**Also needed in root:**
- `/favicon.ico`
- `/apple-touch-icon.png` (180x180px)

Update `index.html` line ~31-32 when ready.

## 📝 Content to Review

### Email Addresses
**Line ~30:** `"email": "support@nekka.com"` (Schema.org)
**Line ~395:** `<p>support@nekka.com</p>` (Contact section)

Confirm this is the correct support email or update.

### Nexa Ecosystem Links
Footer links (Lines ~487-491) - verify these URLs are correct:
- https://nexa.cafe
- https://nexa.land
- https://nexa.house
- https://nexa.training
- https://nexa.institute

### About Us Content
**Lines ~444-471:** Review and customize the About section:
- Mission statement
- Values
- Add team information if needed
- Update stats if you have real numbers

## 🔧 Technical Updates

### Contact Form Backend
**File:** `js/main.js`
**Lines:** ~133-152

**Current:** Simulates form submission (console.log only)
**Action Needed:** 
```javascript
// Replace simulateSubmission function with actual API call:
async handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(this.form);
    
    const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: formData
    });
    
    // Handle response...
}
```

### Newsletter Form Backend
**File:** `js/main.js`
**Lines:** ~167-187

**Current:** Simulates subscription
**Action:** Integrate with email service (Mailchimp, SendGrid, etc.)

### Analytics
**File:** `js/main.js`
**Lines:** ~397-401

**Current:** Commented out
**Action:** 
1. Get Google Analytics 4 Measurement ID
2. Uncomment and add your ID
3. Or use alternative (Plausible, Fathom, etc.)

### Environment Variables
**File:** `.env.example`

1. Copy to `.env`
2. Fill in actual values:
```env
WEBAPP_API_URL=https://app.nekka.com/api
WEBAPP_LOGIN_URL=https://app.nekka.com/login
WEBAPP_SIGNUP_URL=https://app.nekka.com/signup
GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 📋 Pre-Launch Checklist

### Must Have
- [ ] Update logo
- [ ] Add webapp login URL
- [ ] Add webapp signup URL
- [ ] Add timeline images (4 images)
- [ ] Add OG/Twitter images
- [ ] Test contact form submission
- [ ] Update social media links
- [ ] Test on mobile device

### Should Have
- [ ] Add PWA icons
- [ ] Add favicon
- [ ] Create legal pages (terms, privacy)
- [ ] Set up analytics
- [ ] Configure contact form backend
- [ ] Newsletter integration
- [ ] Test all breakpoints

### Nice to Have
- [ ] Add real statistics in About section
- [ ] Team photos/information
- [ ] Blog integration
- [ ] Live chat widget
- [ ] Video testimonials

## 🚀 Launch Steps

1. **Complete Must Have items** above
2. **Run Lighthouse audit** - aim for 90+ on all metrics
3. **Test in all browsers** - Chrome, Firefox, Safari, Edge
4. **Mobile device testing** - iOS and Android
5. **Set up domain** and SSL certificate
6. **Deploy to hosting**
7. **Submit sitemap** to Google Search Console
8. **Set up analytics**
9. **Monitor** for first 48 hours

## 🎯 Quick Search & Replace

Use your editor's find/replace to update all instances:

```
Find: #webapp-login
Replace: https://app.nekka.com/login

Find: #webapp-signup
Replace: https://app.nekka.com/signup

Find: support@nekka.com
Replace: [actual support email]

Find: href="#"
Review: Update each social media link individually
```

---

## 📞 Need Help?

- **Documentation:** See `README.md`
- **Quick Start:** See `QUICKSTART.md`
- **Project Details:** See `AboutAndTodo.md`
- **Image Specs:** See `/assets/images/README.md`
- **Icon Specs:** See `/assets/icons/README.md`

---

**Last Updated:** December 7, 2025
**Status:** Ready for content integration and launch
