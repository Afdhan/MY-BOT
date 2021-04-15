let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*hint/i.test(m.quoted.text)) return
  conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
  if (!(id in conn.tebakgambar)) return m.reply('_Lu telat ngen' + readMore + ' (uhh) :v_')
  if (m.quoted.id == conn.tebakgambar[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.tebakgambar[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
      global.DATABASE._data.users[m.sender].exp += conn.tebakgambar[id][2]
      m.reply('_Kamu Benar..! Kamu' + readMore + ' tidak mendapatkan apa-apa xD_')
      clearTimeout(conn.tebakgambar[id][3])
      delete conn.tebakgambar[id]
    } else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply(`_Dikit Lagi..!_`)
    else m.reply(`_Kamu Salah..!_`)
  }
}
module.exports = handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
