let axios = require("axios");
let MessageType = require("@adiwajshing/baileys")
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.xteam)
  try {
   let chat = global.DATABASE.data.chats[m.chat]
   if (chat.nsfw) { 
   await m.reply(global.wait)
   let link = 'https://api.xteam.xyz/randomimage/hentai?APIKEY=' + api;
   conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*SGDC-BOT*', m)
    } else {
       m.reply('```Perlu Mengaktifkan Mode NSFW```')
    }
  } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(hentai)$/i
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