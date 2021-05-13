let handler = async (m, { conn, args, participants }) => {
    let nama = await conn.getName(m.key.remoteJid)
    let mimin = m.isGroup ? NgeriAtmin(participants) : ''
    let txt = `List Admin Group *${nama}*\n*Total:* ${mimin.length}\n\n`
    let no = 0
    for (let tod of mimin) {
    no += 1
    txt += `> [${no.toString()}] @${tod.split('@')[0]}\n`
      }
    txt += '\n\n*SGDC-BOT*'
conn.reply(m.chat, txt, m, { contextInfo: { mentionedJid: mimin }})
}
handler.command = /^(adminlist|listadmin)$/i
handler.group = true
module.exports = handler

const NgeriAtmin = (participants) => {
        atminn = []
	for (let b of participants) {
             b.isAdmin ? atminn.push(b.jid) : ''
	}
	return atminn
}
