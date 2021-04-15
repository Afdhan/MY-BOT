let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
/*let user = global.DATABASE._data.users[m.sender]
if (user.prems) {*/
await conn.reply(m.chat, '*[ WAIT ]* _Sedang di proses..._', m)
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted : m.fromMe ? conn.user.jid : m.sender 
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let name = conn.getName(who)
    let about = (await conn.getStatus(who)).status
    //let { limit, exp, lastclaim } = global.DATABASE.data.users[m.sender]
    let str = `
Name: ${name} (@${who.replace(/@.+/, '')})
About: ${about}
Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
Link: https://wa.me/${who.split`@`[0]}
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
 // } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}

handler.command = /^(profil|getpp|getprofil)$/i

module.exports = handler

