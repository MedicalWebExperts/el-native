const fs = require('fs')

const moduleName = process.argv[2]

if (!moduleName) {
  console.warn('No module name provided.')
}

const dirs = [`src/${moduleName}`, `storybook/stories/${moduleName}`]

const files = [
  {
    path: `src/${moduleName}/${moduleName}.js`,
    contentFile: `templates/component`,
  },
  {
    path: `src/${moduleName}/${moduleName}.test.js`,
    contentFile: `templates/test`,
  },
  {
    path: `storybook/stories/${moduleName}/index.js`,
    contentFile: `templates/story`,
  },
]

dirs.forEach(dir => {
  try {
    fs.mkdirSync(dir)
  } catch (e) {
    console.log(`The module ${moduleName} already exists.`)
  }
})

files.forEach(file => {
  try {
    let tmpFile = fs.readFileSync(file.contentFile, { encoding: 'utf8' })
    tmpFile = tmpFile.replace(/<module>/g, moduleName)
    fs.writeFileSync(file.path, tmpFile)
  } catch (e) {
    console.log(`The module ${moduleName} already exists.`)
  }
})
