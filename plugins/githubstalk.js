let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let MessageType = require("@adiwajshing/baileys")
let handler = async(m, { conn, text }) => {
 try {
 if (!text) return conn.reply(m.chat, '_Masukkan Username Github_', m)
    await m.reply(global.wait)
    axios.get(`https://videfikri.com/api/github/?username=${text}`)
    .then((res) => {
      imageToBase64(res.data.result.profile_pic)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `
*GITHUB STALK*

ID: ${res.data.result.id}
Username: ${res.data.result.username}
Followers: ${res.data.result.followers}
Following: ${res.data.result.following}
Repository: ${res.data.result.public_repository}
Profile Url: ${res.data.result.profile_url}

*SGDC-BOT*
`.trim()
     conn.sendFile(m.chat, buf, 'SGDC-BOT.png', str, m)
        })
    })
   } catch (e) {
   m.reply('```Error```')
  }
 }
 
handler.command = /^(github(stalk)?)$/i
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