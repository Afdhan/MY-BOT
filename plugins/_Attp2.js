const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
const kntl = require("../src/kntl.json");
let handler  = async (m, { conn, text }) => {
	try {
   await m.reply(global.wait)
   let api = (kntl.lolkey)
   if (text) conn.sendFile(m.chat, 'http://lolhuman.herokuapp.com/api/attp?apikey='  + api + '&text=' + encodeURIComponent(text), 'attp.webp', '', m, false, { asSticker: true })
   else throw 'Teksnya mana mbah?'
   } catch (e) {
  	m.reply('```Error```')
  }
}

handler.command = /^(attp2)$/i
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
