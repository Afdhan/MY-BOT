let axios = require("axios");
let kntl = require("../src/kntl.json");
let MessageType = require("@adiwajshing/baileys")
let handler  = async (m, { conn, text }) => {
    let api = (kntl.zekskey)
    if (!text) return conn.reply(m.chat, '_Masukan Teks!_', m)
 try {
  await m.reply(global.wait)
  let link = 'https://api.zeks.xyz/api/nulis?text=' + text + '&apikey=' + api;
   conn.sendMessage(m.chat, link, MessageType.image, { quoted: m, caption: "*SGDC-BOT*" })
  } catch (e) {
   m.reply('```Error```')
  }
} 

handler.command = /^(nulis2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

//  MUHAMMAD AFDHAN
module.exports = handler