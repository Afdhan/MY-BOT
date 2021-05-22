let axios = require("axios");
let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, '_Masukkan Judul Lagu!_', m)
 try {
   await m.reply(global.wait)
   axios.get(`https://videfikri.com/api/liriklagu/?query=${text}`).then((res) => {
  let hasil = `
Judul: ${res.data.result.title}
Artist: ${res.data.result.artist}
Lirik:
_${res.data.result.lirik}_

*SGDC-BOT*
`.trim()
conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
   m.reply('```Error```')
  }
}
handler.command = /^(lirik)$/i
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