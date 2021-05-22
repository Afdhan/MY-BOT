let axios = require("axios");
let util = require('util')
let MessageType = require("@adiwajshing/baileys")
let path = require('path')
let { spawn } = require('child_process')
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.xteam)
 if (!text) return m.reply('_Silahkan Masukan Teks!_')
 try {
 await m.reply(global.wait)
  let link = 'https://api.xteam.xyz/quotemaker?text=' + encodeURIComponent(text) + '&wm=SGDC-BOT&APIKEY=' + api;
conn.sendMessage(m.chat, link, MessageType.image, { quoted: m, caption: "*SGDC-BOT*" })
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
