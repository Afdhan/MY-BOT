let axios = require("axios");
let handler = async(m, { conn, text }) => {
let txt = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
    if (!txt) return conn.reply(m.chat, 'Silahkan masukan kata kunci', m)
 try {
   axios.get(`https://videfikri.com/api/hurufterbalik/?query=${txt}`).then((res) => {
    let hasil = `${res.data.result.kata}`
    conn.reply(m.chat, hasil, m)
   })
   } catch (e) {
   m.reply('```Error```')
  }
}
handler.command = /^(hurufbalik|teksbalik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
