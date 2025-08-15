const fs = require('fs');
const { videoList } = require('./search-data.js');

const domain = "https://mydeshiflix.pro";
const lastMod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// Sitemap start
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Categories
const categories = [
  "milf","new","office","petite","russian",
  "shemale","squirting","stepmom","stepdad",
  "stepsis","stepbrother","teen","workout","xxx"
];

categories.forEach(cat => {
  sitemap += `  <url>
    <loc>${domain}/category.html?cat=${cat}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
  </url>\n`;
});

// Videos
videoList.forEach(video => {
  let videoUrl = video.embed.startsWith('http') 
    ? video.embed 
    : `${domain}${video.embed}`;
  sitemap += `  <url>
    <loc>${videoUrl}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
  </url>\n`;
});

// Close
sitemap += `</urlset>`;

// Save file
fs.writeFileSync('sitemap.xml', sitemap);
console.log("✅ sitemap.xml generated successfully!");