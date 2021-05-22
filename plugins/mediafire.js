let axios = require("axios");
let handler = async(m, { conn, text }) => {
try {
    if (!text) return conn.reply(m.chat, 'Silahkan masukan link mediafire', m)
    await m.reply(global.wait)
    axios.get(`https://videfikri.com/api/mediafire/?query=${text}`).then((res) => {
	let hasil = `
FileName: ${res.data.result.filename}
Size: ${res.data.result.size}
Upload: ${res.data.result.uploaded_on}
Download: ${res.data.result.download}

_Download sendiri, jangan manja:v_

_Kalau Gak Error,_
_File Nya Langsung Dikirim_

*SGDC-BOT*
`.trim()
m.reply(hasil)	
conn.sendFile(m.chat, res.data.result.download, `${res.data.result.filename}`, m)
   })
  } catch (e) {
   m.reply('```Error```')
  }
}
handler.command = /^(mediafire(dl)?)$/i
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
