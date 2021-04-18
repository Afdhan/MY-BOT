let fetch = require('node-fetch')
let axios = require("axios");
let handler = async (m, { conn, text }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.simi) {
        axios.get(`https://videfikri.com/api/simsimi/?teks=${text}`).then ((res) => {
        let simih = res.data.result
	if (simih.status == '200') conn.reply(m.chat, simih.jawaban, m)
        else throw 'Ngomong Apa?'
      })
  } else throw '*SIMI BELUM DIAKTIFKAN UNTUK CHAT INI!*'
}

handler.customPrefix = /^! /
//handler.command = new RegExp
handler.command = /(?:)/i


handler.fail = null

module.exports = handler
