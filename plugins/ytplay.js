let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
 if (!text) return conn.reply(m.chat, '_Masukkan Judul Video_', m)
  await m.reply(global.wait)   
  try {
    axios.get(`https://videfikri.com/api/ytplayv2/?query=${text}`)
    .then((res) => {
      imageToBase64(res.data.result.thumbnail)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `
*KLIK LINK FOR DOWNLOAD*               
            

*Title:* ${res.data.result.title}
*Size:* ${res.data.result.size}
*Durasi:* ${res.data.result.duration}
*Channel:* ${res.data.result.channel}
*Published:* ${res.data.result.published_on}
*Views:* ${res.data.result.views}
*Source:* ${res.data.result.source}
*Url:* ${res.data.result.url}
*Description:*
${res.data.result.description}

_Download Sendiri, Jangan Manja :v_

*SGDC-BOT*
`.trim()
     conn.sendFile(m.chat, res.data.result.thumbnail, 'SGDC-BOT.jpg', str, m)
        })
    })
   } catch (e) {
    m.reply('```Error```')
   }
}

handler.command = /^(ytplay|playmp3|play)$/i
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
