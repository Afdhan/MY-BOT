let path = require("path")
let fs = require("fs")
let util = require("util")
let { spawn } = require('child_process')
let os = require("os")
let { sizeFormatter } = require('human-readable')
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, text, args }) => {
	let { wa_version } = conn.user.phone
    let ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB / ' + Math.round(require('os').totalmem / 1024 / 1024) + 'MB'
	let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
	let nama = package.name
    let versi = package.version
    let desci = package.description
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let memek = { 
      key: { 
      remoteJid: '111234567890-1594482450@g.us', 
      participant: '0@s.whatsapp.net', 
      fromMe: false 
     }, 
      message: { 
        "imageMessage": { 
        "mimetype": "image/jpeg", 
        "caption":  'Gretongers Indonesia | SGDC-TEAM', 
        "jpegThumbnail": fs.readFileSync('./src/SGDC.jpg')
       }
    }
}
  const chats = conn.chats.all()
  const groups = chats.filter(v => v.jid.endsWith('g.us'))
  const groupsIn = groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
})
	let ingfo = `
─────────────────────
                       *INFO SGDC-BOT*
─────────────────────
> Nama:  \`\`\`${nama}\`\`\`
> Versi:  \`\`\`${versi}\`\`\`
> License:  \`\`\`GPL-3.0\`\`\`
> Deskripsi:  \`\`\`${desci}\`\`\`
> Online:  \`\`\`${uptime}\`\`\`
> Baterai: \`\`\`${conn.battery ? `${conn.battery.value}%` : 'Unknown'}\`\`\`
> Charging: \`\`\`${conn.battery.live ? 'true' : 'false'}\`\`\`
> Browser:  \`\`\`Chrome\`\`\`
> Versi Chrome:  \`\`\`90.0.4430.210\`\`\`
> Server:  \`\`\`Baileys\`\`\`
> Versi Baileys:  \`\`\`3.5.0\`\`\`
> Lang Program:  \`\`\`JavaScript\`\`\`
> Versi WhatsApp:  \`\`\`${wa_version}\`\`\`
> RAM Terpakai:  \`\`\`${ram}\`\`\`
> Base Script:  \`\`\`Nurutomo\`\`\`
> Owner:  \`\`\`M AFDHAN\`\`\`
> Moderator:  \`\`\`NezaVPN\`\`\`

\`\`\`Memori NodeJS Terpakai\`\`\`
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${format(used[key])}`).join('\n')}

\`\`\`INFO CHAT\`\`\`
> Grup Chat: \`\`\`${groups.length}\`\`\` 
> Grup Bergabung: \`\`\`${groupsIn.length}\`\`\`
> Grup Keluar: \`\`\`${groups.length - groupsIn.length}\`\`\`
> Chat Pribadi: \`\`\`${chats.length - groups.length}\`\`\`
> Total Chat: \`\`\`${chats.length}\`\`\`

─────────────────────
    _SGDC-BOT DiKodekan Ulang Pada Januari 2021, Dan Terus Dikembangkan Hingga Sekarang._
_*SGDC* Sendiri Merupakan Singkatan Dari Grup Dan Channel Telegram Kami, Yaitu *Sobat Gretong - Desa Config*_
─────────────────────

\`\`\`Terima Kasih Kepada\`\`\`
- Nurutomo
- Ariffb25
- Dan Seluruh Contributors

\`\`\`Rest Api Yang Digunakan\`\`\`
- XTeam
- LoLHuman
- Videfikri
- Zeks
- OnlyDevCity
- Banghasan
- XinzBot
- T-BOT

              Credit @2021 || M AFDHAN
─────────────────────
                       *ＳＧＤＣ－ＢＯＴ*
─────────────────────
`.trim()

conn.reply(m.chat, ingfo, memek)
}

handler.command = /^(info(bot)?)$/i

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
