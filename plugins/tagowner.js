let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*Ngapain Manggil ꧁࿇ ᴍ ᴀꜰᴅʜᴀɴ ࿇꧂?*
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /^(@꧁࿇ ᴍ ᴀꜰᴅʜᴀɴ ࿇꧂|@꧁࿇ M AFDHAN ࿇꧂|Afdhan)$/i
handler.command = new RegExp

module.exports = handler
