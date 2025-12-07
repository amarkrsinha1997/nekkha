#!/bin/bash

# Sitemap Generator for Nekka.com
# Run this script to regenerate sitemap.xml

DOMAIN="https://nekka.com"
OUTPUT_FILE="sitemap.xml"
CURRENT_DATE=$(date +%Y-%m-%d)

cat > $OUTPUT_FILE << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://nekka.com/</loc>
        <lastmod>CURRENT_DATE_PLACEHOLDER</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://nekka.com/#features</loc>
        <lastmod>CURRENT_DATE_PLACEHOLDER</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://nekka.com/#evolution</loc>
        <lastmod>CURRENT_DATE_PLACEHOLDER</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://nekka.com/#why-nekka</loc>
        <lastmod>CURRENT_DATE_PLACEHOLDER</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://nekka.com/#how-it-works</loc>
        <lastmod>CURRENT_DATE_PLACEHOLDER</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://nekka.com/#faq</loc>
        <lastmod>CURRENT_DATE_PLACEHOLDER</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://nekka.com/#contact</loc>
        <lastmod>CURRENT_DATE_PLACEHOLDER</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>
    <url>
        <loc>https://nekka.com/#about</loc>
        <lastmod>CURRENT_DATE_PLACEHOLDER</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
</urlset>
EOF

# Replace the placeholder with actual date
sed -i '' "s/CURRENT_DATE_PLACEHOLDER/$CURRENT_DATE/g" $OUTPUT_FILE

echo "✅ Sitemap generated: $OUTPUT_FILE"
echo "📅 Last modified date: $CURRENT_DATE"
echo ""
echo "To add more URLs, edit this script and add new <url> blocks."
