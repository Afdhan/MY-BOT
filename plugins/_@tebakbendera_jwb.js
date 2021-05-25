const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Bendera Negara Manakah/i.test(m.quoted.text)) return !0
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    if (!(id in conn.tebakbendera)) return m.reply('Lu Telat Ngab :)')
    if (m.quoted.id == conn.tebakbendera[id][0].id) {
        let json = JSON.parse(JSON.stringify(conn.tebakbendera[id][1]))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
            //global.DATABASE._data.users[m.sender].exp += conn.tebakbendera[id][2]
            let stiker = await sticker(null, global.API('xteam', '/sticker/emojitopngwhatsapp', { emo: json.bendera }, 'APIKEY'), 'Jawabannya', `${json.jawaban}`)
            await m.reply("```Benar!```")
            conn.sendMessage(m.chat, stiker, MessageType.sticker, {
     quoted: m
     })
            clearTimeout(conn.tebakbendera[id][3])
            delete conn.tebakbendera[id]
        } else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply("```Dikit Lagi!```")
        else m.reply("```Salah!```")
    }
    return !0
}

module.exports = handler
