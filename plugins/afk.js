let handler = async(m, { conn, text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  let usr = m.sender
  let aef = `
_@${usr.split("@")[0]} Sekarang AFK!_\nKarena${text ? ': ' + text : ''}
`.trim()
conn.reply(m.chat, aef, m, {
           contextInfo: { 
                 mentionedJid: [usr] 
          } 
     })
}

handler.command = /^afk$/i

module.exports = handler
