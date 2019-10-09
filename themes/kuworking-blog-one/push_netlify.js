/*
version 2019.04.08

Designed only to git pull from the repo and push to netlify branch

    "pull_hard": "git fetch --all && git reset --hard origin/master",
    "push_netlify": "node push.js",
    "netlify": "npm run pull_hard && npm run push_netlify",

    */

/* ----------------------------------------------- */

const exec = require('child_process').exec

const help = {
  listCredentials: 'git config --global -l',
  fixCredentials: 'git config --global --unset-all "credential.helper"',
  deteletag: 'git tag --delete tagname',
  deleteRemoteTag: 'git push --delete origin tagname',
  listLocalTags: 'git tag',
  listRemoteTags: 'git ls-remote --tags url_to_repo',
  deleteFolderInTerminal: 'rmdir /s node_modules',
}

/* ----------------------------------------------- */

const result = command => {
  return new Promise((done, failed) => {
    exec(command, (err, stdout, stderr) => {
      if (stdout) console.log(stdout)
      if (stderr) console.log(stderr)
      if (err !== null) console.log('ERROR >>>>>>>>>>>>> ' + err)
      done({ stdout, stderr })
    })
  })
}

const doit = async cm => {
  console.log(cm)
  return await result(cm)
}

/* ----------------------------------------------- */

const start_netlify = async message => {
  await doit('git push https://github.com/kuworking/kuworking_site.git master:netlify --force')
  console.log('LOG → END')
  process.exit()
}

/* ----------------------------------------------- */

const standard_input = process.stdin
standard_input.setEncoding('utf-8')
console.log('LOG → Write commit message: ')
standard_input.on('data', data => {
  if (data === 'exit\n') {
    console.log('LOG → Exit')
    process.exit()
  } else {
    start_netlify(data)
  }
})
