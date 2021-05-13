let handler = async (m, { conn, args, participants }) => {
    let nama = await conn.getName(m.key.remoteJid)
    let groupAdmins = m.isGroup ? getGroupAdmins(participants) : ''
    let txt = `List Admin Group *${nama}*\nTotal : ${groupAdmins.length}\n\n`
    let no = '> 0.'
    for (let admon of groupAdmins) {
    no += '> 1.'
    txt += `[${no.toString()}] @${admon.split('@')[0]}\n`
      }
    txt += '\n\n*SGDC-BOT*'
conn.reply(m.chat, txt, m, { contextInfo: { mentionedJid: isAdmin }})
}
handler.command = /^(adminlist|listadmin)$/i

module.exports = handler

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
