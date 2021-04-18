let axios = require("axios");
let handler = async(m, { conn, text }) => {
 try {
    if (!text) return conn.reply(m.chat, '_Masukan Nama!_', m)
    if (text.length > 15) return conn.reply(m.chat, '_Teks Terlalu Panjang! Maksimal 15 huruf!_', m)
   await m.reply(global.wait)
   let link = 'https://onlydevcity.xyz/FFSerti5/img.php?nama=' + text;
   conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*SGDC-BOT*', m)
   } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(ffserti5)$/i
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