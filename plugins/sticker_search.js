let axios = require("axios");
let { MessageType } = require('@adiwajshing/baileys');
let { sticker } = require('../lib/sticker');
let kntl = require("../src/kntl.json")
let handler = async(m, { conn, args, text }) => {
	let api = (kntl.xteam)
	if (!text) throw '_Masukkan Teks_'
//try {
    await m.reply(global.wait)
        let res = await axios.get(`https://api.xteam.xyz/sticker/stickerly?q=${text}&APIKEY=${api}`)
    	let stic = res.data.result
//let b = stic.data  //JSON.parse(JSON.stringify(stic.data));
	for (let i = 0; i < stic.stickerlist.length; i++) {
        let stk = stic.stickerlist[i]
        let img =  stk[Math.floor(Math.random() * stk.length)];
        let stiker = await sticker(img)  //, false, global.packname, global.author)
//conn.reply(m.chat, b, m)
       conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
        })
     }
   /*} catch (e) {
  	m.reply('```Error```')*/
 /* }
}*/
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
