let handler = async m => m.reply(`
─────────────────────
                  *Payload Indosat 0P0K*
─────────────────────

CONNECT [host_port] HTTP/1.1[crlf][cr]
GET http://202.152.162.239/lpisat/ramadhan/ [cr]
Host: 202.152.162.239/lpisat/ramadhan[cr]
Connection: Keep-Alive[crlf][crlf]

Mode Direct
Pakai Port Dropbear
─────────────────────
                     *ＳＧＤＣ－ＴＥＡＭ*
─────────────────────
• https://t.me/SGDC_TEAM
• https://t.me/SobatGretong
• https://t.me/DesaConfig
• https://t.me/DesaConfigCh
─────────────────────
                       *ＳＧＤＣ－ＢＯＴ*
─────────────────────
`.trim()) 


handler.command = /^(payloadisatopok)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
