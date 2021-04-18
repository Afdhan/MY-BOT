let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, args }) => {
/*let user = global.DATABASE._data.users[m.sender]
if (user.prems) {*/
  let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
  conn.sendMessage(m.chat, args.join` `, MessageType.extendedText, { contextInfo: { mentionedJid: users } })
 // } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}
handler.command = /^(hidetag)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.limit = false
handler.exp = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

