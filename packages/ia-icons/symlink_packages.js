const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

const icon_packages = fs.readdirSync(path.join(__dirname, '..'), { withFileTypes: true })
  .filter((file) => file.isDirectory())
  .filter((file) => !/^ia-icons$/.test(file.name));
const icons_count = icon_packages.length;

const lerna_add = ({ name }) => {
  const child_process = spawn('lerna', [`add @internetarchive/${name} --scope=@internetarchive/ia-icons`]);
  child_process.on('close', () => {
    if (icon_packages.length) {
      return lerna_add(icon_packages.pop());
    }
    console.log(`${icons_count} Lerna packages linked`);
  });
};

lerna_add(icon_packages.pop());
