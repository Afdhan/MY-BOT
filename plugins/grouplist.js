let handler = async (m, { conn }) => {
  let txt = conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v =>`${conn.getName(v.jid)}\n${v.jid} -> ${v.read_only ? 'Keluar' : 'Gabung'}`).join`\n\n`
  conn.reply(m.chat, 'List Groups:\n' + txt + '\n\n\n*SGDC-BOT*', m)
}

handler.command = /^(list(gc)?(grup)?|group(s|list))$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

