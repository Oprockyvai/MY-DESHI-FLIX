import fs from 'fs';
import { videoList } from './search-data.js';

// আপনার ওয়েবসাইটের base URL
const baseUrl = 'https://mydeshiflix.pro/video.html?id=';

// XML হেডার
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// সব ভিডিও URL যোগ করা
videoList.forEach(video => {
  sitemap += `  <url>\n`;
  sitemap += `    <loc>${baseUrl}${video.id}</loc>\n`;
  sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
  sitemap += `    <changefreq>monthly</changefreq>\n`;
  sitemap += `  </url>\n`;
});

sitemap += `</urlset>`;

// sitemap.xml ফাইলে লেখা
fs.writeFileSync('sitemap.xml', sitemap, 'utf8');
console.log('✅ Sitemap generated successfully!');