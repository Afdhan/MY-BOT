let handler = async m => m.reply(`
*╭═════════════════════╮*
                               *Bug Microsoft*
*┏═════════════════════╯*
*║•  teams.microsoft.com*
*║•  tr.teams.microsoft.com*
*║•  turn.teams.microsoft.com*
*║•  eu.turn.teams.microsoft.com*
*║•  config.teams.microsoft.com*
*║•  fl.teams.microsoft.com*
*║•  emails.teams.microsoft.com*
*║•  statics.teams.microsoft.com*
*║•  visitstaging.teams.microsoft.com*
*║•  adminalert.teams.microsoft.com*
*║•  jp-webhook.teams.microsoft.com*
*║•  visit.teams.microsoft.com*
*║•  in-webhook.teams.microsoft.com*
*║•  sgdc-teams.microsoft.com*
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

handler.command = /^(bugmicro?soft|bugmicrosoft)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
