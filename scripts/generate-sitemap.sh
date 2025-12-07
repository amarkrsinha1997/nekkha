#!/bin/bash

# Sitemap Generator for Nekkha.com
# Run this script to regenerate sitemap.xml

DOMAIN="https://Nekkha.com"
OUTPUT_FILE="sitemap.xml"
CURRENT_DATE=$(date +%Y-%m-%d)

cat > $OUTPUT_FILE << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://Nekkha.com/</loc>
        <lastmod>CURRENT_DATE_PLACEHOLDER</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://Nekkha.com/#features</loc>
        <lastmod>CURRENT_DATE_PLACEHOLDER</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://Nekkha.com/#evolution</loc>
        <lastmod>CURRENT_DATE_PLACEHOLDER</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://Nekkha.com/#why-Nekkha</loc>
        <lastmod>CURRENT_DATE_PLACEHOLDER</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://Nekkha.com/#how-it-works</loc>
        <lastmod>CURRENT_DATE_PLACEHOLDER</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://Nekkha.com/#faq</loc>
        <lastmod>CURRENT_DATE_PLACEHOLDER</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://Nekkha.com/#contact</loc>
        <lastmod>CURRENT_DATE_PLACEHOLDER</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>
    <url>
        <loc>https://Nekkha.com/#about</loc>
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
