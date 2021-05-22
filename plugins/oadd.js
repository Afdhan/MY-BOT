let handler = async (m, { conn, text }) => {
  let users = text.split`,`.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v.length > 20)
  try{
  await conn.groupAdd(m.chat, users)
  conn.reply(m.chat, `_Berhasil Menambahkan @${users.split("@")[0]}!_`, m, { contextInfo: { mentionedJid: [users]}})  
  }catch(e){
  	m.reply("Gagal! Mungkin Di Private")
  }
}

handler.command = /^(oadd|o\+)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler
