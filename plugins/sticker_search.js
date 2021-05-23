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
        let res = await fetch(`https://api.xteam.xyz/sticker/stickerly?q=${text}&APIKEY=${api}`)
    	let stic = res.json()
        let tytyd = stic.result.stickerlist
	   for (let x of tytyd) {
        //let img = x[Math.floor(Math.random() * x.length)];
        let stiker = await sticker(false, x, global.packname, global.author)
       conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
        })
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
