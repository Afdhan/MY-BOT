let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
	let api = (kntl.tbotkey)
	try {
            await m.reply(global.wait)
            axios.get(`https://xnxx-tbot.herokuapp.com/api/muslim/bacaanshalat?apikey=${api}`).then ((res) => {
                let out = `*「  BACAAN SHALAT  」*\n\n`
                for (let i = 0; i < res.data.result.length; i++) {
                    out += '─────────────────────\n'
                    out += '*○ ${res.data.result[i].name}*\n'
                    out += '*Arab:*\n${res.data.result[i].arabic}\n'
                    out += '*Latin:*\n${res.data.result[i].latin}\n\n'
                    out += '*Artinya:*\n${res.data.result[i].terjemahan}\n'
                }
                    out += '\n\n*SGDC-BOT*'
                 conn.reply(m.chat, out, m)
	})
    } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(doashalat|doasalat|doasolat|bacaanshalat|bacaansholat|bacaansolat)$/i
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
