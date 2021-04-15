let axios = require("axios");
let handler = async(m, { conn, text }) => {
 try {
    if (!text) return conn.reply(m.chat, 'Silahkan masukan parameter! contoh *!artimimpi ular*', m)
    await m.reply(global.wait)
	axios.get(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${text}`).then ((res) => {
	let hasil = `
*TAFSIR MIMPI*

${res.data.result.artimimpi}

*SGDC-BOT*
`.trim()
conn.reply(m.chat, hasil, m)
	 })
  } catch (e) {
  	m.reply('```Error```')
  }
}

handler.command = /^(artimimpi|tafsirmimpi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
