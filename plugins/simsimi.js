let fetch = require('node-fetch')
let axios = require("axios");
let kntl = require("../src/kntl.json")
let handler = async (m, { conn, text }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.simi) {
        let api = "B9IbhNbRGGlUUplsZCV1ihQrsyd"
        let apii = (kntl.zekskey)
        let res = await axios.get(`https://api.zeks.xyz/api/simi?apikey=${api}&text=${text}`) ///.then ((res) => {
	let json = res.data
	    ///await res.json()
        let simih = json.result
        //if (simih.status == '200') {
        //if (json.status) 
        m.reply('```' + simih + '```')
       // else throw "BOT TIDAK MENGERTI"
	//return false
        /*} else {
	m.reply('Ngomong Apa?') 
	}*/
     // })
  } else throw '*SIMI BELUM DIAKTIFKAN UNTUK CHAT INI!*'
}

//handler.customPrefix = /^tod/
//handler.command = new RegExp
handler.command = /^(!)$/i

module.exports = handler
