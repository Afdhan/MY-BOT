let axios = require("axios");
let handler = async(m, { conn, text }) => {
try {
let txt = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
    if (!txt) return conn.reply(m.chat, '_Host Nya Mana?_', m)
	axios.get(`https://api.banghasan.com/domain/hostsearch/${txt}`).then ((res) => {
	 	let hasil = `*Query:* ${res.data.query}\n*Host Hasil:*\n${res.data.hasil}\n\n*SGDC-BOT*`
    conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
		m.reply('```Error```')
    }
}

handler.command = /^(host(search)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
