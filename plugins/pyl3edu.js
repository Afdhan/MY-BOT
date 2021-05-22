let handler = async m => m.reply(`
─────────────────────
                  *Payload Three Edukasi*
─────────────────────

CONNECT [host_port] [protocol][cr]
Host: classroom.google.com[cr]
Connection: keep-alive[cr]
Proxy-Connection: keep-alive[cr]
X-Online-Host: classroom.google.com[cr]
X-Forward-Host: classroom.google.com[cr]
[crlf]

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


handler.command = /^(payload(tri|3)edu(kasi)?)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
