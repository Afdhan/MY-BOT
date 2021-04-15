let axios = require("axios");
let handler = async(m, { conn, text }) => {
 try {
    if (!text) return conn.reply(m.chat, 'Silahkan masukan kata kunci', m)
   await m.reply(global.wait)
   axios.get(`https://mhankbarbar.herokuapp.com/api/dewabatch?q=${text}`).then((res) => {
    let hasil = `${res.data.result.sinopsis}\n\n*SGDC-BOT*`
conn.reply(m.chat, hasil, m)
	})
    } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(dewabatch)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

//  MUHAMMAD AFDHAN