let handler = async m => m.reply(`
*╭═════════════════════╮*
                              *Bug Call Of Duty*
*┏═════════════════════╯*
*║•  cms.callofduty.com*
*║•  callofduty.com*
*║•  www.callofduty.com*
*║•  m.callofduty.com*
*║•  profile.callofduty.com*
*║•  images.callofduty.com*
*║•  preview.callofduty.com*
*║•  uat.callofduty.com*
*║•  local.callofduty.com*
*║•  community.callofduty.com*
*║•  localhost.callofduty.com*
*║•  shop-uat.callofduty.com*
*║•  api.demo.elite.callofduty.com*
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


handler.command = /^(bugcod|cod)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
