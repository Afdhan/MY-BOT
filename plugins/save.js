let handler = function (m, { conn, text }) {
	if (!text) return conn.reply(m.chat, '_Namanya Siapa?_', m)
	if (text.length > 15) return conn.reply(m.chat, '_Nama Kepanjangan!_', m)
   let nomor = m.sender
    this.sendContact(m.chat, nomor.split("@s.whatsapp.net")[0], `${text}`, m)
}

handler.command = /^(save(me)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

 // MUHAMMAD AFDHAN
