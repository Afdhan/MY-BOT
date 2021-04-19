console.log('SGDC-BOT ~> Connecting to server...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts  = require('cfonts')
/*CFonts.say('Ada Satu Yang Harus Kamu Perhatikan', {
  font: 'console',
  align: 'center',
  colors: ['red'],
  gradient: false
})*/
CFonts.say(`${package.name}`, {
  font: 'block',
  align: 'center',
  gradient: ['red', 'blue']
})
CFonts.say(`Karena suatu Kejadian berawal dari sebuah Tindakan.|Jadi, jangan ragu untuk memulai sebuah karya|Perihal Gagal ataupun Berhasil,|itu tergantung dari tingkat kegigihanmu.\n\nBumi, 19 April 2021`, {
  font: 'console',
  align: 'center',
  colors: ['cyan'],
  gradient: false
})
function start(file) {
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  /*CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['blue', 'red']
  })*/
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  p.on('message', data => {
    console.log('SGDC-BOT @dhans11_ ~> [ RECEIVED ] =>', data)
    switch (data) {
      case 'reset':
        p.kill()
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', code => {
    console.error('Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })

}

start('dhans.js')
