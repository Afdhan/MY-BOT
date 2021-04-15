let imgBB = require("imgbb-uploader");
let { sticker } = require('../lib/sticker');
let { MessageType } = require('@adiwajshing/baileys');
let { spawn } = require('child_process');
let FormData = require('form-data');
let fetch = require('node-fetch');
let path = require('path');
let util = require('util');
let fs = require('fs');
let axios = require("axios");
let handler = async(m, { conn, text, args, bot, command }) => {
    await m.reply(global.wait)
    const type = Object.keys(m.message)[0]
    const content = JSON.stringify(m.message)
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
  try {
    var imgBB = require('imgbb-uploader')
    if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
        ngntd = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
        media = await conn.downloadAndSaveMediaMessage(ngntd)
        anu = await imgBB("3ea1465ef91578a90ee81f7d41c59a1f", media)
       let triger = await fetch('https://some-random-api.ml/canvas/triggered?avatar=' + encodeURIComponent(anu.display_url));
       let img = await triger.buffer()
       let stiker = await sticker(img, false, global.packname, global.author)
       conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
        } else {
        m.reply('_Reply Fotonya!_')
        }
    } catch (e) {
   m.reply('```Error```')
   // throw e
 }
}

handler.command = /^(tg|triger(red)?|triggered)$/i

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
