let axios = require("axios");
let handler = async(m, { conn, args, text, usedPrefix }) => {
	let [kntl, mmk] = args.join` `
	//if (args.length == 0) return conn.reply(m.chat, '```Hmm...```', m)
	if (!mmk) m.reply('_Masukkan Nama_')
 try {
	await m.reply(global.wait)
	if (!kntl || kntl.length == 0) {
		let link = 'https://onlydevcity.xyz/MLTourSerti/img.php?nama=' + mmk;
	} else if (kntl == '1' || kntl == '2' || kntl == '3' || kntl == '4' || kntl == '5') {
		let link = 'https://onlydevcity.xyz/MLTourSerti' + kntl + '/img.php?nama=' + mmk;
	} else {
		m.reply('Njirr Lawack :v')
	}
    } catch (e) {
		m.reply('```Error```')
    }
}
handler.command = /^(mlserti)$/i

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