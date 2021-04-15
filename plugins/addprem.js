const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let handler = async(m, { conn, text, participants, isPrems }) => {
let who
  if (m.isGroup) who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  else who = m.chat
  if (!who) throw '_Tag orang yang akan dijadikan user premium!_'
  let user = `${who.split("@s.whatsapp.net")[0]}`
  let up = global.prems.push(user)
  fs.writeFileSync('./config.js',JSON.stringify(up))
  let prem = `_Berhasil Add @${who.split("@")[0]} Sebagai User Premium!_`
  conn.reply(m.chat, prem, m, {
           contextInfo: { 
                 mentionedJid: [who]
          } 
      })
}
handler.command = /^(addprem|prem|addprems)$/i
handler.rowner = true

module.exports = handler
