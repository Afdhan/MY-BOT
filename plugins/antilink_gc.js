let handler = async function(m, { conn , args, isAdmin, isBotAdmin, usedPrefix }) {
  let ajg = m.sender
  let chat = global.DATABASE.data.chats[m.chat]
  if (!chat.antiLink) return
 // if (!m.isGroup) return
  if (chat.antiLink && m.isGroup) {
 //if (m.isBaileys && m.fromMe) throw false
 if (isAdmin) return m.reply('_Kali ini anda aman! Karena anda adalah Admin !!!_')
 await conn.reply(m.chat, `
*[ CHAT ANTI LINK ]*

_Terdeteksi *@${ajg.split("@")[0]}* telah mengirim link group!_

Maaf Kamu akan dikick oleh *SGDC-BOT*
`.trim(), m, { 
   contextInfo: { 
     mentionedJid: [ajg]
   } 
 })
 if(isBotAdmin) { 
   conn.groupRemove(m.chat, [ajg])
    } else if (!isBotAdmin) return m.reply('_Jadikan SGDC-BOT Sebagai Admin, Agar Bisa Bertindak !!!_')
   } //else m.reply('```AKTIFIN ANTILINK! BIAR GUA ULTI NI BOCAH !!!```')
    
 }

handler.customPrefix = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.command = new RegExp
handler.group = true
handler.fail = null

module.exports = handler
