let axios = require("axios");
let kntl = require("../src/kntl.json")
let handler = async(m, { conn, text }) => {
      if (!text) return conn.reply(m.chat, '_Mau Cari Apa Tod?_', m)
      let api = (kntl.onlydev)
      await m.reply(global.wait)
  try {
  	axios.get(`https://onlydevcity.herokuapp.com/api/googleplay?q=${text}&apikey=${api}`).then ((res) => {
  	let tytyd = res.data.result.data
        let ppk = `*「  PLAYSTORE SEARCH  」*\n\n`
        for (let i = 0; i < res.data.result.data.result.length; i++) {
      	ppk += `─────────────────\n• *Title:* ${res.data.result.data.result[i].title}\n• *AppId:* ${res.data.result.data.result[i].appId}\n• *Developer:* ${res.data.result.data.result[i].developer}\n• *Link:* ${res.data.result.data.result[i].url}\n`
                }
        ppk += '\n\n*SGDC-BOT*'
                 conn.reply(m.chat, sfile, m)
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
