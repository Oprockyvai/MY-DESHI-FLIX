const fs = require('fs');
const { videoList } = require('./search-data.js'); // আগের ভিডিও data import

const domain = "https://mydeshiflix.pro";
const lastMod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// Sitemap start
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Categories (optional)
const categories = ["milf","new","office","petite","russian","shemale","squirting","stepmom","stepdad","stepsis","stepbrother","teen","workout","xxx"];
categories.forEach(cat => {
  sitemap += `  <url>
    <loc>${domain}/category.html?cat=${cat}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
  </url>\n`;
});

// Add all videos from search-data.js
videoList.forEach(video => {
  sitemap += `  <url>
    <loc>${video.link}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
  </url>\n`;
});

// Close sitemap
sitemap += `</urlset>`;

// Write to file
fs.writeFileSync('sitemap.xml', sitemap);
console.log("sitemap.xml successfully generated with all videos!");