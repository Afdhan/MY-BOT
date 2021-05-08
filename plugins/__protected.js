let imgBB = require("imgbb-uploader");
let { sticker } = require('../lib/sticker');
let fetch = require('node-fetch');
let path = require('path');
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
   var imgBB = require('imgbb-uploader')
    if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
        ngntd = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
        media = await conn.downloadAndSaveMediaMessage(ngntd)
        anu = await imgBB("3ea1465ef91578a90ee81f7d41c59a1f", media)       
       let ytc = 'https://some-random-api.ml/canvas/youtube-comment?username=' + s1 + '&comment=' + s2 + '&avatar=' + anu.display_url + '&light=true'
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
