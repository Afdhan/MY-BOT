let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, args, text }) => {
    //if(args[0].startsWith("08")) return m.reply("_Gunakan Kode Negara_")
    /*let txt
    if(args[0] == m.mentionedJid){*/
    let tytyd = m.mentionedJid[0]
    let txt = tytyd.split("@s.whatsapp.net")[0]
    /*}else{
      txt = args[0]
    } */
    if(!txt) return m.reply('_Tag Orang Yang Akan Dispam Kode OTP OLX_')
    try {
    await m.reply(global.wait)
    let api = (kntl.xteam)
        await axios.get(`https://api.xteam.xyz/spammer/olx?no=${txt}&APIKEY=${api}`)
	await axios.get(`https://api.xteam.xyz/spammer/olx?no=${txt}&APIKEY=${api}`)
	await axios.get(`https://api.xteam.xyz/spammer/olx?no=${txt}&APIKEY=${api}`)
	await axios.get(`https://api.xteam.xyz/spammer/olx?no=${txt}&APIKEY=${api}`)
	await axios.get(`https://api.xteam.xyz/spammer/olx?no=${txt}&APIKEY=${api}`)
	.then ((res) => {
	let hasil = '```SUCCESS SPAM OLX OTP CODE```\n\n*SGDC-BOT*'
        if(res.data.result) conn.reply(m.chat, hasil, m)
        else throw 'Error'
     })
   }catch(e){
   m.reply('```Error```')
   console.log (e)
   }
}

handler.command = /^(olx)$/i

handler.premium = true

module.exports = handler