let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah!*\n*Contoh:*\n*• ${usedPrefix + command} close*\n*• ${usedPrefix + command} open*`, m)
	} else if(args[0] == 'open') {
		await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
		m.reply('```Berhasil Membuka Grup```')
	} else if(args[0] == 'close') {
		await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
		m.reply('```Berhasil Menutup Grup```')
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah!*\n*Contoh:*\n*• ${usedPrefix + command} close*\n*• ${usedPrefix + command} open*`, m)
	} 
}

handler.command = /^(group|grup|gc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null

module.exports = handler
