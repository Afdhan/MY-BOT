let axios = require("axios");
let MessageType = require("@adiwajshing/baileys")
let kntl = require("../src/kntl.json");
let handler  = async (m, { conn, text }) => {
 try {
   let api = (kntl.lolkey)
   await m.reply(global.wait)
   if (!text) return conn.reply(m.chat, '_Masukan Teks!_', m)
   let link = 'http://lolhuman.herokuapp.com/api/gimage?apikey=' + api + '&query=' + encodeURIComponent(text);
  conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*SGDC-BOT*', m)
   } catch (e) {
   m.reply('```Error```')
  }
}
handler.command = /^(gimage)$/i
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