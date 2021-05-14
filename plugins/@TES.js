let handler = async(m, { conn, args, participants }) => {
        /*let data = Object.entries(global.DATABASE.data.users)
	let out = `*DATA USERS*\n\n`
	for (let i = 0; i < data.length; i++) {
       out += `${data[i]}\n`
    }
    conn.reply(m.chat, out, m)*/
    let users = Object.entries(global.DATABASE.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
    console.log(participants)
    conn.reply(m.chat, `${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Level ${level}*`).join`\n`}, m)
 }

handler.command = /^(data)$/i

module.exports = handler

//  MUHAMMAD AFDHAN
