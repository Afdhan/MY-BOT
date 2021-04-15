let handler = async m => m.reply(`
*╭═════════════════════╮*
                                 *Bug IM3Class*
*┏═════════════════════╯*
*║•  www.cisco.com*
*║•  www.tangkil.com*
*║•  www.webex.com*
*║•  www.ruangguru.com*
*║•  e-learning.ruangguru.com*
*║•  videocdn.ruangguru.com*
*║•  bimbel.ruangguru.com*
*║•  meet.google.com*
*║•  classroom.google.com*
*║•  hangouts.google.com*
*║•  www.quipper.com*
*║•  api.quipper.com*
*║•  zenius.imgix.net*
*║•  ilk.zenius.net*
*║•*
*┣━━━━━━►*
*║•  Proxy -> 124.158.167.170:8080*
*║•                   124.158.167.172:8080*
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

handler.command = /^(bugimclass|bugim3class)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
