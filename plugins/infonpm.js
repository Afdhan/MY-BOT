let axios = require("axios");
let handler = async(m, { conn, text }) => {
 try {
    if (!text) return conn.reply(m.chat, '_Masukkan Nama NPM_', m)
    await m.reply(global.wait)
	axios.get(`https://videfikri.com/api/npm/?query=${text}`).then ((res) => {
	let hasil = `
*ID:* ${res.data.result.id}
*REV:* ${res.data.result.rev}
*Name:* ${res.data.result.name}
*Author Name:* ${res.data.result.author_name}
*Version Latest:* ${res.data.result.version_latest}
*HomePage:* ${res.data.result.homepage}
*License:* ${res.data.result.license}
*Maintainer:* ${res.data.result.maintainer}
*Email:* ${res.data.result.email}
*Created:* ${res.data.result.created_at}
*Last Modified:* ${res.data.result.last_modified}


*SGDC-BOT*
`.trim()
    conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(infonpm|npm)$/i
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
