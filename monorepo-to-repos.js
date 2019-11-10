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

const doit = async command => {
  console.log(`
  executing: ${command}`)
  const cm = await exec(command)
  if (cm.stdout)
    console.log(`
  ${stdout}`)
}

const createFolder = dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, '0766', err => {
      if (err) {
        console.log(err)
        response.send("ERROR! Can't make the directory! \n")
        process.exit()
      } else console.log(`folder ${dir} created`)
    })
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
      console.log(remote_json.name)
      if (remote_json.private) continue

      await createFolder(temp_dir)
      await process.chdir(`./${temp_dir}`)
      await createFolder(`${theme}`)
      await process.chdir(`./${theme}`)
      await bash('git clone remote_json.repository.url', `cloning ${theme}`)

      awair fs.emptyDir('/tmp/some/dir', err => {
        if (err) return console.error(err)

      const files = await fs.readdirSync('./')
      for (const file of files) {
        await fs.unlinkSync(file)
      }

      await fs.copy('/tmp/mydir', '/tmp/mynewdir', function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log("success!");
        }
      }); //copies directory, even if it has subdirectories or files

      console.log(files)


      await process.chdir(__dirname)

      //      git clone remote_json.repository.url
    }
  })

  //process.exit()
}

starting()
