let axios = require("axios");
let MessageType = require("@adiwajshing/baileys")
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let chat = global.DATABASE.data.chats[m.chat]
    if (chat.nsfw) { 
    let api = (kntl.lolkey)
  	await m.reply(global.wait)
     let link = 'http://lolhuman.herokuapp.com/api/random/sagiri?apikey=' + api;
     conn.sendMessage(m.chat, link, MessageType.image, { quoted: m, caption: "*SGDC-BOT*" })
   } else {
        m.reply('```Perlu Mengaktifkan Mode NSFW```')
      }
    } 

handler.command = /^(sagiri|randomsagiri)$/i

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