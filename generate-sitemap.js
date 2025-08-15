// generate-sitemap.js

const fs = require('fs');
const { videoList } = require('./search-data.js');

const domain = 'https://mydeshiflix.pro';
const lastMod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Home page
sitemap += `  <url>
    <loc>${domain}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>daily</changefreq>
  </url>\n`;

// Category pages (unique category)
const categories = [...new Set(videoList.flatMap(v => v.category))];
categories.forEach(category => {
  sitemap += `  <url>
    <loc>${domain}/category.html?cat=${encodeURIComponent(category)}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
  </url>\n`;
});

// Video pages (ID based URL)
videoList.forEach(video => {
  let videoUrl = `${domain}/video.html?id=${video.id}`;
  sitemap += `  <url>
    <loc>${videoUrl}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
  </url>\n`;
});

sitemap += `</urlset>\n`;

fs.writeFileSync('sitemap.xml', sitemap);

console.log('sitemap.xml generated!');