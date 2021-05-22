let axios = require("axios");
let MessageType = require("@adiwajshing/baileys")
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.xteam)
 try {
   let [fx, xs] = text.split `|`
    if (!fx) return conn.reply(m.chat, '_Effect tidak boleh kosong!_', m)
    if (!xs) return conn.reply(m.chat, '_Silahkan masukan teks_', m)
    if (fx.length > 10) return conn.reply(m.chat, '_Teks1 Terlalu Panjang! Maksimal 10 huruf!_', m)
    if (xs.length > 10) return conn.reply(m.chat, '_Teks2 Terlalu Panjang! Maksimal 10 huruf!_', m)
    await m.reply(global.wait)
    let link = 'https://api.xteam.xyz/photooxy/' + fx + '?text=' + xs + '&APIKEY=' + api;
    conn.sendMessage(m.chat, link, MessageType.image, { quoted: m, caption: "*SGDC-BOT*" })
  } catch (e) {
   m.reply('```Error```')
  }
} 
handler.command = /^(photooxy)$/i
handler.premium = true

handler.fail = null


module.exports = handler


//   MUHAMMAD AFDHAN

