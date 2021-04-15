let handler = async (m, { conn, args, text, isBotAdmin, isAdmin }) => {
        if (!text) return m.reply('```Masukkan Nama Grup```')
        await conn.groupUpdateSubject(m.chat, `${text}`)
        conn.reply(m.chat, '_Berhasil Mengganti Nama Grup!_', m)            
}

handler.command = /^(setname(gc)?)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null

module.exports = handler
