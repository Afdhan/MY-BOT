let axios = require("axios");
let kntl = require("../src/kntl.json")
let handler = async(m, { conn, text }) => {
  let api = (kntl.xteam)
//m.reply('```Kami Butuh Apikey Untuk Memperbaiki Fitur Ini!```')
  try {
    if (!text) return conn.reply(m.chat, 'Masukkan Link!', m)
    await m.reply(global.wait)
    axios.get(`https://api.xteam.xyz/dl/sfiledl?url=${text}&APIKEY=${api}`).then ((res) => {
 m.reply(`
*KLIK LINK FOR DOWNLOAD*

*Title:* ${res.data.result.title}
*Size:* ${res.data.result.size}
*Link:* ${res.data.result.downloadURL}

_Download Sendiri, Jangan Manja :v_

*SGDC-BOT*
`.trim())
 /* if (res.data.size > '999.99 KB') {
	  m.reply('_File Anda Terlalu Besar! Silahkan Download Sendiri Melalui Link Yang Dikirim SGDC-BOT!_')
	  } else {*/
   let bct = res.data.result.title
   let ajg = res.data.result.downloadURL
   conn.sendFile(m.chat, ajg, 'SGDC-BOT || ' + bct, 'ini', m)
		  //}
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
