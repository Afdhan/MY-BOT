let fetch = require('node-fetch')
let axios = require("axios");
let kntl = require("../src/kntl.json")
let handler = async (m, { conn, text }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.simi) {
        let api = (kntl.zekskey)
        let res = await fetch(`https://api.zeks.xyz/api/simi?apikey=${api}&text=${text}`) ///.then ((res) => {
	let json = await res.json()
        let simih = json.result
        //if (simih.status == '200') {
        //if (json.status) 
	conn.reply(m.chat, simih, m)
       // else throw "BOT TIDAK MENGERTI"
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
