let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
    if(!text) return m.reply('_Masukan Nomor Telepon Yang Akan Dispam Kode OTP PizzaHut')
    try {
    await m.reply(global.wait)
    let api = (kntl.xteam)
	axios.get(`https://api.xteam.xyz/spammer/pizzahut?no=${text}&APIKEY=${api}`).then ((res) => {
	let hasil = `${res.data.result}\n\n*SGDC-BOT*`
        conn.reply(m.chat, hasil, m)
     })
   }catch(e){
   m.reply('```Error```')
   console.log (e)
   }
}

handler.command = /^(pizzahut)$/i

handler.premium = true

module.exports = handler
