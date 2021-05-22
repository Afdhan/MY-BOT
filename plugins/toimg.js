const { spawn } = require('child_process')
const util = require('util')
const { MessageType } = require('@adiwajshing/baileys')
//let { err } = require('syntax-error')
let handler  = async (m, { conn }) => {
  if (!m.quoted) return conn.reply(m.chat, 'Tag stikernya!', m)
  await m.reply(global.wait)
  try {
  let q = { message: { [m.quoted.mtype]: m.quoted }}
  if (/sticker/.test(m.quoted.mtype)) {
    let sticker = await conn.downloadM(q)
    if (!sticker) throw sticker
    let bufs = []
    let im = spawn('convert', ['webp:-', 'jpg:-'])
    im.on('error',e =>  conn.reply(m.chat, '*SYSTEM ERROR*', m))
    im.stdout.on('data', chunk => bufs.push(chunk))
    im.stdin.write(sticker)
    im.stdin.end()
    im.on('exit', () => {
     // conn.reply(m.chat, '*[ WAIT ]* *_Sedang di proses..._*', m)
      conn.sendFile(m.chat, Buffer.concat(bufs),'SGDC-BOT.jpg', '*SGDC-BOT*', m)
    })
   } 
 } catch (e) { 
     m.reply('```Error```')
   }
}
//util.format(e)
handler.command = /^(toimg|stimg|img)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

