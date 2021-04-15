let axios = require("axios");
let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, '_Silahkan masukan kata kunci_', m)
try {
  await m.reply(global.wait)
axios.get(`https://mhankbarbar.herokuapp.com/api/otakudesu?q=${text}`).then((res) => {
    let hasil = `
*${res.data.sinopsis}

*SGDC-BOT*
`.trim()
conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
   m.reply('```Error```')
  }
} 
handler.command = /^(otakudesu)$/i
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
