let handler = async m => m.reply(`
*╭═════════════════════╮*
                      *Payload Unlimited Max*
*┏═════════════════════╯*
*║  PAYLOAD*
*┣━━━━━━►*
*║CONNECT [host_port] [protocol][cr]*
*║Host: www.spotify.com[cr]*
*║X-Online-Host: www.spotify.com[cr]*
*║Connection: Keep-Alive[crlf][crlf]*
*║*
*┣► Mode Direct*
*┣► Pakai Port Dropbear*
*┗═════════════════════╮*
                                 *SGDC-TEAM*
*┏═════════════════════╯*
*║★ https://t.me/SGDC_TEAM*
*║★ https://t.me/SobatGretong*
*║★ https://t.me/DesaConfig*
*║★ https://t.me/DesaConfigCh*
*┗═════════════════════╮*
                                  *SGDC - BOT*
*╰═════════════════════╯*
`.trim()) 


handler.command = /^(payloadunlimax)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
