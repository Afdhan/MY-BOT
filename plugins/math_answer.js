let handler = async (m, { conn }) => {
  let id = m.chat
  if (!m.quoted || m.quoted.sender != conn.user.jid || !/^Berapa hasil dari/i.test(m.quoted.text)) throw false
  conn.math = conn.math ? conn.math : {}
  if (!(id in conn.math)) throw 'Ente Dah Telat :v'
  if (m.quoted.id == conn.math[id][0].id) {
  let math = JSON.parse(JSON.stringify(conn.math[id][1]))
  if (m.text == math.result) {
    global.DATABASE._data.users[m.sender].exp += math.bonus
    clearTimeout(conn.math[id][3])
    delete conn.math[id]
    throw `*Jawaban Benar!*`
  } else {
    if (--conn.math[id][2] == 0) {
      clearTimeout(conn.math[id][3])
      delete conn.math[id]
      throw `*Kesempatan habis!* _Jawaban: *${math.result}*_`
    } else throw `*Jawaban Salah!* _Masih ada ${conn.math[id][2]} kesempatan_`
  }
 }
}
/*handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
module.exports = handler*/


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
