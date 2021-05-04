let axios = require("axios");
let handler = async(m, { conn, text }) => {
	m.reply('```Kami Butuh Apikey Untuk Memperbaiki Fitur Ini!```')
/*    if (!text) return conn.reply(m.chat, '_Masukan Teks!_', m)
try {
     await m.reply(global.wait)
     let link = 'https://fzn-gaz.herokuapp.com/nulis?text=' + text
     conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*SGDC-BOT*', m)
  } catch (e) {
   m.reply('```Error```')
  }*/
} 

handler.command = /^(nulis3)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

//  MUHAMMAD AFDHAN
module.exports = handler
