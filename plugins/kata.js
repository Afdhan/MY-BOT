
let handler = async(m, { conn, args, command, isOwner }) => {
	let user = m.mentionedJid[0]
	let users = global.DATABASE._data.users
if(command == 'block') {
	conn.blockUser(user, "add")
	users[who].banned = true
	m.reply('Berhasil Blockir ' + '@' + user.split("@")[0])
	}else if(command == 'unblock') {
		conn.blockUser(user, "remove")
		users[who].banned = false
        m.reply('Berhasil UnBlockir ' + '@' + user.split("@")[0])
}
conn.on('CB:Blocklist', json => {
    if (global.block.length > 2) return
    for (let i of json[1].blocklist) {
    global.block.push(i.replace('c.us', 's.whatsapp.net'))
    }
})
}
global.block = []

handler.command = /^(un)?block$/i
handler.rowner = true

handler.fail = null

module.exports = handler


