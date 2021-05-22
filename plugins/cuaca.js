let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.xteam)
  try {
    if (!text) return conn.reply(m.chat, 'Masukkan Nama Kota', m)
    await m.reply(global.wait)
    axios.get(`https://api.xteam.xyz/cuaca?kota=${text}&APIKEY=${api}`).then((res) => {
    let hasil = `
*INFO CUACA INDONESIA*
    
Kota: _${res.data.message.kota}_
Hari: _${res.data.message.hari}_
Cuaca: _${res.data.message.cuaca}_
Deskripsi: _${res.data.message.deskripsi}_
Suhu: _${res.data.message.suhu}_
Pressure: _${res.data.message.pressure}_
Kelembaban: _${res.data.message.kelembapan}_
Angin: _${res.data.message.angin}_


*SGDC-BOT*
`.trim()
conn.reply(m.chat, hasil, m)
	})
    } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(cuaca)$/i


module.exports = handler


// MUHAMMAD AFDHAN
