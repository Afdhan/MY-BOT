let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
   if (command == 'self') {
	 isAll = false
   if (global.opts['self'] = true) {
        conn.reply(m.chat, 'BOT Sudah Dalam SELF-MODE', m)
      }
      global.opts['self'] = true
  conn.reply(m.chat, `_Success Activated SELF-BOT Mode_`, m)
      } else if (command == 'public') {
          isAll = true
   if (global.opts['self'] = false) {
        conn.reply(m.chat, 'BOT Sudah Dalam PUBLIC-MODE', m)
      }
      global.opts['self'] = false
  conn.reply(m.chat, `_Success Activated PUBLIC-BOT Mode_`, m)
      }
  }
  
handler.command = /^(self|public)$/i
handler.rowner = true
module.exports = handler
