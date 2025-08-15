const fs = require('fs');
const { videoList } = require('./search-data.js');

const baseUrl = 'https://mydeshiflix.pro/video.html?id=';

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

videoList.forEach(video => {
  sitemap += `  <url>\n`;
  sitemap += `    <loc>${baseUrl}${video.id}</loc>\n`;
  sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
  sitemap += `    <changefreq>monthly</changefreq>\n`;
  sitemap += `  </url>\n`;
});

sitemap += `</urlset>`;

fs.writeFileSync('sitemap.xml', 'utf8');
console.log('✅ Sitemap generated successfully!');