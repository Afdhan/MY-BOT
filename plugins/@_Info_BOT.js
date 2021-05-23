let path = require("path")
let fs = require("fs")
let util = require("util")
let { spawn } = require('child_process')
let os = require("os")
let handler = async (m, { conn, text, args, isPrems, isOwner, isROwner, }) => {
	let { wa_version } = conn.user.phone
    let ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB / ' + Math.round(require('os').totalmem / 1024 / 1024) + 'MB'
	let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
	let nama = package.name
    let versi = package.version
    let desci = package.description
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
	let ingfo = `
─────────────────────
                      *INFO SGDC-BOT*
─────────────────────
> Nama:  \`\`\`${nama}\`\`\`
> Versi:  \`\`\`${versi}\`\`\`
> License:  \`\`\`GPL-3.0\`\`\`
> Deskripsi:  \`\`\`${desci}\`\`\`
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

_SGDC-BOT DiKodekan Ulang Pada Januari 2021, Dan Terus Dikembangkan Hingga Sekarang._
_*SGDC* Sendiri Merupakan Singkatan Dari Grup Dan Channel Telegram Kami, Yaitu *Sobat Gretong - Desa Config*_


\`\`\`Terima Kasih Kepada:\`\`\`
- Nurutomo
- Ariffb25
- Dan Seluruh Contributors

\`\`\`Rest Api Yang Digunakan:\`\`\`
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