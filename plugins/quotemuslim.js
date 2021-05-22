let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply(global.wait)
	axios.get(`https://xnxx-tbot.herokuapp.com/api/randomquote/muslim?apikey=tbot`).then ((res) => {
	 	
    conn.reply(m.chat, `${res.data.result.text_id}`, m)
	})
}

handler.command = /^(quotemuslim)$/i
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
