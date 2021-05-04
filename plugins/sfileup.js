let axios = require("axios");
let handler = async(m, { conn, text }) => {
	m.reply('```Kami Butuh Apikey Untuk Memperbaiki Fitur Ini!```')
	/*   try {
            await m.reply(global.wait)
            axios.get(`https://fzn-gaz.herokuapp.com/api/sfileup`).then ((res) => {
                let sfiles = res.data
                let sfile = `*「 • 」 SFILE LATEST UPLOAD 「 • 」*\n\n`
                for (let i = 0; i < sfiles.result.length; i++) {
                    sfile += `*─────────────────*\n~> *Title:* ${sfiles.result[i].title}\n~> *Link:* ${sfiles.result[i].link}\n`
                }
		            sfile += '\n\n*「 • 」  SGDC-BOT  「 • 」*'
                 conn.reply(m.chat, sfile, m)
	})
   } catch (e) {
       m.reply('```Error```')
  }*/
}
handler.command = /^(sfileup)$/i
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
