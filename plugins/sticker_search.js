let axios = require("axios");
let { MessageType } = require('@adiwajshing/baileys');
let { sticker } = require('../lib/sticker');
let kntl = require("../src/kntl.json")
let handler = async(m, { conn, args, text }) => {
	let api = (kntl.xteam)
	if (!text) throw '_Masukkan Teks_'
//try {
    await m.reply(global.wait)
	axios.get(`https://api.xteam.xyz/sticker/stickerly?q=${text}&APIKEY=${api}`)
    .then ((res) => {
    	let stic = res.data.result.stickerlist
		let b = JSON.parse(JSON.stringify(stic.data));
		let img =  b[Math.floor(Math.random() * b.length)];
//let stiker = await sticker(img)  //, false, global.packname, global.author)
       conn.sendMessage(m.chat, img, MessageType.sticker, {
    quoted: m
        })
     }
   /*} catch (e) {
  	m.reply('```Error```')
  }*/
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
