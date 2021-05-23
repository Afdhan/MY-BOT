let axios = require("axios");
let handler = async(m, { conn, text }) => {
try {
    await m.reply(global.wait)
	axios.get(`https://videfikri.com/api/randquran/`).then ((res) => {
	 	let hasil = `
*Random AL-QUR'AN*
	
Nama Surah: ${res.data.result.name}
Nomor: ${res.data.result.nomor}
Ayat: ${res.data.result.ayat}
Asma: ${res.data.result.asma}
Tipe: ${res.data.result.tipe}
No Urut: ${res.data.result.no_urut}
Rukuk: ${res.data.result.rukuk}
Arti: ${res.data.result.arti}
Keterangan: ${res.data.result.keterangan}

SGDC-BOT
`.trim()
    conn.reply(m.chat, hasil, m)
	})
   } catch (e) {
   m.reply('```Error```')
  }
} 

handler.command = /^(random)?quran$/i
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
