let handler = async (m, { conn, text, args, command: cmd, usedPrefix: _p }) => {
	if(m.message > 1) {
	let user = m.sender
       await conn.reply(m.chat, `Maaf @${user.split("@")[0]}, Anda Telah Spam Command, Anda Akan Di Bann Otomatis!`, m, { contextInfo: { mentionedJid: [user]}})
       let users = global.DATABASE._data.users
       users[user].banned = true
       }
   }
handler.command = new RegExp

module.exports = handler
