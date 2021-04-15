let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw '_Siapa yang mau di unbanned?_'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '_Tag salah satu mbah_'
    let users = global.DATABASE._data.users
    users[who].banned = false
    conn.reply(m.chat, `_Berhasil Diunbanned!_`, m)
}

handler.command = /^unbann$/i
handler.rowner = true

handler.fail = null

module.exports = handler


