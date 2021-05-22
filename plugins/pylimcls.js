let handler = async m => m.reply(`
─────────────────────
                       *Payload Im3Class*
─────────────────────

CONNECT [host_port] [protocol][cr]
Host: www.ruangguru.com[cr]
Connection: keep-alive[cr]
Proxy-Connection: keep-alive[cr]
X-Online-Host: www.ruangguru.com[cr]
[crlf]

Proxy ► 124.158.167.172:8080

Socks4 ► socks4://182.253.79.70:4145
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


handler.command = /^(payloadimclass)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
