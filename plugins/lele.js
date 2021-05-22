let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
 await m.reply ('_Perintah Diterima!_')
 let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
  await conn.sendMessage(m.chat, `_Selamat Tinggal Semuanya :v_`, MessageType.extendedText, { contextInfo: { mentionedJid: users } })
 conn.groupLeave(m.chat)
}

handler.command = /^(leave|out)$/i
handler.owner = true
handler.group = true
handler.fail = null


module.exports = handler
