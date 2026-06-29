const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, 'www');
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const filesToCopy = ['index.html', 'config.json', 'juegos.json'];
filesToCopy.forEach(file => {
    const src = path.join(__dirname, file);
    const dest = path.join(destDir, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`Copied ${file} to www/`);
    } else {
        console.log(`Warning: ${file} not found`);
    }
});
