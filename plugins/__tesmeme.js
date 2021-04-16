let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.onlydev)
  try {
    await m.reply(global.wait)
    axios.get(`https://onlydevcity.herokuapp.com/api/mememaker3?teks=${text}&img_url=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVPHWMTO7jGoZP0QHiqlbODT9Gjxo1HnSug&usqp=CAU&apikey=${api}`)
    .then((res) => {
    /*  imageToBase64(res.data.result)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')*/
            let str = `*SGDC-BOT*`
          conn.sendFile(m.chat, encodeURIComponent(res.data.result)), 'Nyenye_SGDC-BOT.png', str, m)
       // })
    })
      /* let triger = await fetch('https://some-random-api.ml/canvas/triggered?avatar=' + encodeURIComponent(anu.display_url));
       let img = await triger.buffer()
       let stiker = await sticker(img, false, global.packname, global.author)
       conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })*/
    } catch (e) {
  	m.reply('```Error```')
  }
}

handler.command = /^(smeme)$/i
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
