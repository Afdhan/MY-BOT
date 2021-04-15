let handler = async m => m.reply(`
*╭═════════════════════╮*
                               *Bug Facebook*
*┏═════════════════════╯*
*║•  mail.thefacebook.com*
*║•  m.facebook.com*
*║•  api.facebook.com*
*║•  prod.facebook.com*
*║•  register.facebook.com*
*║•  lite.facebook.com*
*║•  secure.facebook.com*
*║•  login.facebook.com*
*║•  vlogin.beta.facebook.com*
*║•  msgin-regional.vvv.facebook.com*
*║•  secure-media-sf2p.facebook.com*
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

handler.command = /^(bugfb|bugfacebook)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
