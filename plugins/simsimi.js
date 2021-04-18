let fetch = require('node-fetch')
let axios = require("axios");
let handler = async (m, { conn, text }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.simi) {
        let res = await fetch(`https://videfikri.com/api/simsimi/?teks=${text}`) ///.then ((res) => {
	let json = await res.json()
        let simih = json.result
        //if (simih.status == '200') {
	conn.reply(m.chat, simih.jawaban, m)
        //return false
        /*} else {
	m.reply('Ngomong Apa?') 
	}*/
     // })
  } else throw '*SIMI BELUM DIAKTIFKAN UNTUK CHAT INI!*'
}

handler.customPrefix = /^! /
//handler.command = new RegExp
handler.command = /(?:)/i


handler.fail = null

module.exports = handler
