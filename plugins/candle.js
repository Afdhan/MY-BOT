let axios = require("axios");
let handler = async(m, { conn, text }) => {
 try {
    if (!text) return conn.reply(m.chat, 'Silahkan Masukan Teks!', m)
    if (text.length > 10) return conn.reply(m.chat, '_Teks Terlalu Panjang! Maksimal 10 huruf!_', m)
      await m.reply(global.wait)
      let link = 'https://videfikri.com/api/textmaker/candlemug/?text=' + encodeURIComponent(text);
      conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*SGDC-BOT*', m)
   } catch (e) {
  	m.reply('```Error```')
  }
}


handler.command = /^(candle(mug)?)$/i
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