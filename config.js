let sgdc = require('./sgdc.json')

global.block = []
global.owner = [(sgdc.owner), '6283129011845']
global.mods = ['6282252655313','6283159600193']
global.packname = (sgdc.packname)
global.author = (sgdc.author)
global.wait = "```[!]``` _Ｓｅｄａｎｇ Ｄｉｐｒｏｓｅｓ．．．_"
global.error = "```[!] ERROR [!]``` _Terjadi Kesalahan!_"
global.prems = ['6282252655313', '6283159600193', '6283129011845']
global.APIs = { 
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = {
  'https://api.xteam.xyz': 'abba3220ce4a347f'
}


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
global.rowner = [(sgdc.rowner)]
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
