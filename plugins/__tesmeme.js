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
    let api = (kntl.onlydev)
    if(!text) m.reply('_Masukkan Teks!_')
    const type = Object.keys(m.message)[0]
    const content = JSON.stringify(m.message)
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
 try {
    await m.reply(global.wait)
    var imgBB = require('imgbb-uploader')
    if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
        ngntd = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
        media = await conn.downloadAndSaveMediaMessage(ngntd)
        anu = await imgBB("3ea1465ef91578a90ee81f7d41c59a1f", media)
            let url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVPHWMTO7jGoZP0QHiqlbODT9Gjxo1HnSug&usqp=CAU'
            let res = await axios.get(`https://onlydevcity.herokuapp.com/api/mememaker3?teks=${text}&img_url=${url}&apikey=${api}`)
    	    let ress = await imageToBase64(res.data.result)
            let buf = Buffer.from(ress, 'base64')
            let str = `*SGDC-BOT*`
          //conn.sendFile(m.chat, buf, 'Nyenye_SGDC-BOT.jpg', str, m)
       conn.sendMessage(m.chat, { url: res.data.result }, MessageType.image, { mimetype: "image/png",  caption: "*SGDC-BOT*" })
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
