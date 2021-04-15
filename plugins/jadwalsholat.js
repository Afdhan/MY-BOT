let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler  = async (m, { conn, text }) => {
    let api = (kntl.lolkey)
  try {
     if (!text) return conn.reply(m.chat, 'Silahkan masukan nama daerah', m)
     await m.reply(global.wait)
     axios.get(`http://lolhuman.herokuapp.com/api/sholat/${text}?apikey=${api}`).then((res) => {
    let hasil = `
*JADWAL SHOLAT HARI INI*

*Wilayah:* ${res.data.result.wilayah}
*Tanggal:* ${res.data.result.tanggal}

*Sahur:* ${res.data.result.sahur}
*Imsak:* ${res.data.result.imsak}
*Subuh:* ${res.data.result.subuh}
*Terbit:* ${res.data.result.terbit}
*Dhuha:* ${res.data.result.dhuha}
*Dzuhur:* ${res.data.result.dzuhur}
*Ashar:* ${res.data.result.ashar}
*Maghrib:* ${res.data.result.maghrib}
*Isya:* ${res.data.result.isya}


*SGDC-BOT*
`.trim()
conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
   m.reply('```Error```')
  }
}
handler.command = /^(jadwal(sholat)?(shalat)?(solat)?)$/i
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
