let chalk = require('chalk')
console.log(chalk.cyan(`SGDC-BOT Connecting to WhatsApp Web server...`))
require('./config.js')
let { MessageType, WAConnection: _WAConnection } = require('@adiwajshing/baileys')
let { generate } = require('qrcode-terminal')
let syntaxerror = require('syntax-error')
let simple = require('./lib/simple')
//  let logs = require('./lib/logs')
let { promisify } = require('util')
let yargs = require('yargs/yargs')
let Readline = require('readline')
let cp = require('child_process')
let qrcode = require('qrcode')
let path = require('path')
let fs = require('fs')

let rl = Readline.createInterface(process.stdin, process.stdout)
let WAConnection = simple.WAConnection(_WAConnection)


global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {}) })) : '')
global.timestamp = {
  start: new Date
}

const PORT = process.env.PORT || 3000
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

global.prefix = new RegExp('^[' + (opts['prefix'] || '‎!.^#$?¥\/%+×1*&07-,@•○●~♡☆♤◇♧ZQ').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.DATABASE = new (require('./lib/database'))(`${opts._[0] ? opts._[0] + '_' : ''}database.json`, null, 2)
if (!global.DATABASE.data.users) global.DATABASE.data = {
  users: {},
  chats: {},
  stats: {},
  msgs: {},
}
if (!global.DATABASE.data.chats) global.DATABASE.data.chats = {}
if (!global.DATABASE.data.stats) global.DATABASE.data.stats = {}
if (!global.DATABASE.data.stats) global.DATABASE.data.msgs = {}
global.conn = new WAConnection()
let authFile = `${opts._[0] || 'session'}.data.json`
if (fs.existsSync(authFile)) conn.loadAuthInfo(authFile)
if (opts['trace']) conn.logger.level = 'trace'
if (opts['debug']) conn.logger.level = 'debug'
if (opts['big-qr'] || opts['server']) conn.on('qr', qr => {
  generate(qr, { small: false })
  console.log(chalk.red('[') + chalk.cyan(' SGDC-BOT ') + chalk.red(']') + chalk.green(' ~ Scan This QR Code With WhatsApp Web !!!'))
})
if (opts['server']) conn.on('qr', qr => { 
  global.qr = qr 
  console.log(chalk.red('[') + chalk.cyan(' SGDC-BOT ') + chalk.red(']') + chalk.green(' ~ Scan This QR Code With WhatsApp Web !!!'))
})
let lastJSON = JSON.stringify(global.DATABASE.data)
if (!opts['test']) setInterval(() => {
  global.DATABASE.save()
  lastJSON = JSON.stringify(global.DATABASE.data)
}, 60 * 1000)

if (opts['test']) {
  conn.user = {
    jid: '2219191@s.whatsapp.net',
    name: 'test',
    phone: {}
  }
  conn.chats
  conn.prepareMessageMedia = (buffer, mediaType, options = {}) => {
    return {
      [mediaType]: {
        url: '',
        mediaKey: '',
        mimetype: options.mimetype,
        fileEncSha256: '',
        fileSha256: '',
        fileLength: buffer.length,
        seconds: options.duration,
        fileName: options.filename || 'file',
        gifPlayback: options.mimetype == 'image/gif' || undefined,
        caption: options.caption,
        ptt: options.ptt
      }
    }
  }

  conn.sendMessage = async (chatId, content, type, opts = {}) => {
    let message = await conn.prepareMessageContent(content, type, opts)
    let waMessage = conn.prepareMessageFromContent(chatId, message, opts)
    if (type == 'conversation') waMessage.key.id = require('crypto').randomBytes(16).toString('hex').toUpperCase()
    conn.emit('chat-update', {
      jid: conn.user.jid,
      messages: {
        all() {
          return [waMessage]
        }
      }
    })
  }
  rl.on('line', line => conn.sendMessage('123@s.whatsapp.net', line.trim(), 'conversation'))
} else {
  rl.on('line', line => {
    global.DATABASE.save()
    process.send(line.trim())
  })
  conn.connect().then(() => {
    fs.writeFileSync(authFile, JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))
    global.timestamp.connect = new Date
  })
}
process.on('uncaughtException', console.error)


let isInit = true
global.reloadHandler = function () {
  let handler = require('./handler')
  if (!isInit) {
    conn.off('chat-update', conn.handler)
    conn.off('message-delete', conn.onDelete)
    conn.off('group-participants-update', conn.onParticipantsUpdate)
  }
  conn.welcome = '```Hallo mbah @user!```\n\nSelamat datang di grup *@subject!*\nJangan lupa baca deskripsi :)'
  conn.bye = '```Selamat tinggal mbah @user!``` _Semoga tenang dialam sana :(_'
  conn.spromote = '```@user sekarang adalah admin!```'
  conn.sdemote = '```@user sekarang bukan lagi admin!```'
  conn.handler = handler.handler
  conn.onDelete = handler.delete
  conn.onParticipantsUpdate = handler.participantsUpdate
  conn.on('chat-update', conn.handler)
  conn.on('message-delete', conn.onDelete)
  conn.on('group-participants-update', conn.onParticipantsUpdate)
  if (isInit) {
    conn.on('error', conn.logger.error)
    conn.on('close', () => {
      setTimeout(async () => {
        try {
          if (conn.state === 'close') {
            if (fs.existsSync(authFile)) await conn.loadAuthInfo(authFile)
            await conn.connect()
            fs.writeFileSync(authFile, JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))
            global.timestamp.connect = new Date
          }
        } catch (e) {
          conn.logger.error(e)
        }
      }, 5000)
    })
  }
  isInit = false
  return true
}
conn.on("CB:Call", json => {
    const chalk = require("chalk")
    const caller = json[2][0][1].m.chat
    console.log(chalk.red("Calling Warn!!! " + caller))
    setTimeout(function(){
    conn.sendMessage(caller, `Maaf, SGDC-BOT tidak bisa menerima panggilan. Anda akan diblokir otomatis!`, MessageType.text)
    .then(() => conn.blockUser(caller, "add"))
    console.log(chalk.blue('Users is blocked!'))
   }, 1000);
})

conn.on(`CB:action,,battery`, json => {
    const chalk = require("chalk");
    const batteryLevelStr = json[2][0][1].value
    const batterylevel = parseInt(batteryLevelStr)
    console.log(chalk.red('Device Battery Info') + '\n\n' + chalk.red('Sisa Baterai Perangkat > ') + chalk.bold.green(`${batterylevel}` + '%') + '\n\n' + chalk.red('SGDC-BOT - M AFDHAN'))
})

conn.on('CB:Blocklist', json => {
    if (global.block.length > 2) return
    for (let i of json[1].blocklist) {
    global.block.push(i.replace('c.us', 's.whatsapp.net'))
    }
})

let pluginFolder = path.join(__dirname, 'plugins')
let pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
  try {
    global.plugins[filename] = require(path.join(pluginFolder, filename))
  } catch (e) {
    conn.logger.error(e)
    delete global.plugins[filename]
  }
}
//console.log(Object.keys(global.plugins))
global.reload = (_event, filename) => {
  if (pluginFilter(filename)) {
    let dir = path.join(pluginFolder, filename)
    if (dir in require.cache) {
      delete require.cache[dir]
      if (fs.existsSync(dir)) conn.logger.info(`re - require plugin '${filename}'`)
      else {
        conn.logger.warn(`deleted plugin '${filename}'`)
        return delete global.plugins[filename]
      }
    } else conn.logger.info(`requiring new plugin '${filename}'`)
    let err = syntaxerror(fs.readFileSync(dir), filename)
    if (err) conn.logger.error(`syntax error while loading '${filename}'\n\n${err}`)
    else try {
      global.plugins[filename] = require(dir)
    } catch (e) {
      conn.logger.error(e)
    }
  }
}
Object.freeze(global.reload)
fs.watch(path.join(__dirname, 'plugins'), global.reload)
global.reloadHandler()
process.on('exit', () => global.DATABASE.save())




async function _quickTest() {
  let spawn = promisify(cp.spawn).bind(cp)
  let [ffmpeg, ffmpegWebp, convert] = await Promise.all([
    spawn('ffmpeg', [], {}),
    spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-'], {}),
    spawn('convert', [], {})
  ]).catch(conn.logger.error)
  global.support = {
    ffmpeg: ffmpeg.status,
    ffmpegWebp: ffmpeg.status && ffmpegWebp.stderr.length == 0 && ffmpegWebp.stdout.length > 0,
    convert: convert.status
  }
  Object.freeze(global.support)

  if (!global.support.ffmpeg) conn.logger.warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
  if (!global.support.ffmpegWebp) conn.logger.warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
  if (!global.support.convert) conn.logger.warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
}

//_quickTest()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'dhans.js'"))
  delete require.cache[file]
})


/*
* MUHAMMAD AFDHAN
* JANGAN HAPUS INI
* GUA COLOK MATA LO ANJING
* KALAU MAU RECODE 
* IZIN DULU ANJIINNGG
* 
* ORIGINAL SCRIPT BY Nurutomo
* Big Thanks To Nurutomo
* https://github.com/Nurutomo/wabot-aq
*/
