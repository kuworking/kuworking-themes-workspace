/*
 version 2019.11.13

 clone each theme in this monorepo to a separated repo to push it to GitHub

  ********
  USE
  ********

  node monorepo-to-repos.js

 */

const fs = require('fs-extra'),
  path = require('path'),
  util = require('util'),
  exec = util.promisify(require('child_process').exec),
  spawn = util.promisify(require('child_process').spawn),
  stdin = process.stdin,
  stdout = process.stdout,
  isWin = process.platform === 'win32',
  dir = './themes',
  temp_dir = '../kuworking-split-monorepos'

const msg = `starting...
- check if ../split-monorepo exists (create it if not)
- entering in ./themes folder
- copy each folder to ../split-monorepo
- run add origin remote
- push force to that remote
- (npm package is already updated from lerna in the monorepo)
- delete the created folder`

const bash = async command => {
  console.log(`>>>  executing: ${command}`)
  const cm = await exec(command)
  if (cm.stdout) console.log(`>>>  ${stdout}`)
}

const createFolder = async (dir, cloneUrl) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, '0766', err => console.log(err ? err : `folder ${dir} created`) && process.exit())
    if (cloneUrl) {
      await bash(`git clone ${cloneUrl}`)
      console.log(`repo ${cloneUrl} git-cloned`)
    }
  }
}

const starting = async message => {
  console.log(msg)

  fs.readdir(dir, async (err, themes) => {
    // cannot use forEach if I want async/await to work as I want
    // https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
    for (const theme of themes) {
      const remote_json = require(`./${dir}/${theme}/package.json`)
      console.log(`\nEntering in ${remote_json.name}`)
      if (remote_json.private) continue

      await createFolder(temp_dir)
      await process.chdir(`./${temp_dir}`)
      await createFolder(`${theme}`, remote_json.repository.url)
      await process.chdir(`./${theme}`)

      const src = `${__dirname}/${dir}/${remote_json.name}`
      const dest = `${__dirname}/${temp_dir}/${remote_json.name}`
      const checkFileName = name => pathnames => (pathnames.some(x => x === name) ? false : true)
      const filterFunc = (src, dest) => checkFileName(src.split(/[\\//]/).pop())(['node_modules', 'public', '.cache'])
      await fs.copy(src, dest, { filter: filterFunc })

      await bash(`git add *`)
      await bash(`git config core.ignorecase false`)
      await bash(`git commit --allow-empty -m "${message.trim()}"`)
      if (!isWin) await bash(`git config --global credential.helper 'cache --timeout=3600'`)
      await bash(`git push origin master`)
      await process.chdir(__dirname)
    }

    console.log(`\n\n_____finished`)
    process.exit()
  })
}

const start = async () => {
  console.log('LOG → Write commit message: ')

  const standard_input = process.stdin
  standard_input.setEncoding('utf-8')
  standard_input.on('data', data => starting(data))
}

start()
