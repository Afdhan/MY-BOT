let handler = async m => m.reply(`
─────────────────────
                   *Payload Kuota Belajar*
─────────────────────

CONNECT [host_port] [protocol][cr]
Host: web.zoom.us[cr]
X-Online-Host: web.zoom.us[cr]
Connection: Keep-Alive[cr]
User-Agent: [ua][crlf][crlf]

Mode Direct
Pakai Port Dropbear

Socks4 ━► socks4://36.66.192.35:38420
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


handler.command = /^(payloadkuotabelajar)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
