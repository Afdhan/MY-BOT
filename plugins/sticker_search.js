let axios = require("axios");
let { MessageType } = require('@adiwajshing/baileys');
let { sticker } = require('../lib/sticker');
let kntl = require("../src/kntl.json")
let fetch = require("node-fetch")
let handler = async(m, { conn, args, text }) => {
	let api = (kntl.xteam)
	if (!text) throw '_Masukkan Teks_'
try {
    await m.reply(global.wait)
        let res = await fetch(`https://api.lolhuman.xyz/api/stickerwa?apikey=761e676c13e7710a48011b2b&query=${text}`)
    	let stic = res.json()
        let tytyd = stic.result
        for (let i = 0; i < tytyd.length; i++) {
               tytyd = tytyd[i].stickers
	   for (var x of tytyd) {
        let img = x[Math.floor(Math.random() * x.length)]
        let stiker = await sticker(false, img, global.packname, global.author)
       conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
        })
  }
}
   } catch (e) {
	   console.log (e)
  	m.reply('```Error```')
  }
}
handler.command = /^(stickersearch|ssearch)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

//  MUHAMMAD AFDHAN
