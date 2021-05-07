let axios = require("axios");
let kntl = require("../src/kntl.json")
let handler = async(m, { conn, args, usedPrefix, text }) => {
  let api = (kntl.xteam)
//m.reply('```Kami Butuh Apikey Untuk Memperbaiki Fitur Ini!```')
 if(args.length == 0) return m.reply(`Cara Penggunaan Fitur Sfile Downloader, ${usedPrefix}sfiledl (ext) (url)\nContoh ${usedPrefix}sfiledl hc https://sfile.mobi/taikucing`)
 if(!args[0]) return m.reply('_Masukkan Extensi File!_')      
 if(!args[1]) return m.reply('_Masukkan Link Sfile!_')
   
  try {
    await m.reply(global.wait)
    axios.get(`https://api.xteam.xyz/dl/sfiledl?url=${args[1]}&APIKEY=${api}`).then ((res) => {
 await conn.reply(m.chat, `
*KLIK LINK FOR DOWNLOAD*

*Title:* ${res.data.result.title}
*Size:* ${res.data.result.size}
*Link:* ${res.data.result.downloadURL}

_Download Sendiri, Jangan Manja :v_

*SGDC-BOT*
`.trim(), m)
 /* if (res.data.size > '999.99 KB') {
	  m.reply('_File Anda Terlalu Besar! Silahkan Download Sendiri Melalui Link Yang Dikirim SGDC-BOT!_')
	  } else {*/
   let ext
   if(args[0] == 'hc') ext = 'hc'
   else if(args[0] == 'ehi' || args[0] == 'hi') ext = 'ehi'
   else if(args[0] == 'npv2') ext = 'npv2'
   else throw 'Ekstensi File Tidak Didukung'
   let bct = res.data.result.title
   let ajg = res.data.result.downloadURL
   conn.sendFile(m.chat, ajg, 'SGDC-BOT || ' + bct + ext, 'ini', m)
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
