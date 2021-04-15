let handler = async (m, { conn, args, text, isBotAdmin, isAdmin }) => {
        if (!text) return m.reply('```Masukkan Teks```')
        await conn.groupUpdateDescription(m.chat, `${text}`)
        conn.reply(m.chat, '_Berhasil Mengganti Deskripsi Grup!_', m)
 }            
handler.command = /^(setdesc|setdesk)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null

module.exports = handler
