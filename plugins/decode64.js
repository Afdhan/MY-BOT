let axios = require("axios");
let handler = async(m, { conn, text }) => {
 try {
    let txt = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
    if (!txt) return conn.reply(m.chat, 'Masukkan Teks!', m)
    await m.reply(global.wait)
    axios.get(`https://api.anoncybfakeplayer.com/api/base64/?decode=${text}`).then((res) => {
    let hasil = `${res.data.result}\n\n*SGDC-BOT*`
conn.reply(m.chat, hasil, m)
	})
    } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(decode(64)?)$/i
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