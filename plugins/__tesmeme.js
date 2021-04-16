let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let { MessageType } = require('@adiwajshing/baileys');
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.onlydev)
  try {
    await m.reply(global.wait)
    let res = await axios.get(`https://onlydevcity.herokuapp.com/api/mememaker3?teks=${text}&img_url=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVPHWMTO7jGoZP0QHiqlbODT9Gjxo1HnSug&usqp=CAU&apikey=${api}`)
          
          conn.sendMessage(m.chat, encodeURIComponent(res.data.result), MessageType.sticker, {
    quoted: m
  })     
  //  })
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
