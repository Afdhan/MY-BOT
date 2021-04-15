let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
	let api = (kntl.tbotkey)
    try{
            await m.reply(global.wait)
            axios.get(`https://xnxx-tbot.herokuapp.com/api/muslim/wirid?apikey=${api}`).then ((res) => {
                let doa = res.data.result
                let out = `*「  DO'A WIRID  」*\n\n`
                for (let i = 0; i < doa.data.length; i++) {
                    out += `─────────────────────\n${doa.data[i].arabic}\n*Keterangan:*\n_${doa.data[i].tnc}_\n`
                }
                    out += '\n\n*SGDC-BOT*'
                 conn.reply(m.chat, out, m)
	})
    } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(doawirid)$/i
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
