let { execSync } = require('child_process')
let handler = async (m, { conn, text }) => {
 await m.reply('```_Sedang Merestart SGDC-BOT...```')
  if (global.conn.user.jid == conn.user.jid) {
 // conn.reply(m.chat, '*_Memulai Ulang BOT..._*', m)
    let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
    require('fs').readdirSync('plugins').map(v=>global.reload('', v))
    conn.reply(m.chat, '*Info:*\n' + stdout.toString() + '\n\n*SGDC-BOT*', m)
   }
}

handler.command = /^(restart|reload)$/i
handler.owner = true

module.exports = handler

