let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler  = async (m, { conn, text }) => {
    let api = (kntl.zekskey)
  try {
    if (!text) return conn.reply(m.chat, '_Masukkan Nama Channel_', m)
    await m.reply(global.wait)
	axios.get(`https://api.zeks.xyz/api/jadwaltv?channel=${text}&apikey=${api}`).then ((res) => {
	 	let hasil = `
*Jadwal TV ${text} Hari Ini*

${res.data.result}

*SGDC-BOT*
`.trim()
   conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(jadwal(tv)?)$/i
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
