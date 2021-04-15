let axios = require("axios");
let handler = async(m, { conn, text }) => {
  try {
    if (!text) return conn.reply(m.chat, '_Silahkan masukan kata kunci!_', m)
   await m.reply(global.wait)
   axios.get(`https://videfikri.com/api/kbbi/?query=${text}`).then((res) => {
    let hasil = `
*Kamus Besar Bahasa Indonesia*

${res.data.result.hasil}

*SGDC-BOT*
`.trim()
conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
   m.reply('```Error```')
  }
}
handler.command = /^(kbbi)$/i
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