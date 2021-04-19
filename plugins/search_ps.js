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
      for (let i = 0; i < tytyd.result.length; i++) {
      	ppk += `─────────────────\n• *Title:* ${tytyd.result[i].title}\n• *AppId:* ${tytyd.result[i].appId}\n• *Developer:* ${tytyd.result[i].developer}\n• *Link:* ${tytyd.result[i].url}\n`
                }
          ppk += '\n\n*SGDC-BOT*'
                 conn.reply(m.chat, sfile, m)
	})
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
