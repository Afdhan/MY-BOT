let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
  let users1 = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
  let users2 = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
  if (!m.isGroup) {
    await conn.sendContact(m.chat, '6282252655313', 'Owner SGDC-BOT', m)
    conn.sendContact(m.chat, '6283129011845', 'Co-Owner SGDC-BOT', m)
  } else {
  await conn.sendContact(m.chat, '6282252655313', 'Owner SGDC-BOT', m, { contextInfo: { mentionedJid: users1 } })
  conn.sendContact(m.chat, '6283129011845', 'Co-Owner SGDC-BOT', m, { contextInfo: { mentionedJid: users2 } })
}

handler.command = /^(owner|creator)$/i

handler.fail = null

module.exports = handler
