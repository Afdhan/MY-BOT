let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    else global.DATABASE._data.chats.sWelcome = text
    m.reply(`Welcome berhasil diatur menjadi:\n ${text}\n\nInfo:\n@user > (Mention)\n@subject > (Judul Grup)`)
  } else throw 'Teksnya mana?'
}


handler.command = /^setwelcome$/i
handler.owner = true
handler.mods = true
handler.premium = false
handler.group = true
handler.admin = true

module.exports = handler

