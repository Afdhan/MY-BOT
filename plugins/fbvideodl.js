let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
	m.reply('```Kami Butuh Apikey Untuk Memperbaiki Fitur Ini!```')
/* if (!text) return conn.reply(m.chat, '_Masukkan Link Video Facebook!_', m)
try { 
  await m.reply(global.wait)
    axios.get(`https://fzn-gaz.herokuapp.com/api/fbdl?url=${text}`)
    .then((res) => {
      imageToBase64(res.data.thumb)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `
*KLIK LINK FOR DOWNLOAD*               
            
*Kualitas HD:* 
${res.data.kualitasHD}

*Kualitas SD:* 
${res.data.kualitasSD}


_Download Sendiri, Jangan Manja :v_
_KALAU GAK ERROR, VIDEO LANGSUNG DIKIRIM!_

*SGDC-BOT*
`.trim()
       conn.reply(m.chat, str, m)
       conn.sendFile(m.chat, res.data.kualitasSD, 'SGDC_BOT.mp4', '*SGDC-BOT*', m)
        })
    })
 } catch (e) {
   m.reply('```Error```')
  }*/
}

handler.command = /^(fbdl)$/i
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
