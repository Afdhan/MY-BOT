let handler = async (m, { conn, args }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])
}

handler.command = new RegExp
handler.customPrefix = /(Kill|kill|ulti|Ulti)/i
handler.owner = true

handler.fail = null

module.exports = handler
