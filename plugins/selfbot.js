let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
   if (command == 'self') {
	 isAll = false
   if (global.opts['self'] = true) return m.reply('```SELF-BOT Mode Is Active!```')
      global.opts['self'] = true
  conn.reply(m.chat, '```Success Activated SELF-BOT Mode```', m)
      } else if (command == 'public') {
          isAll = true
   if (global.opts['self'] = false) return  m.reply('```PUBLIC-BOT Mode Is Active!```')
      global.opts['self'] = false
  conn.reply(m.chat, '```Success Activated PUBLIC-BOT Mode```', m)
      }
  }
  
handler.command = /^(self|public)$/i
handler.rowner = true
module.exports = handler
