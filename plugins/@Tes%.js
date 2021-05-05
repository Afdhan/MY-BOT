let handler = async (m, { conn, args, text }) => {
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted : m.fromMe ? conn.user.jid : m.sender
	if (args.length == 0) return m.reply ('Masukkan Teks')
        //if (args.length < 5) return m.reply ('Wajib 5 kata')
        //if (args.length > 5) return m.reply ('Hanya 5 kata')
	let hsl = 'https://wa.me/' + who.split`@`[0] + 'send?text=' + args[0] + '+' + args[1] ? + '+' + args[2] ? + '+' + args[3] ? + '+' + args[4] ? + '+' + args[5] ?
	conn.reply(m.chat, hsl, m)
}
handler.command = /^((msg)?send)$/i

module.exports = handler
