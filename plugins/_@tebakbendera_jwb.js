let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Bendera Negara Manakah/i.test(m.quoted.text)) return
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    if (!(id in conn.tebakbendera)) return m.reply('Lu Telat Ngab :)')
    if (m.quoted.id == conn.tebakbendera[id][0].id) {
        let json = JSON.parse(JSON.stringify(conn.tebakbendera[id][1]))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
            global.DATABASE._data.users[m.sender].exp += conn.tebakbendera[id][2]
            m.reply("```Benar!```")
            clearTimeout(conn.tebakbendera[id][3])
            delete conn.tebakbendera[id]
        } else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply("```Dikit Lagi!```")
        else m.reply("```Salah!```")
    }
    return
}

module.exports = handler
