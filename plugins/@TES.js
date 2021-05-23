let handler = async(m, { conn, args, participants }) => {
    let users = Object.entries(global.DATABASE.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
    let dia = users.map(toNumber('exp')).sort(sort('exp'))
    let tot = dia.length
    let makhluk = dia.map(enumGetKey)
    console.log(participants)
    let teks = `
*TOTAL PENGGUNA YANG TERDETEKSI*

${dia.slice(0).map(({ jid }) => `*>* @${jid.split`@`[0]}`).join`\n`}

*TOTAL ADA: ${tot}*

*NOTE:*
_Data diri anda tersimpan didalam database selama SGDC-BOT aktif, dan akan reset otomatis setelah SGDC-BOT dinonaktifkan._
_Yaitu, Termasuk data Chat atau Pesan, Command yang diconversi, Nomor pengguna, ID WhatsApp, Command yang di reject, Command yang gagal diconversi, dan Nama pengguna._

_Jadi bijaklah dalam memanfaatkan fasilitas :)_
`.trim()
    conn.reply(m.chat, teks, m, {
    contextInfo: {
      mentionedJid: [...makhluk.slice(0)]
    }
  })
 }

handler.command = /^((data|total)(user)?)$/i

module.exports = handler

//  MUHAMMAD AFDHAN

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}

