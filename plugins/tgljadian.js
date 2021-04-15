let axios = require("axios");
let handler = async(m, { conn, text }) => {
let [tgl, bln, th] = text.split `|`
    if (!text) return conn.reply(m.chat, '_Masukkan tanggal, bulan, dan tahun. contoh *!maknajadian 17|08|1945*_', m)
    if (!tgl) return conn.reply(m.chat, '_Tanggal tidak boleh kosong_', m)
    if (!bln) return conn.reply(m.chat, '_Bulan tidak boleh kosong_', m)
    if (!th) return conn.reply(m.chat, '_Tahun tidak boleh kosong_', m)
 try {
    await m.reply(global.wait)
    axios.get(`https://videfikri.com/api/primbon/tgljadian/?tgl=${tgl}&bln=${bln}&thn=${th}`).then((res) => {
    let hasil = `
${res.data.result.hasil}

*SGDC-BOT*
`.trim()
conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
   m.reply('```Error```')
  }
}
handler.command = /^(maknajadian)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler