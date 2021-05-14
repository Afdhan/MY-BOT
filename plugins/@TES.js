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

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}

