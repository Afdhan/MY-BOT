let imgBB = require("imgbb-uploader");
let uploadImage = require('../lib/uploadImage');
let { uploader } = require('../lib/uploadimg');
let { sticker } = require('../lib/sticker');
let fetch = require('node-fetch');
let path = require('path');
let util = require('util');
let fs = require('fs');
let { MessageType } = require('@adiwajshing/baileys');
let handler = async (m, { conn, text, args, participants }) => {
	let [s1, s2] = text.split`|`
    if (!s1) return m.reply("Masukkan Username")
    if (!s2) return m.reply("Masukkan Comment")
   await m.reply(global.wait)
   let pp = './src/avatar_contact.png'
  try {
    pp = await conn.getProfilePicture(m.sender)
  } catch (e) {
        m.reply(`ERROR`)
  } finally {
  	  let link = await uploader(pp)
        let ytc = 'https://some-random-api.ml/canvas/youtube-comment?username=' + s1 + '&comment=' + s2 + '&avatar=' + pp + '&light=true'
        conn.sendMessage(m.chat, ytc, MessageType.image, { quoted: m, caption: "*SGDC-BOT*"})
        let tytyd = await sticker(false, ytc, global.packname, global.author)
        conn.sendMessage(m.chat, tytyd, MessageType.sticker, { quoted: m })
     }
}

handler.command = /^(ytc(omm?ent?)?)$/i

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
