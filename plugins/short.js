let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.tbotkey)
    if (!text) return conn.reply(m.chat, '_Silahkan masukan link_', m)
 try{
    await m.reply(global.wait)
    axios.get(`https://xnxx-tbot.herokuapp.com/api/short/tiny?url=${text}&apikey=${api}`).then((res) => {
    let hasil = `
*Link:* ${text}
*Short:* ${res.data.result.link}

*SGDC-BOT*
`.trim()
conn.reply(m.chat, hasil, m)
	})
   } catch (e) {
   m.reply('```Error```')
  }
}
handler.command = /^(tinyurl)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
