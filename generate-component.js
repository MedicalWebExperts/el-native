const fs = require('fs');

const moduleName = process.argv[2];

if (!moduleName) {
  console.warn('No module name provided.');
}

const dirs = [`src/${moduleName}`, `storybook/stories/${moduleName}`];

const files = [
  {
    path: `src/${moduleName}/${moduleName}.js`,
    contentFile: 'templates/component',
  },
  {
    path: `src/${moduleName}/${moduleName}.test.js`,
    contentFile: 'templates/test',
  },
  {
    path: `storybook/stories/${moduleName}/index.js`,
    contentFile: 'templates/story',
  },
];

console.log(`Creating ${moduleName} folders...`);

dirs.forEach((dir) => {
  try {
    fs.mkdirSync(dir);
    console.log(`Folder ${dir} created.`);
  } catch (e) {
    console.log(`The module ${moduleName} already exists.`);
  }
});

console.log();
console.log(`Creating ${moduleName} files...`);

files.forEach((file) => {
  try {
    let tmpFile = fs.readFileSync(file.contentFile, { encoding: 'utf8' });
    tmpFile = tmpFile.replace(/<module>/g, moduleName);
    fs.writeFileSync(file.path, tmpFile);
    console.log(`File ${file.path} created.`);
  } catch (e) {
    console.log(`The module ${moduleName} already exists.`);
  }
});

console.log();
console.log(`Finished creating ${moduleName} component!`);
