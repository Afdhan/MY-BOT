let axios = require("axios");
let handler = async(m, { conn, text }) => {
try {
    await m.reply(global.wait)
	axios.get(`https://videfikri.com/api/infogempa/`).then ((res) => {
let hasil = `
*Wilayah:* ${res.data.result.wilayah}
*Bujur:* ${res.data.result.bujur}
*Lintang:* ${res.data.result.lintang}
*Waktu:* ${res.data.result.waktu}
*Magnitudo:* ${res.data.result.magnitudo}
*Kedalaman:* ${res.data.result.kedalaman}


*SGDC-BOT*
`.trim()
    conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(infogempa)$/i
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
