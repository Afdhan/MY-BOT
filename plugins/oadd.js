let handler = async (m, { conn, text }) => {
  let users = text.split`,`.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v.length > 20)
  await conn.groupAdd(m.chat, users)
  m.reply('_Berhasil Menambahkan Beliau!_')
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
