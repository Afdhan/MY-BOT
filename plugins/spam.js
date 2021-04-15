const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
/*let user = global.DATABASE._data.users[m.sender]
if (user.prems) {*/
let [nmr, psn] = text.split `|`
    if (!nmr) return conn.reply(m.chat, 'Siapa yang mau di spam?', m)
    if (!psn) return conn.reply(m.chat, 'Silahkan masukan teks pesan', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)

    var kn = m.mentionedJid[0]
    let kr = kn.split("@s.whatsapp.net")[0]
    var nomr = m.sender
    let ss = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let sn = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s3 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s4 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s5 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s6 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s7 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s8 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s9 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s0 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s11 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s12 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s13 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s14 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s15 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`


   // conn.sendMessage(kr + '@s.whatsapp.net', ss, MessageType.text)                                                                                                                                                                                                          conn.sendMessage(korban + '@s.whatsapp.net', spam2, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', sn, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s3, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s4, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s5, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s6, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s7, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s8, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s9, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s0, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s11, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s12, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s13, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s14, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s15, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', ss, MessageType.text)


    let logs = `_Berhasil mengirim pesan spam ke nomor ${kr} sebanyak 15 kali_`
    conn.reply(m.chat, logs, m)
  //  } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}

handler.command = /^(spam|spamwa)$/i


handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

//  MUHAMMAD AFDHAN

module.exports = handler