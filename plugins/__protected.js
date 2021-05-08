let imgBB = require("imgbb-uploader");
let uploadImage = require('../lib/uploadImage')
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
       let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
       let pp = await conn.getProfilePicture(who)
       let link = await uploadImage(pp)
       let ytc = 'https://some-random-api.ml/canvas/youtube-comment?username=' + s1 + '&comment=' + s2 + '&avatar=' + link + '&light=true'
        conn.sendMessage(m.chat, ytc, MessageType.image, { quoted: m, caption: "*SGDC-BOT*" } )
 try {
   let yt = await fetch('https://some-random-api.ml/canvas/youtube-comment?username=' + s1 + '&comment=' + s2 + '&avatar=' + encodeURIComponent(link) + '&light=true')
   let img = await yt.buffer()
   let stiker = await sticker(img, false, global.packname, global.author)
       conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
  } catch (e) {
    m.reply('```Error Mengonversi Sticker```')
   // throw e
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
