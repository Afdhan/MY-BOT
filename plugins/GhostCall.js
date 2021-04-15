let axios = require("axios");
let handler = async(m, { conn, text }) => {
 try {
  if (!text) return m.reply('_Masukkan Nomor Tujuan Dengan Format *8xxx*!_')
await axios.get(`https://api-anoncybfakeplayer.herokuapp.com/spamcall?nomor=${text}`).then ((res) => {
  let user = m.sender
 // let cal = `@${no.split("@")[0]}`
  conn.reply(m.chat, `_Nomor Harus Aktif @${user.split("@")[0]}!_`, m, { contextInfo: { mentionedJid: [user] } })
    })
   } catch (e) {
   m.reply('```Error```')
  }
 }
handler.command = /^(call(me)?)$/i
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
