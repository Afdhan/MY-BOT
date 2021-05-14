let handler = async(m, { conn, args }) => {
        /*let data = Object.entries(global.DATABASE.data.users)
	let out = `*DATA USERS*\n\n`
	for (let i = 0; i < data.length; i++) {
       out += `${data[i]}\n`
    }
    conn.reply(m.chat, out, m)*/
    let users = Object.entries(global.DATABASE.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
    m.reply(users)
 }

handler.command = /^(data)$/i

module.exports = handler

//  MUHAMMAD AFDHAN
