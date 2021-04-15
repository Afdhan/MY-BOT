let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupMakeAdmin(m.chat, users)
  conn.reply(m.chat, '*_Berhasil Menambahkan Beliau Sebagai Admin!_*', m)
}

handler.command = /^(opromote)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler
