let axios = require("axios");
const kntl = require("../src/kntl.json");
let handler  = async (m, { conn, text }) => {
    let api = (kntl.zekskey)
 try {
  await m.reply(global.wait)
     axios.get(`https://api.zeks.xyz/api/nickepep?apikey=${api}`).then((res) => {
    let hasil = `${res.data.result}\n\n*SGDC-BOT*`
conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
   m.reply('```Error```')
  }
}
handler.command = /^(nickff|nickepep|nikepep|nikff)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler


// MUHAMMAD AFDHAN