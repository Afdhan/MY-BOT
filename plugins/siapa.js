let handler = async (m, { conn, text }) => {

let member = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
let siapa = member[Math.floor(Math.random() * member.length)]
let jawab = `
_Siapa ${text}? Jawabannya si @${siapa.replace(/@.+/, '')}_
`.trim()
    let mentionedJid = [siapa]
    conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid }})
}

handler.command = /^siapa(kah)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
