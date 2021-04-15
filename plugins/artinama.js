let axios = require("axios");
let handler = async(m, { conn, text }) => {
 try{
    if (!text) return conn.reply(m.chat, '_Silahkan masukan nama yang ingin diartikan!_', m)
    await m.reply(global.wait)
	axios.get(`https://videfikri.com/api/primbon/artinama/?nama=${text}`).then ((res) => {
    let hasil = `
*Arti Nama ${text}*
${res.data.result.arti}

*Deskripsi:*
${res.data.result.desk}

*SGDC-BOT*
`.trim()

    conn.reply(m.chat, hasil, m)
	})
   } catch (e) {
  	m.reply('```Error```')
  }
}

handler.command = /^(arti(nama)?)$/i
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
