let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let MessageType = require("@adiwajshing/baileys")
let handler = async(m, { conn, text }) => {
try {
 if (!text) return conn.reply(m.chat, '_Masukkan Username Instagram!_', m)
  await m.reply(global.wait)
    axios.get(`https://mhankbarbar.herokuapp.com/api/stalk?username=${text}`)
    .then((res) => {
      imageToBase64(res.data.Profile_pic)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `
Nama: _${res.data.Name}_
Username: _${res.data.Username}_
Followers: _${res.data.Jumlah_Followers}_
Following: _${res.data.Jumlah_Following}_
Bio: _${res.data.Biodata}_

*SGDC-BOT*
`.trim()
     conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*SGDC-BOT*', m)
        })
    })
  } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(igstalk)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

//  MUHAMMAD AFDHAN

module.exports = handler