let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let path = require("path")
let util = require("util")
let fetch = require('node-fetch');
let { MessageType } = require('@adiwajshing/baileys');
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, args, text }) => {
let api = (kntl.onlydev)
  try {
    await m.reply(global.wait)
          let api = (kntl.onlydev)
          let url = 'https://i.ibb.co/1T1DCz7/cewek-thailand-20200325-007-non-fotografer-kly.jpg'
          let res = await axios.get(`https://onlydevcity.herokuapp.com/api/mememaker3?teks=${text}&img_url=${url}&apikey=${api}`)
    	    let ress = await fetch(res.data.result);
            //let buf = Buffer.from(ress, 'base64')
          let str = `*SGDC-BOT*`
          conn.sendFile(m.chat, ress, 'Nyenye_SGDC-BOT.jpg', str, m)
    
    //let res = await axios.get(`https://onlydevcity.herokuapp.com/api/mememaker3?teks=${text}&img_url=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVPHWMTO7jGoZP0QHiqlbODT9Gjxo1HnSug&usqp=CAU&apikey=${api}`)
          
        / conn.sendMessage(m.chat, ress, MessageType.sticker, {
    quoted: m
  })     
  //  })
    } catch (e) {
  	m.reply('```Error```')
  }
}

handler.command = /^(smeme)$/i
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
