let imgBB = require("imgbb-uploader");
let { sticker } = require('../lib/sticker');
let fetch = require('node-fetch');
let path = require('path');
let axios = require("axios");
let util = require('util');
let fs = require('fs');
let { MessageType } = require('@adiwajshing/baileys');
let handler = async (m, { conn, text, args, participants }) => {
	const type = Object.keys(m.message)[0]
    const content = JSON.stringify(m.message)
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
let [s1, s2] = text.split`|`
if (!s1) return m.reply("Masukkan Username")
if (!s2) return m.reply("Masukkan Comment")

   let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
   let media = await conn.getProfilePicture(who)
   let res = await axios.get(media)
   let image = res.data
   let anu = await imgBB("3ea1465ef91578a90ee81f7d41c59a1f", image)
   let pict = `${anu.display_url}`
   let ytc = 'https://some-random-api.ml/canvas/youtube-comment?username=' + s1 + '&comment=' + s2 + '&avatar=' + pict + '&light=true'
        conn.sendMessage(m.chat, ytc, MessageType.image, { quoted: m, caption: "*SGDC-BOT*" } )
 try {
   let yt = await fetch('https://some-random-api.ml/canvas/youtube-comment?username=' + s1 + '&comment=' + s2 + '&avatar=' + encodeURIComponent(anu.display_url) + '&light=true')
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
