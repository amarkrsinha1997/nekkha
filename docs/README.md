# Nekka.com

Modern landing page for Nekka.com - A decentralized finance platform offering fixed deposit services for Nexa cryptocurrency.

## Features

- 🎨 Modern, responsive design with night theme
- ⭐ Animated starfield background
- 📱 Mobile-first responsive layout
- ♿ WCAG 2.1 AA accessibility compliant
- 🚀 SEO optimized with structured data
- 🎭 Smooth animations and transitions
- 💎 Premium UI with glassmorphism effects

## Tech Stack

- **HTML5** - Semantic markup
- **SCSS/Sass** - Advanced styling with variables and mixins
- **Vanilla JavaScript** - No heavy frameworks, optimized performance
- **CSS Animations** - Smooth, hardware-accelerated transitions

## Project Structure

```
Nekka.com/
├── index.html              # Main HTML file
├── scss/
│   ├── _variables.scss     # Color palette, spacing, breakpoints
│   ├── _mixins.scss        # Reusable SCSS mixins
│   └── styles.scss         # Main stylesheet
├── css/
│   └── styles.css          # Compiled CSS (generated from SCSS)
├── js/
│   └── main.js            # JavaScript for interactivity
├── assets/
│   ├── images/            # Images for timeline, features, etc.
│   └── icons/             # PWA icons
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine crawling rules
├── manifest.json          # PWA manifest
├── AboutAndTodo.md        # Project documentation
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js and npm (for SCSS compilation)
- A modern web browser
- Text editor (VS Code recommended)

### Installation

1. **Clone or download the project**

2. **Install Sass compiler** (if not already installed):
```bash
npm install -g sass
```

3. **Compile SCSS to CSS**:
```bash
sass scss/styles.scss css/styles.css --watch
```

Or for production (minified):
```bash
sass scss/styles.scss css/styles.css --style=compressed
```

4. **Open in browser**:
Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js with npx
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Development

### Compiling SCSS

For development with auto-compilation:
```bash
sass scss/styles.scss css/styles.css --watch
```

For production build:
```bash
sass scss/styles.scss css/styles.css --style=compressed --no-source-map
```

### Color Palette

The project uses a carefully selected color palette:

**Primary Colors:**
- Deep Black: `#05070a`
- Royal Blue: `#1a4c8e`
- Bright Blue: `#3374cb`
- White: `#ffffff`

**Gold Tones:**
- Bright Gold: `#ebc73f`
- Vibrant Yellow: `#efc426`
- Burnt Gold: `#b87c27`

See `scss/_variables.scss` for the complete palette.

### Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1024px
- Desktop: 1025px - 1440px
- Large Screens: 1441px+

## SEO Optimization

The site is fully optimized for search engines:

- ✅ Semantic HTML5 structure
- ✅ Meta tags for social sharing (Open Graph, Twitter Cards)
- ✅ Schema.org structured data
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Fast loading times
- ✅ Mobile-friendly
- ✅ Accessibility compliant

### Target Keywords

- Nexa FD
- Crypto Fixed Deposit
- DeFi Savings
- Earn Nexa
- Cryptocurrency Interest
- Nexa Investment

## Performance

The site is built for maximum performance:

- Minimal dependencies
- Optimized animations
- Lazy loading images
- Efficient JavaScript
- Compressed assets

**Target Lighthouse Scores:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Accessibility

WCAG 2.1 AA compliant features:

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatible
- Sufficient color contrast
- Focus indicators
- Alt text for images

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Build for Production

1. Compile SCSS:
```bash
sass scss/styles.scss css/styles.css --style=compressed --no-source-map
```

2. Minify JavaScript (optional):
```bash
# Using terser
npx terser js/main.js -o js/main.min.js -c -m
```

3. Optimize images
4. Test in all browsers
5. Run Lighthouse audit
6. Deploy to hosting

### Recommended Hosting

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## TODO

See `AboutAndTodo.md` for detailed task list.

### High Priority
- [ ] Add actual Nekka.com logo
- [ ] Provide WebApp login/signup URLs
- [ ] Add historical images for evolution section
- [ ] Set up contact form backend
- [ ] Configure analytics

## Contributing

This is a proprietary project for Nekka.com. For internal development only.

## License

Copyright © 2025 Nekka.com. All rights reserved.

## Contact

For questions or support:
- Email: support@nekka.com
- Website: https://nekka.com

---

Built with ❤️ for the Nexa community
