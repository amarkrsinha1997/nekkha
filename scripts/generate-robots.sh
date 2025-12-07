#!/bin/bash

# Robots.txt Generator for Nekkha.com
# Run this script to regenerate robots.txt

OUTPUT_FILE="robots.txt"
DOMAIN="https://Nekkha.com"

cat > $OUTPUT_FILE << 'EOF'
# Robots.txt for Nekkha.com
# https://Nekkha.com/robots.txt

User-agent: *
Allow: /

# Sitemaps
Sitemap: https://Nekkha.com/sitemap.xml

# Crawl-delay (optional, adjust as needed)
Crawl-delay: 10

# Disallow certain paths (add as needed)
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /scripts/
Disallow: /docs/
Disallow: /node_modules/
Disallow: /scss/

# Allow access to CSS and JS files
User-agent: *
Allow: /css/
Allow: /js/
Allow: /assets/
Allow: /images/
EOF

echo "✅ Robots.txt generated: $OUTPUT_FILE"
echo ""
echo "To modify crawling rules, edit this script."
