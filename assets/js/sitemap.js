const fs = require('fs');
const path = require('path');

function getAllHTMLFiles(dirPath, filesArr) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const isDirectory = fs.statSync(filePath).isDirectory();

    if (isDirectory) {
      getAllHTMLFiles(filePath, filesArr);
    } else if (file.endsWith('.html')) {
      filesArr.push(filePath);
      console.log(filePath);
    }
  });
}

const htmlFiles = [];
const projectPath = '../../'; // 替換成你的專案路徑
const site_url = 'https://lcwei-0708.github.io/'

getAllHTMLFiles(projectPath, htmlFiles);

// 建立sitemap.xml内容
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${htmlFiles.map(filePath => `
  <url>
    <loc>${site_url}${path.relative(projectPath, filePath).replace(/\\/g, '/')}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1</priority>
  </url>
`).join('')}
</urlset>
`;

fs.writeFileSync(path.join(projectPath, 'sitemap.xml'), sitemapContent);

console.log('sitemap.xml has been generated successfully!');
