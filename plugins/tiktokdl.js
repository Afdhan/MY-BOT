let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
	m.reply('```Kami Butuh Apikey Untuk Memperbaiki Fitur Ini!```')
/* if (!text) return conn.reply(m.chat, '_Masukkan Link Video TikTok_', m)
try {
  await m.reply(global.wait)
    axios.get(`https://fzn-gaz.herokuapp.com/api/tiktok?url=${text}`)
    .then((res) => {
      imageToBase64(res.data.thumb)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `
*KLIK LINK FOR DOWNLOAD*               
            
*Caption:* ${res.data.caption}
*Link:* ${res.data.result}


 _Download Sendiri, Jangan Manja :v_

*SGDC-BOT*
`.trim()
     conn.sendFile(m.chat, buf, 'SGDC-BOT.png', str, m)
        })
    })
  } catch (e) {
   m.reply('```Error```')
  }*/
}

handler.command = /^(tiktokdl)$/i
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