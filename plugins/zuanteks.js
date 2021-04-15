let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.tbotkey)
if (!text) return conn.reply(m.chat, '_Masukan Teks!_', m)
    if (text.length > 10) return conn.reply(m.chat, '_Teks Terlalu Panjang! Maksimal 10 huruf!_', m)
 try {
    await m.reply(global.wait)
let link = 'https://tes-apime.herokuapp.com/api/textmaker/zuan?text=' + text + '&theme=zuan1&apikey=' + api;
conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*SGDC-BOT*', m)
   } catch (e) {
    m.reply('```Error```')
   }
}

handler.command = /^(zuan(teks|text)?)$/i

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