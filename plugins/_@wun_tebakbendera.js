let handler = async (m, { conn }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (!(id in conn.tebakbendera)) throw false
    let json = conn.tebakbendera[id][1]
    let kemem = json.jawaban
    let nenen = kemem.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('```' + nenen + '```')
}
handler.command = /^wun$/i
module.exports = handler