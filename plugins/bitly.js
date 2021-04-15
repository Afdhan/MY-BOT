let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.xteam)
 try {
    if (!text) return conn.reply(m.chat, '_Silahkan masukkan link_', m)
    await m.reply(global.wait)
    axios.get(`https://api.xteam.xyz/shorturl/bitly?url=${text}&APIKEY=${api}`).then((res) => {
    let hasil = `*Link:* ${text}\n*Short:* ${res.data.result.link}\n\n*[ • SGDC-BOT • ]*`
conn.reply(m.chat, hasil, m)
	})
    } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(bitly)$/i
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