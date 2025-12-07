# Image Placeholders

This directory contains images for the Nekka.com landing page.

## Required Images

### Timeline/Evolution Section
- `barter-system.jpg` - Historical image of barter trading
- `gold-coins.jpg` - Gold coins and precious metals
- `traditional-bank.jpg` - Traditional banking/FD imagery
- `crypto-defi.jpg` - Modern cryptocurrency and DeFi

### Open Graph / Social Media
- `og-image.jpg` - 1200x630px for Facebook/LinkedIn sharing
- `twitter-image.jpg` - 1200x600px for Twitter cards

### General
- `logo.png` or `logo.svg` - Nekka.com logo

## Image Guidelines

- **Format:** WebP preferred, with JPG/PNG fallbacks
- **Optimization:** Use tools like ImageOptim, TinyPNG
- **Max file size:** 200KB per image
- **Dimensions:** Responsive images with multiple sizes
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
