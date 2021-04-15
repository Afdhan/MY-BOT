let axios = require("axios");
let util = require('util')
let path = require('path')
let { spawn } = require('child_process')
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.xteam)
 if (!text) return conn.reply(m.chat, '_Silahkan Masukan Teks!_', m)
 try {
 await m.reply(global.wait)
  let quot = 'https://api.xteam.xyz/quotemaker?text=' + text + '&wm=SGDC-BOT&APIKEY=' + api;
conn.sendFile(m.chat, quot, 'SGDC-BOT.jpg', '*SGDC-BOT*', m)
   } catch (e) {
   m.reply('```Error```')
  }
} 

handler.command = /^(quote(maker)?)$/i
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
