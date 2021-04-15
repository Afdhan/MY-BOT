let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.tbotkey)
   try{
        let [nm, no] = text.split `|`
        if (!nm) return conn.reply(m.chat, '_Masukkan Nama Perawi Hadist_', m)
        if (!no) return conn.reply(m.chat, '_Masukkan Nomor Hadist_', m)
        await m.reply(global.wait)
        axios.get(`https://xnxx-tbot.herokuapp.com/api/hadits?kitab=${nm}&nomor=${no}&apikey=${api}`).then ((res) => {
	let hasil = `
*Hadist Shahih*
	
*${res.data.result.message}*

*Arab:*
${res.data.result.data.contents.arab}

*Translation:*
${res.data.result.data.contents.id}


*SGDC-BOT*
`.trim()
   conn.reply(m.chat, hasil, m)
	})
     } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(hadist(shahih)?)$/i
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
