let axios = require("axios");
let handler = async(m, { conn, text }) => {
	m.reply('```Kami Butuh Apikey Untuk Memperbaiki Fitur Ini!```')
          /*  if (!text) return conn.reply(m.chat, 'Apa Yang Mau Dicari?', m)
            
            await m.reply(global.wait)
            axios.get(`https://fzn-gaz.herokuapp.com/api/sfile?search=${text}`).then ((res) => {
                let sfiles = res.data
                let sfile = `*「 • 」 SFILE SEARCH 「 • 」*\n\n*Hasil Pencarian:* ${text}\n`
                for (let i = 0; i < sfiles.result.length; i++) {
                    sfile += `─────────────────\n• *Title:* ${sfiles.result[i].title}\n• *Size:* ${sfiles.result[i].size}\n• *Link:* ${sfiles.result[i].link}\n`
                }
		    sfile += '\n\n*「 • 」  SGDC-BOT  「 • 」*'
                 conn.reply(m.chat, sfile, m)
	})*/
}
handler.command = /^(sfile)$/i
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
