const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function findPNGFiles(dirPath, pngFiles) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const isDirectory = fs.statSync(filePath).isDirectory();

    if (isDirectory) {
      findPNGFiles(filePath, pngFiles);
    } else if (file.endsWith('.png') && !file.includes('small')) { // 只添加不包含 "small" 的文件
      pngFiles.push(filePath);
    }
  });
}

const pngFiles = [];
const projectPath = 'D:/Test/Butterfly/'; // 替換成你的專案路徑

findPNGFiles(projectPath, pngFiles);

pngFiles.forEach(filePath => {
  const fileName = path.basename(filePath, path.extname(filePath));
  const outputPath = path.join(path.dirname(filePath), `${fileName}-small.png`);

  try {
    execSync(`ffmpeg -i "${filePath}" -vf scale=20:-1 "${outputPath}"`);
    console.log(`Generated "${outputPath}"`);
  } catch (error) {
    console.error(`Error generating "${outputPath}":`, error);
  }
});

console.log('Process completed.');
