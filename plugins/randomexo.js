let axios = require("axios");
let MessageType = require("@adiwajshing/baileys")
let kntl = require("../src/kntl.json");
let handler  = async (m, { conn, text }) => {
  let api = (kntl.lolkey)
  try {
  	await m.reply(global.wait)
      let link = 'http://lolhuman.herokuapp.com/api/random/exo?apikey=' + api;
     conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*SGDC-BOT*', m)
   } catch (e) {
   m.reply('```Error```')
  }
} 

handler.command = /^(exo|randomexo)$/i

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
