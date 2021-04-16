let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
 let api = (kntl.onlydev)
 if (!text) return conn.reply(m.chat, '_Masukkan Judul Video_', m)
  await m.reply(global.wait)   
  try {
    axios.get(`https://onlydevcity.herokuapp.com/api/ytplay?query=${text}&apikey=${api}`)
    .then((res) => {
      imageToBase64(res.data.result.thumb)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `
*KLIK LINK FOR DOWNLOAD*               
            

*Title:* ${res.data.result.title}
*Channel:* ${res.data.result.channel}
*Views:* ${res.data.result.views}
`.trim()
    let ytp = res.data.result
     for (let i = 0; i < ytp.video.length; i++) {
     str +=  `\n─────────────────\n*Quality:* ${ytp.video[i].quality}\n*Url:* ${ytp.video[i].url}\n`
     }
     str += '\n\n_Download Sendiri, Jangan Manja :v_\n\n*SGDC-BOT*'
     conn.sendFile(m.chat, buf, 'SGDC-BOT.jpg', str, m)
        })
    })
   } catch (e) {
    m.reply('```Error```')
   }
}

handler.command = /^(ytplaymp4|playmp4|mp4)$/i
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
