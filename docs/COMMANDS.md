# Commands Reference

Quick reference for all available commands in the Nekka.com project.

## 📦 Installation

```bash
npm install
```

## 🚀 Development

### Start Development Server
```bash
npm run dev
```
Starts both SCSS compiler (watch mode) and local server at http://localhost:3000

### Watch SCSS Only
```bash
npm run sass
```
Watches for SCSS changes and auto-compiles to CSS

### Serve Only
```bash
npm run serve
```
Starts local server without SCSS compilation

## 🏗️ Build

### Build for Production
```bash
npm run build
```
Compiles SCSS to compressed CSS (minified, no source maps)

## 🔍 SEO

### Regenerate Sitemap
```bash
npm run sitemap
```
Generates `sitemap.xml` with current date
- Uses script: `scripts/generate-sitemap.sh`
- Edit script to add/remove URLs

### Regenerate Robots.txt
```bash
npm run robots
```
Generates `robots.txt` with crawling rules
- Uses script: `scripts/generate-robots.sh`
- Edit script to modify rules

### Regenerate Both
```bash
npm run seo
```
Runs both sitemap and robots.txt generation

## 📝 Manual SCSS Compilation

### Development Build
```bash
sass scss/styles.scss css/styles.css
```

### Production Build (Minified)
```bash
sass scss/styles.scss css/styles.css --style=compressed --no-source-map
```

### Watch Mode
```bash
sass scss/styles.scss css/styles.css --watch
```

## 🔧 Shell Scripts

All scripts are in the `/scripts` directory and are executable.

### Generate Sitemap
```bash
./scripts/generate-sitemap.sh
```

### Generate Robots.txt
```bash
./scripts/generate-robots.sh
```

## 📂 File Organization

### Move Documentation
All markdown files have been moved to `/docs`:
```bash
# Already done, but for reference:
mv *.md docs/
```

### View Site Structure
```bash
tree -L 2 -I 'node_modules'
```

## 🌐 Opening the Site

### Default Browser
```bash
open index.html
```

### Chrome (macOS)
```bash
open -a "Google Chrome" index.html
```

### Firefox (macOS)
```bash
open -a Firefox index.html
```

## 🧹 Cleanup

### Remove node_modules
```bash
rm -rf node_modules package-lock.json
npm install
```

### Clear CSS (force rebuild)
```bash
rm css/styles.css
npm run build
```

## 📊 Testing

### Check for Errors
```bash
# Check HTML syntax (if you have html-validator)
npx html-validator index.html

# Check CSS (if you have stylelint)
npm run lint:css
```

### Performance Testing
Open in Chrome DevTools:
1. Press F12
2. Click "Lighthouse" tab
3. Generate report

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run seo
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 🔄 Git Commands

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit: Nekka.com landing page"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Regular Updates
```bash
git add .
git commit -m "Update: description of changes"
git push
```

## 📱 Mobile Testing

### iOS Simulator (macOS with Xcode)
```bash
open -a Simulator
# Then drag index.html to simulator Safari
```

### Android Emulator
```bash
# Start emulator then:
adb shell am start -a android.intent.action.VIEW -d "file:///path/to/index.html"
```

## 🔍 Debugging

### Check Port Usage
```bash
lsof -i :3000
```

### Kill Process on Port
```bash
kill -9 $(lsof -t -i:3000)
```

### View Live Server Logs
```bash
npm run serve -- --verbose
```

## 💡 Useful Aliases

Add to your `~/.zshrc`:

```bash
# Nekka.com shortcuts
alias nekka-dev='cd /Users/apple/Documents/Nekka/Nekka.com && npm run dev'
alias nekka-build='cd /Users/apple/Documents/Nekka/Nekka.com && npm run build'
alias nekka-seo='cd /Users/apple/Documents/Nekka/Nekka.com && npm run seo'
```

Then reload:
```bash
source ~/.zshrc
```

Now you can use:
```bash
nekka-dev    # Start development
nekka-build  # Build for production
nekka-seo    # Regenerate SEO files
```

---

## 📚 More Information

- [Quick Start](QUICKSTART.md)
- [Action Items](ACTION_ITEMS.md)
- [About & Todo](AboutAndTodo.md)
- [Images Guide](IMAGES.md)
- [Icons Guide](ICONS.md)

---

**Last Updated:** December 7, 2025
