let handler = async (m, { conn, args, isAdmin, }) => {
    let nama = await conn.getName(m.key.remoteJid)
    let txt = `List Admin Group *${nama}*\nTotal : ${isAdmin.length}\n\n`
    let no = '> 0.'
    for (let admon of isAdmin) {
    no += '> 1.'
    txt += `[${no.toString()}] @${admon.split('@')[0]}\n`
      }
    txt += '\n\n*SGDC-BOT*'
conn.reply(m.chat, txt, m, { contextInfo: { mentionedJid: isAdmin }})
}
handler.command = /^(adminlist|listadmin)$/i

module.exports = handler