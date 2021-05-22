let axios = require("axios");
let handler = async(m, { conn, text }) => {

let txt = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
    if (!txt) return conn.reply(m.chat, 'Masukkan IP adress', m)
   try {
    await m.reply(global.wait)
	axios.get(`https://videfikri.com/api/iplookup/?ip=${txt}`).then ((res) => {
	 	let hasil = `
*WHOIS IP LOOKUP*
	
IP Adress: _${res.data.result.ip}_
City: _${res.data.result.city}_
Region: _${res.data.result.region}_
Region Name: _${res.data.result.region_name}_
Country: _${res.data.result.country}_
Country Code: _${res.data.result.country_code}_
Latitude: _${res.data.result.latitude}_
Longtitude: _${res.data.result.longtitude}_
TimeZone: _${res.data.result.timezone}_
ISP: _${res.data.result.isp}_
ORG: _${res.data.result.org}_
AS: _${res.data.result.as}_

*SGDC-BOT*
`.trim()

    conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(whois|iplokup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

//  MUHAMMAD AFDHAN
