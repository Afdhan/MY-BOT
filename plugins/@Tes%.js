let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, args, text }) => {
    //if(args[0].startsWith("08")) return m.reply("_Gunakan Kode Negara_")
    let txt
    if(args[0] == m.mentionedJid){
      txt = m.mentionedJid[0]
    }else{
      txt = text
    }
    if(!txt) return m.reply('_Masukan Nomor Telepon Atau Tag Orang Yang Akan Dispam Kode OTP OLX_')
    try {
    await m.reply(global.wait)
    let api = (kntl.xteam)
	axios.get(`https://api.xteam.xyz/spammer/olx?no=${txt}&APIKEY=${api}`)
	axios.get(`https://api.xteam.xyz/spammer/olx?no=${txt}&APIKEY=${api}`)
	axios.get(`https://api.xteam.xyz/spammer/olx?no=${txt}&APIKEY=${api}`)
	axios.get(`https://api.xteam.xyz/spammer/olx?no=${txt}&APIKEY=${api}`)
	axios.get(`https://api.xteam.xyz/spammer/olx?no=${txt}&APIKEY=${api}`)
	.then ((res) => {
	let hasil = '```SUCCESS SPAM OLX OTP CODE```\n\n*SGDC-BOT*'
        conn.reply(m.chat, hasil, m)
     })
   }catch(e){
   m.reply('```Error```')
   console.log (e)
   }
}

handler.command = /^(olx)$/i

handler.premium = true

module.exports = handler
