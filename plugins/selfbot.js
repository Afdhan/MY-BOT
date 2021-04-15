let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
   if (command == 'self') {
	 isAll = false
   if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = true
  conn.reply(m.chat, `_Success Activated SELF-BOT Mode_`, m)
      } else if (command == 'public') {
          isAll = true
   if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = false
  conn.reply(m.chat, `_Success Activated PUBLIC-BOT Mode_`, m)
      }
  }
  
handler.command = /^(self|public)$/i
handler.rowner = true
module.exports = handler
