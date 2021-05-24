let axios = require("axios");
let MessageType = require("@adiwajshing/baileys")
let handler = async(m, { conn, text }) => {
try {
   let [s1, s2] = text.split `|`
    if (!s1) return conn.reply(m.chat, '_Masukan Teks1_', m)
    if (!s2) return conn.reply(m.chat, '_Masukan Teks2_', m)
    if (s1.length > 10) return conn.reply(m.chat, '_Teks1 Terlalu Panjang! Maksimal 10 huruf!_', m)
    if (s2.length > 10) return conn.reply(m.chat, '_Teks2 Terlalu Panjang! Maksimal 10 huruf!_', m)
   await m.reply(global.wait)
    let link = 'https://videfikri.com/api/textmaker/8bit/?text1=' + s1 + '&text2=' + s2 
    conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*SGDC-BOT*', m)
   } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(8bit)$/i

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