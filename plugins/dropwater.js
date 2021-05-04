let axios = require("axios");
let handler = async(m, { conn, text }) => {
	m.reply('```Kami Butuh Apikey Untuk Memperbaiki Fitur Ini!```')
/* try {
    if (!text) return conn.reply(m.chat, '_Masukan Teks!_', m)
    if (text.length > 10) return conn.reply(m.chat, '_Teks Terlalu Panjang! Maksimal 10 huruf!_', m)
    await m.reply(global.wait)
   let link = 'https://fzn-gaz.herokuapp.com/api/textpro/dropwater?text=' + text

conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*SGDC-BOT*', m)
    } catch (e) {
  	m.reply('```Error```')
  }*/
}

handler.command = /^(drop(water)?)$/i

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