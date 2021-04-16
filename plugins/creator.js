let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
  let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
  conn.sendMessage(m.chat, '6282252655313', 'Owner SGDC-BOT' MessageType.contact, m, { contextInfo: { mentionedJid: users } })
m.reply('wa.me/6282252655313')
}

handler.command = /^(owner|creator)$/i

handler.fail = null

module.exports = handler
