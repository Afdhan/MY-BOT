let axios = require("axios");
let handler = async(m, { conn, text }) => {
 try {
    let txt = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
    if (!txt) return conn.reply(m.chat, '_Silahkan masukan kata kunci!_', m)
    axios.get(`https://videfikri.com/api/jumlahhuruf/?query=${txt}`).then((res) => {
    let hasil = `
JUMLAH ADA: *${res.data.result.jumlah}*

*SGDC-BOT*
`.trim()
conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
   m.reply('```Error```')
  }
}
handler.command = /^(jhuruf)$/i
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
