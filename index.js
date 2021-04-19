console.log('SGDC-BOT ~> Connecting to server...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts  = require('cfonts')
/*CFonts.say('', {
  font: 'console',
  align: 'center',
  colors: ['red'],
  gradient: false
})*/
CFonts.say(`${package.name}`, {
  font: 'pallet',
  align: 'center',
  colors: ['green','red'],
  background: 'transparent',
  letterSpacing: 0,
  lineHeight: 1,
  space: false,
  maxLength: '0', 
  gradient: false,
  independentGradient: false,
  transitionGradient: false,
  env: 'node'
})
CFonts.say(`Karena suatu Kejadian berawal dari sebuah Tindakan.|Jadi, jangan ragu untuk memulai sebuah karya|Perihal Gagal ataupun Berhasil,|itu tergantung dari tingkat kegigihanmu.\n\nBumi, 19 April 2021`, {
  font: 'console',
  align: 'center',
  colors: ['cyan'],
  background: 'transparent',
  letterSpacing: 0,
  lineHeight: 1,
  space: false,
  maxLength: '0', 
  gradient: true,
  independentGradient: true,
  transitionGradient: true,
  env: 'node'
})
function start(file) {
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    colors: ['blue'],
    gradient: false
  })
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
