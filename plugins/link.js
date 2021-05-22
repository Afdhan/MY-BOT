let handler = async (m, { conn, args }) => {
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + (await conn.groupInviteCode(m.chat)) + '\n\nJoin: https://t.me/SobatGretong\n\n*SGDC-BOT*', m)
}

handler.command = /^(linkgrup|linkgc|link|linkgroup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler

