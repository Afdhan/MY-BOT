let axios = require("axios");
let MessageType = require("@adiwajshing/baileys")
let handler = async(m, { conn, text }) => {
try {
    if (!text) return conn.reply(m.chat, '_Sil ahkan Masukan Teks!_', m)
    if (text.length > 10) return conn.reply(m.chat, '_Teks Terlalu Panjang! Maksimal 10 huruf!_', m)
    await m.reply(global.wait)
    let link = 'https://lindow-api.herokuapp.com/api/pinterest?search=' + encodeURIComponent(text);
    conn.sendMessage(m.chat, link, MessageType.image, { quoted: m, caption: "*SGDC-BOT*" })
  } catch (e) {
   m.reply('```Error```')
  }
} 

handler.command = /^(pinterest)$/i

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
