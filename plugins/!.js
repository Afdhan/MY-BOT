const { MessageType } = require("@adiwajshing/baileys")
let handler = async (m, { conn, args }) => {
   if (args < 1) return m.reply("dahlah :)");
   if (args < 2) return m.reply("Skip!");
   let jumlah = args[0]
   let pesan = args[1]
   let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
   for ( let i = 0 ; i < jumlah; i++) {
        pesan += '\n\n*SGDC-BOT*'
        conn.sendMessage(m.chat, pesan, MessageType.extendedText, { contextInfo: { mentionedJid: users } })
       }
 }
handler.command = /^htag$/i
module.exports = handler
