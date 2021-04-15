let axios = require("axios");
let handler = async(m, { conn, text }) => {
 try {
    if (!text) return conn.reply(m.chat, '_Masukkan Judul Lagu!_', m)
    await m.reply(global.wait)
    axios.get(`https://st4rz.herokuapp.com/api/chord?q=${text}`).then((res) => {
    let hasil = `${res.data.result}\n\n*SGDC-BOT*`
conn.reply(m.chat, hasil, m)
	})
   } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(chord)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler


// MUHAMMAD AFDHAN