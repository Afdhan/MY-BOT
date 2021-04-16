let axios = require("axios");
let handler = async(m, { conn, text }) => {
  try {
    if (!text) return conn.reply(m.chat, 'Masukkan Link!', m)
    await m.reply(global.wait)
	axios.get(`https://fzn-gaz.herokuapp.com/api/sfiledl?url=${text}`).then ((res) => {
m.reply(`
*KLIK LINK FOR DOWNLOAD*

*Title:* ${res.data.title}
*Size:* ${res.data.size}
*Link:* ${res.data.result}

_Download Sendiri, Jangan Manja :v_

_Sfile Downloader Sekarang Tidak Mengirimkan File!_

*SGDC-BOT*
`.trim())
  /*if (res.data.size > '999.99 KB') {
	  m.reply('_File Anda Terlalu Besar! Silahkan Download Sendiri Melalui Link Yang Dikirim SGDC-BOT!_')
	  } else {
   //conn.sendFile(m.chat, res.data.result, `${res.data.title}`, m)
		  }*/
	})
 } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(sfiledl)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
