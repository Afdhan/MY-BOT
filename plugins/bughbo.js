let handler = async m => m.reply(`
*╭═════════════════════╮*
                                *Bug HBO GO*
*┏═════════════════════╯*
*║•  stage.hbogo.eu*
*║•  t.hbogo.eu*
*║•  telkomsel.hbogo.eu*
*║•  testcdn.hbogo.eu*
*║•  twcbuilds.hbogo.eu*
*║•  rush.hbogo.eu*
*║•  api.ugw.hbogo.eu*
*║•  upcnlorigin.hbogo.eu*
*║•  us.hbogo.eu*
*║•  vcms.hbogo.eu*
*║•  vectraedge1a.hbogo.eu*
*║•  videocdn.hbogo.eu*
*║•  vidio.hbogo.eu*
*║•  webmail.hbogo.eu*
*║•  www.hbogo.eu*
*║•  maxtream.hbogo.eu*
*║•  me.hbogo.eu*
*║•  meapi.hbogo.eu*
*║•  media.hbogo.eu*
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

handler.command = /^(bughbo?go|bughbogo)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
