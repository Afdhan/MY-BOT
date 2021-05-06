let axios = require("axios");
let kntl = require("../src/kntl.json")
let handler = async(m, { conn, text }) => {
      if (!text) return conn.reply(m.chat, '_Mau Cari Apa Tod?_', m)
      let api = (kntl.zekskey)
      await m.reply(global.wait)
  try {
  	axios.get(`https://api.zeks.xyz/api/sgplay?apikey=${api}&q=${text}`).then ((res) => {
  	let tytyd = res.data.result
        let ppk = `*「  PLAYSTORE SEARCH  」*\n\n`
        for (let i = 0; i < tytyd.length; i++) {
      	ppk += `─────────────────\n• *Title:* ${tytyd[i].title}\n• *AppId:* ${tytyd[i].appid}\n• *Developer:* ${tytyd[i].developer}\n• *Link:* ${tytyd[i].url}\n`
                }
        ppk += '\n\n*SGDC-BOT*'
                 conn.reply(m.chat, ppk, m)
	})
    } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(playstore|ps)$/i
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
