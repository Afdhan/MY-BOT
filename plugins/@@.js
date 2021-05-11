let handler = async (m, { conn, text, args, command: cmd, usedPrefix: p }) => {
	if(cmd.startsWith(p).length > 3) {
		let user = m.sender
       await conn.reply(m.chat, `Maaf @${user.split("@")[0]}, Anda Telah Spam Command, Anda Akan Di Bann Otomatis!`, m, { contextInfo: { mentionedJid: [user]}})
		let users = global.DATABASE._data.users
       users[user].banned = true
       }
   }
handler.command = new RegExp

module.exports = handler