let axios = require("axios");
let handler = async(m, { conn, text }) => {
  try {
    if (!text) return conn.reply(m.chat, '_Masukkan Link!_', m)
    await m.reply(global.wait)
	axios.get(`https://fzn-gaz.herokuapp.com/api/igdl?url=${text}`).then ((res) => {
let hasil = `
*KLIK LINK FOR DOWNLOAD*

*Userame:* ${res.data.result.username}
*Caption:* ${res.data.result.caption}
*Link:* ${res.data.result.url}

_Download Sendiri, Jangan Manja :v_

*SGDC-BOT*
`.trim()
    conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(igdl)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler