const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, '_Masukkan Text Laporan!_', m)
    if (text.length > 200) return conn.reply(m.chat, '_Teks Terlalu Panjang!, Maksimal 200 Karakter_', m)
    await conn.sendMessage('0@s.whatsapp.net', `${text}`, MessageType.text)
    m.reply('_Berhasil Mengirim Pesan Ke Mark!_')
}               


handler.command = /^(mark)$/i


//  MUHAMMAD AFDHAN

module.exports = handler
