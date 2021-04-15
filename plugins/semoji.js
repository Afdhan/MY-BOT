const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
let items = ["whatsapp", "microsoft", "google", "apple", "samsung", "twitter", "facebook", "joypixels", "openmoji", "emojidex", "lg", "htc", "mozilla"]
let tipe = items[Math.floor(Math.random() * items.length)]
 try {
  if (!text) throw '_Emojinya mana?_'
  await m.reply(global.wait)
  let stic = await sticker(null, global.API('xteam', '/sticker/emojitopng' + tipe, { emo: text }, 'APIKEY'), global.packname, global.author)
  conn.sendMessage(m.chat, stic, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(semoji)$/i

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
