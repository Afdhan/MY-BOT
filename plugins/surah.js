let axios = require("axios");
let kntl = require("../src/kntl.json")
let handler = async(m, { conn, text }) => {
let api = (kntl.zekskey)
if (!text) return conn.reply(m.chat, '_Masukkan Nomor Surah_', m)
  try {
    await m.reply(global.wait)
	axios.get(`https://api.zeks.xyz/api/quran?no=${text}&apikey=${api}`).then ((res) => {
	 	let hasil = `*HASIL SEARCHING*\n\n*Nomor:* ${res.data.no}\n*Surah:* ${res.data.surah}\n*Asma:* ${res.data.asma}\n*Tipe:* ${res.data.type}
*Jumlah Ayat:* ${res.data.jumlah_ayat}\n*Keterangan:*\n${res.data.ket}\n\n*Audio:*\n${res.data.audio}\n_Klik Link Diatas Jika Ingin Mendengarkan Surah ${res.data.surah}_\n───────────────────────\n`       
		for (let i = 0; i < res.data.ayat.length; i++) {
                    hasil += `\n\n\n${res.data.ayat[i].text}\n\n*Artinya:*\n_${res.data.ayat[i].translation_id}_\n`
              }
                    hasil += '\n\n*SGDC-BOT*'
    conn.reply(m.chat, hasil, m)
	})
   } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(getsurah)$/i
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
