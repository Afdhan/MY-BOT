let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
 if (!text) return conn.reply(m.chat, '_Masukkan Link YouTube_', m)
  try {
    await m.reply(global.wait)
    axios.get(`https://fzn-gaz.herokuapp.com/api/ytmp4?url=${text}`)
    .then((res) => {
      imageToBase64(res.data.thumb)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `
*KLIK LINK FOR DOWNLOAD*               
            
*Title:* ${res.data.title}
*Size:* ${res.data.size}
*Link:* ${res.data.result}


_Download Sendiri, Jangan Manja :v_

*SGDC-BOT*
`.trim()
     conn.sendFile(m.chat, buf, 'SGDC-BOT.png', str, m)
        })
    })
   } catch (e) {
    m.reply('```Error```')
   }
}

handler.command = /^(ytmp4)$/i
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