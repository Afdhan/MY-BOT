let handler = async(m, { conn, args }) => {
	let data = Object.values(global.DATABASE.data.users)
	let out = `*DATA USERS*\n\n`
	for (let i = 0; i < data.length; i++) {
       out += `${data[i]}\n`
    }
    conn.reply(m.chat, out, m)
 }

handler.command = /^(data)$/i

module.exports = handler

//  MUHAMMAD AFDHAN
