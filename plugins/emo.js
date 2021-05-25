const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, args, text }) => {
 await m.reply(global.wait)
//let [ayam, geprek] = text.split ` | `
 try {
  if (!args[0]) throw '_Masukkan Tipe!_'
  if (!args[1]) throw '_Emojinya mana?_'
  let stic = await sticker(null, global.API('xteam', '/sticker/emojitopng' + args[0], { emo: args[1] }, 'APIKEY'), global.packname, global.author)
  conn.sendMessage(m.chat, stic, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(emo)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

//  MUHAMMAD AFDHAN

module.exports = handler
