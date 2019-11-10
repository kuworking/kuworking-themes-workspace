/*
 version 2019.11.10

 clone each theme in this monorepo to a separated repo to push it to GitHub

  ********
  USE
  ********

  node monorepo-to-repos.js

 */

const fs = require('fs-extra')
const path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const spawn = util.promisify(require('child_process').spawn)

const isWin = process.platform === 'win32'
const dir = './themes'
const temp_dir = '../kuworking-split-monorepos'

const bash = async command => {
  console.log(`>>>  executing: ${command}` + '\n')
  const cm = await exec(command)
  if (cm.stdout) console.log(`>>>  ${stdout}` + '\n')
}

const createFolder = async (dir, cloneUrl) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, '0766', err => console.log(err ? err : `folder ${dir} created` + '\n') && process.exit())
    if (cloneUrl) {
      await bash(`git clone ${cloneUrl}`)
      console.log(`repo ${cloneUrl} git-cloned` + '\n')
    }
  }
}

const starting = async () => {
  console.log(`starting...
- check if ../split-monorepo exists (create it if not)
- entering in ./themes folder
- copy each folder to ../split-monorepo
- run add origin remote
- push force to that remote
- (npm package is already updated from lerna in the monorepo)
- delete the created folder
  `)

  fs.readdir(dir, async (err, themes) => {
    // cannot use forEach if I want async/await to work as I want
    // https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
    for (const theme of themes) {
      const remote_json = require(`./${dir}/${theme}/package.json`)
      console.log(`Entering in ${remote_json.name}` + '\n')
      if (remote_json.private) continue

      await createFolder(temp_dir)
      await process.chdir(`./${temp_dir}`)
      await createFolder(`${theme}`, remote_json.repository.url)
      await process.chdir(`./${theme}`)

      console.log(`src: ${__dirname}/${dir}/${remote_json.name}`)
      console.log(`dest: ${__dirname}/${temp_dir}/${remote_json.name}`)
//      await fs.copy(`${__dirname}/${dir}/${remote_json.name}`, `${__dirname}/${temp_dir}/${remote_json.name}`, err =>
//        console.log(err ? err : `folder ${dir} updated` + '\n')
//      )

      console.log('git add and push')

      await process.chdir(__dirname)

      //      git clone remote_json.repository.url
    }
  })

  //process.exit()
}

starting()
