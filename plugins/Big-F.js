let handler = async (m, { conn, text }) => {
    let own = '6282252655313@s.whatsapp.net'
  conn.reply(m.chat, `_Ngapain Manggil Owner @${own.split("@")[0]}?_`, m, { 
      contextInfo: { 
          mentionedJid: [own] 
      } 
  })
}
handler.customPrefix = /(@꧁࿇ ᴍ ᴀꜰᴅʜᴀɴ ࿇꧂|@6282252655313)/i
handler.command = new RegExp

module.exports = handler				     
