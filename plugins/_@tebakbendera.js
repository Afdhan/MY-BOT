const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker')
let timeout = 120000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakbendera[id][0])
        throw false
        }
    let res = await fetch(global.API('xteam', '/game/tebakbendera', {}, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let stiker = await sticker(null, global.API('xteam', '/sticker/emojitopngwhatsapp', { emo: json.bendera }, 'APIKEY'), `Jawabannya`, `${json.jawaban}`)
    let caption = `
\`\`\`TEBAK BENDERA\`\`\`
Bendera Negara Manakah Ini? : ${json.bendera}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}wun* untuk bantuan

_Balas Pesan Ini Untuk Menjawab!_
`.trim()
    conn.tebakbendera[id] = [
        await m.reply(caption),
        json,
        setTimeout(() => {
             if (conn.tebakbendera[id]){
                conn.reply(m.chat, `_Waktu habis! Jawabannya adalah *${json.jawaban}*_`, conn.tebakbendera[id][0])
            conn.sendMessage(m.chat, stiker, MessageType.sticker, {
     quoted: conn.tebakbendera[id][0]
     })
    }
            delete conn.tebakbendera[id]
        }, timeout)
    ]
  }

handler.command = /^tebakbendera$/i
module.exports = handler
