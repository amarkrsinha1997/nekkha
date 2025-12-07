# PWA Icons

This directory should contain Progressive Web App icons in various sizes.

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

- `favicon.ico` - Place in root directory
- `apple-touch-icon.png` - 180x180px, place in root directory

## Generate Icons

You can use online tools or command-line tools to generate all sizes from a single source image:

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

## Design Guidelines

- Use the Nekka brand colors
- Keep it simple and recognizable
- Ensure it looks good at small sizes
- Test on both light and dark backgrounds
