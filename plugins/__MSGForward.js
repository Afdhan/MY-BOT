
let handler = async(m, { conn, text }) => {
let txt = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted : m.fromMe ? conn.user.jid : m.quoted
let memek = who.split("@s.whatsapp.net")[0]

//const messages = await conn.loadConversation ('1234@s.whatsapp.net', 1)
//const message = messages[0] // get the last message from this conversation

await conn.forwardMessage(memek + '@s.whatsapp.net', txt) // WA forward the message!

}
handler.command = /^forward$/i
handler.rowner = true

handler.fail = null

module.exports = handler


