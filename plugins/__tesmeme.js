let imgBB = require("imgbb-uploader");
let imageToBase64 = require('image-to-base64');
let { sticker } = require('../lib/sticker');
let { MessageType } = require('@adiwajshing/baileys');
let { spawn } = require('child_process');
let FormData = require('form-data');
let fetch = require('node-fetch');
let path = require('path');
let util = require('util');
let fs = require('fs');
let kntl = require("../src/kntl.json")
let axios = require("axios");
let handler = async(m, { conn, text, args, bot, command }) => {
    let api = (kntl.lolkey)
    let [txt1, txt2] = text.split("|")
    if(!txt1) return m.reply('_Masukkan Teks Satu!_')
    if(!txt2) return m.reply('_Masukkan Teks Dua!_')
    const type = Object.keys(m.message)[0]
    const content = JSON.stringify(m.message)
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
   try {
    var imgBB = require('imgbb-uploader')
       if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
        //await m.reply(global.wait)
        ngntd = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
        await m.reply(global.wait)
        media = await conn.downloadAndSaveMediaMessage(ngntd)
        anu = await imgBB("3ea1465ef91578a90ee81f7d41c59a1f", media)
        //txt1 = text.split("|")[0];
        //txt2 = text.split("|")[1];
           /*let [txt1, txt2] = text.split`|`
           if(!txt1) return m.reply('_Masukkan Teks Satu!_')
           if(!txt2) return m.reply('_Masukkan Teks Dua!_')*/
        // let txt1 = 'SGDC-TEAM'
        // let txt2 = 'SGDC-BOT'
         //anu.display_url
         let url = 'https://static.wikia.nocookie.net/dogelore/images/9/97/Doge.jpg/revision/latest/top-crop/width/360/height/450?cb=20190205113053'
        //let link = 'https://api.lolhuman.xyz/api/memegen?apikey=' + api + '&texttop=' + txt1 + '&textbottom=' + txt2 + '&img=' + anu.display_url;
        let meme = await fetch('https://api.lolhuman.xyz/api/memegen?apikey=' + api + '&texttop=' + txt1 + '&textbottom=' + txt2 + '&img=' + encodeURIComponent(anu.display_url));
        let img = await meme.buffer()
        let stiker = await sticker(img, false, global.packname, global.author)
        //conn.sendFile(m.chat, link, 'SGDC-BOT.jpg', "*SGDC-BOT*", m)
    	 conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
       } else {
        m.reply('Ada Yang Error! Mungkin Media Tidak Ditemukan')
        }
    } catch (e) {
  	m.reply('```Error```')
    console.log(e)
  }
}

handler.command = /^(spictmeme|memem)$/i
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
