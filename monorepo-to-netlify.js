/*
version 2020.02.06

Clone the repo indicated to a folder, and push it back to its netlify branch

BOFORE doing it make sure that the repo is up to date with monorepo-to-repo.js!
*/

const fs = require('fs-extra'),
  path = require('path'),
  util = require('util'),
  prompt = require('prompt'),
  exec = util.promisify(require('child_process').exec),
  execSync = require('child_process').execSync,
  temp_dir = '../kuworking-TEMP-NETLIFY-DEPLOYMENT'

const bash = async command => {
  console.log(`>>>  executing: ${command}`)
  execSync(command, { stdio: 'inherit' })
  //  const cm = await exec(command)
  //  if (cm.stdout) {
  //    console.log(`>>>  stdout exists, but not printed`)
  //  }
}

const createFolder = async dir => {
  if (fs.existsSync(dir)) return true
  fs.mkdirSync(dir, '0766', err => console.log(err ? err : `folder ${dir} created`) && process.exit())
  return false
}

const starting = async ({ confirm }, repo) => {
  if (confirm === 'no') return

  console.log(`>>> Creating the folder`)
  const itExists = await createFolder(temp_dir)
  if (itExists) {
    console.log(
      `********** The folder ${temp_dir} exists, DELETE IT (do it yourself for precaution) and run this command again`
    )
    return
  }

  console.log(`>>> Cloning the repo`)
  await process.chdir(`./${temp_dir}`)
  await bash(`git clone ${repo}`)
  console.log(`>>> Pushing the repo back but to netlify branch`)
  await process.chdir(`./${temp_dir}`)
  const files = await fs.promises.readdir(temp_dir)
  await process.chdir(`./${files[0]}`)
  await bash(`git push ${repo} master:netlify --force`)
  await process.chdir(__dirname)
  console.log(`>>> __________ ...finished\n`)
  process.exit()
}

const start = async () => {
  const repo = process.argv[2]
  prompt.start()
  prompt.get(
    [
      {
        name: 'confirm',
        description: `Do you want to push ${repo} to its netlify branch? write "no" to abort, enter to confirm`,
      },
    ],
    (err, result) => {
      if (err) {
        console.log(err)
        return 1
      }
      starting(result, repo)
    }
  )
}

start()
