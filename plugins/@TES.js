let handler = async(m, { conn, args }) => {
	let data = global.DATABASE._data.users[m.sender]
	let out = `*DATA USERS*`
	for (let i = 0; i < data.length; i++) {
       out += `${data[i]}\n`
    }
    conn.reply(m.chat, out, m)
 }

handler.command = /^(data)$/i

module.exports = handler

//  MUHAMMAD AFDHAN
