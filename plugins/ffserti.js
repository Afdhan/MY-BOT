let { sticker } = require('../lib/sticker');
let { MessageType } = require('@adiwajshing/baileys');
let { spawn } = require('child_process');
let axios = require("axios");
let path = require('path');
let util = require('util');
let handler = async(m, { conn, text }) => {
 try {
    if (!text) return conn.reply(m.chat, '_Masukan Nama!_', m)
    if (text.length > 15) return conn.reply(m.chat, '_Teks Terlalu Panjang! Maksimal 15 huruf!_', m)
   await m.reply(global.wait)
   let link = 'https://onlydevcity.xyz/FFSerti/img.php?nama=' + text;
   conn.sendFile(m.chat, link, 'SGDC-BOT.jpeg', '*SGDC-BOT*', m)
  
   let tytyd = 'https://onlydevcity.xyz/FFSerti/img.php?nama=' + encodeURIComponent(text));
   let img = await tytyd.buffer()
   let stiker = await sticker(img, false, global.packname, global.author)
       conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
   } catch (e) {
   m.reply('```Error```')
    console.log(e)
  }
}

handler.command = /^(ffserti)$/i
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
