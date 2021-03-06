let handler  = async (m, { conn, text }) => {
  let chats = conn.chats.all().filter(v => !v.read_only && v.message).map(v => v.jid)
  let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n\n*「 SGDC-BOT 」*')
  for (let id of chats) conn.copyNForward(id, content)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
}

handler.command = /^(broadcast|bc)$/i
handler.owner = true

handler.fail = null

module.exports = handler

/*
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
*/
