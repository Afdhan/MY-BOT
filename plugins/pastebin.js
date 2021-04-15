let axios = require("axios");
let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukan teks', m)
try {
	await m.reply(global.wait)
    axios.get(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${text}`).then((res) => {
    let hasil = `
*Teks:* ${text}
*Link:* ${res.data.result}

*SGDC-BOT*
`.trim()
conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
   m.reply('```Error```')
  }
} 
handler.command = /^(pastebin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

///  MUHAMMAD AFDHAN

