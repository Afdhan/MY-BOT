let fetch = require('node-fetch')
let axios = require("axios")
let timeout = 120000
let poin = 1000
let handler  = async (m, { conn, usedPrefix }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (id in conn.tebakgambar) {
        conn.reply(m.chat, '_Masih ada soal belum terjawab di chat ini_', conn.tebakgambar[id][0])
        throw false
    }
    let res = await fetch(global.API('xteam', '/game/tebakgambar', {}, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
Timeout: *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}hint* untuk mendapat bantuan

*SGDC-BOT*
    `.trim()
    conn.tebakgambar[id] = [
      await conn.sendFile(m.chat, json.url, 'SGDC-BOT.jpg', caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebakgambar[id]) conn.reply(m.chat, `_Waktu habis! Jawabannya adalah *${json.jawaban}*_`, conn.tebakgambar[id][0])
        delete conn.tebakgambar[id]
      }, timeout)
    ]
  }
    
handler.command = /^(tebakgambar)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
