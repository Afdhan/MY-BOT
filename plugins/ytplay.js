let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
 if (!text) return conn.reply(m.chat, '_Masukkan Judul Video_', m)
  await m.reply(global.wait)   

    axios.get(`https://onlydevcity.herokuapp.com/api/ytplay?query=${text}&apikey=Nezavpn`)
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

res.data.result.video.data
_Download Sendiri, Jangan Manja :v_

`.trim()
    let ytp = res.data.result
     for (let i = 0; i < ytp.video.data.length; i++) {
     str +=  `${ytp.video.data[i].url}`
     }
     conn.sendFile(m.chat, buf, 'SGDC-BOT.jpg', str, m)
        })
    })
  /* } catch (e) {
    m.reply('```Error```')
   }*/
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
