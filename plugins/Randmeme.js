let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let kntl = require("../src/kntl.json")
let handler = async(m, { conn, text }) => {
	let api = (kntl.onlydev)
	await m.reply(global.wait)
try {
    axios.get(`https://onlydevcity.herokuapp.com/api/random/meme?apikey=${api}`)
    .then((res) => {
      imageToBase64(res.data.result.url)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            conn.sendFile(m.chat, buf, 'SGDC-BOT.jpg', '*SGDC-BOT*', m)
        })
    })
  } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(randmeme)$/i
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