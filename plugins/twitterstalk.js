let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let MessageType = require("@adiwajshing/baileys")
let handler = async(m, { conn, text }) => {
 if (!text) return conn.reply(m.chat, '_Masukkan Username Twitter_', m)
 try {
   await m.reply(global.wait)
    axios.get(`https://videfikri.com/api/stalktwit/?username=${text}`)
    .then((res) => {
      imageToBase64(res.data.result.profile)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `
*Nama:* ${res.data.result.full_name}
*Username:* ${res.data.result.username}
*Followers:* ${res.data.result.followers}
*Following:* ${res.data.result.following}
*Tweets:* ${res.data.result.tweets}

*SGDC-BOT*
`.trim()
     conn.sendFile(m.chat, buf, 'SGDC-BOT.png', str, m)
        })
    })
  } catch (e) {
   m.reply('```Error```')
  }
}


handler.command = /^(twitter(stalk)?)$/i
handler.owner = false

handler.private = false
//  MUHAMMAD AFDHAN
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler