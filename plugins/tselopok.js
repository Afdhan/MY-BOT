let util = require('util')
let path = require('path')

let { spawn } = require('child_process')


let handler = async (m, { conn, args }) => {
  let tselopok ='src/tselopok.hc'
await conn.reply(m.chat, `
*╭════[DESCRIPTION]════╮*
*┏════════════════*
*║•  Title : Telkomsel 0P0K*
*║•  Ekstensi : hc*
*║•  Aplikasi : HTTP Custom*
*║•  Version : HC 239 (Playstore)*
*║•  Expires : LifeTime*
*║•  Mode : Payload Psiphon*
*║•  Note : Input Key Trial*
*║•  Note : Wajib IP Kecil 10.15.**
*┣════════════════*
*║ [ • WAIT • ]* _Config Sedang Dikirim..._
`.trim(), m)
conn.sendFile(m.chat, tselopok, 'Telkomsel 0P0K.hc','ini', m)
}

handler.command = /^(tsel(0p0k|opok)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
