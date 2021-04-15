let handler = async m => m.reply(`
*╭═════════════════════╮*
                                *Bug YouTube*
*┏═════════════════════╯*
*║•  youtube.com*
*║•  www.youtube.com*
*║•  m.youtube.com*
*║•  api.youtube.com*
*║•  admin-py3.youtube.com*
*║•  sgdc.youtube.com*
*║•  v4.cache1.c.youtube.com*
*║•  gdata.youtube.com*
*║•  v1.cache1.c.youtube.com*
*║•  signaler-pa.youtube.com*
*║•  accountlinking-pa-clients6.youtube.com*
*║•  o-o.preferred.lvlt-iad1.tc.v22.cache1.c.youtube.com*
*║•  m.googlevideo.com*
*║•  ph.googlevideo.com*
*║•  redirect.googlevideo.com*
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

handler.command = /^(bugyt|bugyoutube)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
