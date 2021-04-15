let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
	let api = (kntl.tbotkey)
    try{
      if (!text) return conn.reply(m.chat, 'Masukkan Lokasi', m)
     axios.get(`https://xnxx-tbot.herokuapp.com/api/kodepos?kota=${text}&apikey=${api}`).then((res) => {
    let hasil = `
*Postal Code*
${res.data.result.data.postalcode}

*SGDC-BOT*
`.trim()
conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
   m.reply('```Error```')
  }
}
handler.command = /^(kodepos)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
