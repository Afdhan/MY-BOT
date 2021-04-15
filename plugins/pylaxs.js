let handler = async m => m.reply(`
*╭═════════════════════╮*
                          *Payload Axis Edukasi*
*┏═════════════════════╯*
*║  PAYLOAD*
*┣━━━━━━►*
*║CONNECT belajar.kemdikbud.go.id[cr]*
*║Host: elearning.iainpalopo.ac.id[cr]*
*║Connection: Keep-Alive[crlf*2]*
*║*
*┣━━━━━━►*
*║Proxy ━► 112.215.101.91:443*
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


handler.command = /^(payloadaxisedu?kasi)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
