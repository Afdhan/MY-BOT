let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.xteam)
  try {
    if (!text) return conn.reply(m.chat, '_Silahkan masukan link!_', m)
    await m.reply(global.wait)
    axios.get(`https://api.xteam.xyz/shorturl/cuttly?url=${text}&APIKEY=${api}`).then((res) => {
    let hasil = `
Link: ${res.data.result.fullLink}
Short: ${res.data.result.shortLink}

*SGDC-BOT*
`.trim()
conn.reply(m.chat, hasil, m)
	})
    } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(cut(t)?ly)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler


//  MUHAMMAD AFDHAN