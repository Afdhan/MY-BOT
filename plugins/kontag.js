let handler = async (m, { conn, args }) => {
	try {
          let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted : m.fromMe ? conn.user.jid : m.sender 
	  let user = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
          let name = conn.getName(who)
	 conn.sendContact(m.chat, who.split("@s.whatsapp.net")[0], `${name}`, m, { contextInfo: { mentionedJid: user } })
	} catch(e) {
      m.reply('```Error```')
     console.log(e)
   }
 }
 handler.command = /^((k|c)ontag|kntg)$/i
 handler.group = true
 module.exports = handler
