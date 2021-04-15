let axios = require("axios");
let handler = async(m, { conn, text }) => {
 try {
    await m.reply(global.wait)
    axios.get(`https://videfikri.com/api/covidindo/`).then((res) => {
    let hasil = `
*Country:* _${res.data.result.country}_
*Positif:* _${res.data.result.positif}_
*Sembuh:* _${res.data.result.sembuh}_
*Meninggal:* _${res.data.result.meninggal}_
*Dirawat:* _${res.data.result.dalam_perawatan}_

*SGDC-BOT*
`.trim()
conn.reply(m.chat, hasil, m)
    })
    } catch (e) {
  	m.reply('```Error```')
  }
}

handler.command = /^(infocovid|covid|covidindo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

//   MUHAMMAD AFDHAN