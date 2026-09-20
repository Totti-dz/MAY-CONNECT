const fs = require('fs');
const path = require('path');

const assetsPath = path.join(__dirname, 'assets_b64.json');
const templatePath = path.join(__dirname, 'template.html');
const outputPath = path.join(__dirname, 'index.html');

const assets = JSON.parse(fs.readFileSync(assetsPath, 'utf8'));
let template = fs.readFileSync(templatePath, 'utf8');

template = template.split('__LOGO_BASE64__').join(assets.logo);
template = template.split('__BANNER_BASE64__').join(assets.banner);

fs.writeFileSync(outputPath, template, 'utf8');
console.log('Build completed successfully! Wrote ' + outputPath + ' with ' + fs.statSync(outputPath).size + ' bytes');
