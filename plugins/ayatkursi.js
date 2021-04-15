let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.tbotkey)
try {
    await m.reply(global.wait)
	axios.get(`https://xnxx-tbot.herokuapp.com/api/muslim/ayatkursi?apikey=${api}`).then ((res) => {
	 	let hasil = `
*AYAT KURSI*
	
*Arab:* 
${res.data.result.data.arabic}
*Latin:* 
${res.data.result.latin}
*Translation:*
${res.data.result.translation}

*Tafsir:*
${res.data.result.tafsir}


*SGDC-BOT*
`.trim()

    conn.reply(m.chat, hasil, m)
	})
    } catch (e) {
  	m.reply('```Error```')
  }
}

handler.command = /^(ayatkursi)$/i
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
