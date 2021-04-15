let handler = async (m, { conn, text }) => {
  let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
  let mem = `*╭════[  SGDC-BOT  ]════╮*\n*┏═══════════════*\n`
  for (let i = 0; i < users.length; i++) {
      mem += `*┣►* @${users[i].split("@")[0]}\n`
     }
      mem += '*┗═══════════════*\n*╰════[  SGDC-BOT  ]════╯*'
  conn.reply(m.chat, mem, m, {
    contextInfo: {
      mentionedJid: users 
    } 
  })
}

handler.command = /^(tagall2|otagall)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
