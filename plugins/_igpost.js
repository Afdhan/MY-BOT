let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let kntl = require("../src/kntl.json")
let handler = async(m, { conn, text }) => {
let api = (kntl.onlydev)
 try {
  if (!text) return conn.reply(m.chat, '_Masukkan Url Instagram!_', m)
  await m.reply(global.wait)
  axios.get(`https://onlydevcity.herokuapp.com/api/igpost?url=${text}&apikey=${api}`)
    .then((res) => {
      imageToBase64(res.data.result.url)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `
*ID:* ${res.data.result.id}
*ShortCode:*  ${res.data.result.shortCode}
*Caption:* ${res.data.result.caption}

*SGDC-BOT*
`.trim()
     conn.sendFile(m.chat, buf, 'SGDC-BOT.jpg', str, m)
        })
    })
  } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(igpost)$/i
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