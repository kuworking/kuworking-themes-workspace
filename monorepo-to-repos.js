/*
 version 2020.02.01

 clone each theme in this monorepo to a separated repo to push it to GitHub

  ********
  Use before using this script `lerna publish` to update the versions with each change and publish the npm packages
  THEN, use this script 'split_monorepo' to push each repo of the workspace to the individual repos in github
  THEN use 'split_netlify' to publish each splitted repo into its netlify branch to trigger the builds (each time I'll have to delete the created folder)
  ********

  I need to login npm before, `npm adduser` with kuworking, password and mail

  npm run lerna_publish
  npm run split_monorepo
  npm run split_netlify https://github.com/kuworking/kuworking-theme-one
  npm run split_netlify https://github.com/kuworking/kuworking-theme-two
  npm run split_netlify https://github.com/kuworking/kuworking-theme-affiliate
  npm run split_netlify https://github.com/kuworking/kuworking-theme-landing-one
  --- if error, delete folders in kuworking-split-monorepos

  npm run netlify-one
  npm run netlify-two
  npm run netlify-affiliate
  npm run netlify-landingone

 */

const fs = require('fs-extra'),
  path = require('path'),
  util = require('util'),
  prompt = require('prompt'),
  exec = util.promisify(require('child_process').exec),
  spawn = util.promisify(require('child_process').spawn),
  stdin = process.stdin,
  stdout = process.stdout,
  isWin = process.platform === 'win32',
  dirs = ['./themes', './packages'],
  temp_dir = '../kuworking-split-monorepos'

const msg = `starting...
- check if ../split-monorepo exists (create it if not)
- entering in ./themes folder and then in ./packages
- copy each folder to ../split-monorepo with git clone
- run add origin remote
- push force to that remote
- (npm package is already updated from lerna in the monorepo)
- delete the created folder
`

const bash = async command => {
  console.log(`>>>  executing: ${command}`)
  const cm = await exec(command)
  if (cm.stdout) {
    console.log(`>>>  stdout exists, but not printed`)
  }
}

const createFolder = async (dir, cloneUrl) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, '0766', err => console.log(err ? err : `folder ${dir} created`) && process.exit())
    if (cloneUrl) {
      await bash(`git clone ${cloneUrl}`)
      console.log(`repo ${cloneUrl} git-cloned`)
    }
    return false
  } else {
    return true
  }
}

const readdir = util.promisify(fs.readdir)

const starting = async ({ skip_folders, commit_message }) => {
  const skip = skip_folders === 'yes'
  if (skip) console.log('... skipping repos that have their folder in the split directory ...')

  console.log(
    'REMEMBER that with any manual change in github the push here will fail, in that case delete the folder from the split directory'
  )

  for (const dir of dirs) {
    console.log('Handling ' + dir)
    console.log('------------------')
    const themes = await readdir(dir)

    // cannot use forEach if I want async/await to work as I want
    // https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
    for (const theme of themes) {
      console.log(`\nHandling ${theme}`)
      const remote_json = require(`./${dir}/${theme}/package.json`)
      console.log(`Entering in ${remote_json.name}`)
      if (remote_json.private) {
        console.log('this theme is private')
        continue
      }

      await createFolder(temp_dir)

      await process.chdir(`./${temp_dir}`)
      const exists = await createFolder(`${theme}`, remote_json.repository.url)
      if (skip && exists) {
        console.log('this theme has a folder and is skipped')
        await process.chdir(__dirname)
        continue
      }
      await process.chdir(`./${theme}`)

      const src = `${__dirname}/${dir}/${remote_json.name}`
      const dest = `${__dirname}/${temp_dir}/${remote_json.name}`
      const checkFileName = name => pathnames => (pathnames.some(x => x === name) ? false : true)
      const filterFunc = (src, dest) => checkFileName(src.split(/[\\//]/).pop())(['node_modules', 'public', '.cache'])
      await fs.copy(src, dest, { filter: filterFunc })

      await bash(`git add *`)
      await bash(`git config core.ignorecase false`)
      await bash(`git commit --allow-empty -m "${commit_message.trim()}"`)
      if (!isWin) {
        console.log('this is not Windows, configuring credential.helper')
        await bash(`git config --global credential.helper 'cache --timeout=3600'`)
      }
      await bash(`git push origin master`)
      await process.chdir(__dirname)
    }
    console.log(`------------------\n`)
  }
  console.log(`\n\n_____finished`)
  process.exit()
}

const start = async () => {
  prompt.start()
  prompt.get(
    [
      {
        name: 'skip_folders',
        description:
          'Want to skip those packages that have a folder in the monorepo directory? "yes" or empty | anything',
      },
      { name: 'commit_message', description: 'Write commit message: ' },
    ],
    (err, result) => {
      if (err) {
        console.log(err)
        return 1
      }
      starting(result)
    }
  )
}

start()
