let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler  = async (m, { conn, text }) => {
    let api = (kntl.zekskey)
    if (!text) return conn.reply(m.chat, '_Masukan Teks!_', m)
 try {
  await m.reply(global.wait)
  let bb = 'https://api.zeks.xyz/api/nulis?text=' + text + '&apikey=' + api;
   conn.sendFile(m.chat, bb, 'SGDC-BOT.png', '*SGDC-BOT*', m)
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