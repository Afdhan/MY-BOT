let fetch = require('node-fetch')
let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler  = async (m, { conn, args, text }) => {
let chat = global.DATABASE.data.chats[m.chat]
    if (chat.nsfw) { 
    let api = (kntl.lolkey)
    if (args.length == 0) return conn.reply(m.chat, `Untuk menggunakan *${usedPrefix}anime*\nSilahkan ketik: *${usedPrefix}anime* [Query]\nContoh: *${usedPrefix}nsfw random*\n\n*List Query:*\n_> blowjob_\n_> trap_\n_> neko_\n_> loli_\n_> waifu_`, m)
    if (args[0] == 'random' || args[0] == 'blowjob' || args[0] == 'trap' || args[0] == 'loli' || args[0] == 'waifu' || args[0] == 'neko') {
   await m.reply(global.wait)
      let nsfw = 'http://lolhuman.herokuapp.com/api/random/nsfw/' + args[0] + '?apikey=' + api;
      conn.sendFile(m.chat, nsfw, 'SGDC-NSFW.jpg', 'Jangan Colay:v', m)
      }
    } else {
         m.reply('```Perlu Mengaktifkan Mode NSFW```')
    }
  } 
handler.command = /^(nsfw)$/i
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
