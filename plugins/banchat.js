let handler = async (m, { conn, participants }) => {
    if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].isBanned = true
    m.reply('```Satu Chat Grup Berhasil Dibanned!```')
   } else m.reply('Ada nomor host disini...')
}

handler.command = /^(banchat|ban|mute)$/i
handler.owner = true

module.exports = handler
