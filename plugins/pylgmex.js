let handler = async m => m.reply(`
*╭═════════════════════╮*
                          *Payload GamesMax*
*┏═════════════════════╯*
*║  PAYLOAD*
*┣━━━━━━►*
*║[netData][crlf][cr]*
*║Connection: LifeTime[cr]*
*║Host: sg-dc.shellfire.de[cr]*
*║Content-Length: 99999[crlf][cr]*
*║CONNECT [host_port] [protocol][crlf][crlf]*
*║*
*┣━━━━━━►*
*║Proxy ━► 118.98.95.120:443*
*║                     118.98.95.91:443*
*║*
*┣► Mode Psiphon*
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


handler.command = /^(payloadgamemax)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
