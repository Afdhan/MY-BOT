let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
	let api = (kntl.tbotkey)
    try{
            await m.reply(global.wait)
            axios.get(`https://xnxx-tbot.herokuapp.com/api/muslim/asmaulhusna?apikey=${api}`).then ((res) => {
                let doa = res.data.result
                let out = `*「  • ASMA'UL HUSNA •  」*\n\n`
                for (let i = 0; i < doa.data.length; i++) {
                    out += `\n─────────────────────\n\n*• Nomor:* ${doa.data[i].index}\n*• Latin:* ${doa.data[i].latin}\n*• Arab:* ${doa.data[i].arabic}\n*• Arti:* ${doa.data[i].translation_id}\n`
                }
                    out += '\n\n*SGDC-BOT*'
                 conn.reply(m.chat, out, m)
	})
    } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(asmaulhusna)$/i
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
