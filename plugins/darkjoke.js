let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let MessageType = require("@adiwajshing/baileys")
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.zekskey)
  try {
    await m.reply(global.wait)
    axios.get(`https://api.zeks.xyz/api/darkjokes?apikey=${api}`)
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `Ini Darkk ?`

     conn.sendFile(m.chat, buf, 'SGDC-BOT.png', '*SGDC-BOT*', m)
        })
    })
    } catch (e) {
  	m.reply('```Error```')
  }
}

handler.command = /^(darkjoke(s)?)$/i
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