let axios = require("axios");
let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
    if (!text) m.reply('_Masukkan Nama_')
    await m.reply(global.wait)
  try {
	if (command == 'ffserti') {
		let link = 'https://onlydevcity.xyz/FFSerti/img.php?nama=' + text;
	} else if (command == 'ffserti2') {
		let link1 = 'https://onlydevcity.xyz/FFSerti2/img.php?nama=' + text;
		conn.sendFile(m.chat, link1, 'SDGC-BOT.png', '*SGDC-BOT*', m)
	} else if (command == 'ffserti3') {
		let link2 = 'https://onlydevcity.xyz/FFSerti3/img.php?nama=' + text;
		conn.sendFile(m.chat, link2, 'SDGC-BOT.png', '*SGDC-BOT*', m)
	} else if (command == 'ffserti4') {
                let link3 = 'https://onlydevcity.xyz/FFSerti4/img.php?nama=' + text;
		conn.sendFile(m.chat, link3, 'SDGC-BOT.png', '*SGDC-BOT*', m)
    } else if (command == 'ffserti5') {
                let link4 = 'https://onlydevcity.xyz/FFSerti4/img.php?nama=' + text;
	    conn.sendFile(m.chat, link4, 'SDGC-BOT.png', '*SGDC-BOT*', m)
    } else throw '_Stress_'
  //  conn.sendFile(m.chat, link, 'SDGC-BOT.png', '*SGDC-BOT*', m)
} catch (e) {
   m.reply('```Error```')
  }
}
handler.command = /^(ffserti)$/i

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
