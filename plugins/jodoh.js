let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let [kon, tol] = text.split `|`
let api = (kntl.onlydev)
 try{
    if (!kon) return conn.reply(m.chat, '_Masukkan Namamu!_', m)
    if (!tol) return conn.reply(m.chat, '_Masukkan Nama Pasanganmu!_', m)
    await m.reply(global.wait)
	axios.get(`https://onlydevcity.herokuapp.com/api/primbon/jodoh?nama1=${kon}&nama2=${tol}&apikey=${api}`).then ((res) => {
    let hasil = `
*Nama Kamu:* ${res.data.result.namaKamu}
*Nama Pasangan:* ${res.data.result.namaPasangan}

*_Sisi Positif:_*
_${res.data.result.positif}_

*_Sisi Negatif:_*
_${res.data.result.negatif}_


*SGDC-BOT*
`.trim()

    conn.reply(m.chat, hasil, m)
	})
   } catch (e) {
  	m.reply('```Error```')
  }
}

handler.command = /^(jodoh)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

//  MUHAMMAD AFDHAN
