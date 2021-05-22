let fetch = require('node-fetch')
let axios = require("axios");
let kntl = require("../src/kntl.json")
let handler = async (m, { conn, text }) => {
let chat = global.DATABASE.data.chats[m.chat]
try {
    if (chat.simi) {
        let api = (kntl.zekskey)
        let res = await axios.get(`https://api.zeks.xyz/api/simi?apikey=${api}&text=${text}`)
	    let json = res.data
	    let simih = json.result
        m.reply('```' + simih + '```')
    } else {
    m.reply('SIMI BELUM DIAKTIFKAN UNTUK CHAT INI!')
    }
  }catch(e){
    m.reply('```Ngomong apa?```')
	  console.log(e)
    }
}

handler.command = /^(!)$/i

module.exports = handler
