let handler = async m => m.reply(`
*╭═════════════════════╮*
                             *Bug WhatsApp*
*┏═════════════════════╯*
*║•  whatsapp.com*
*║•  v.whatsapp.com*
*║•  b.whatsapp.com*
*║•  api.whatsapp.com*
*║•  blog.whatsapp.com*
*║•  dev-web.whatsapp.com*
*║•  faq.whatsapp.com*
*║•  test-web.whatsapp.com*
*║•  translate.whatsapp.com*
*║•  privatestats.whatsapp.com*
*║•  www.whatsapp.com*
*║•  c.whatsapp.net*
*║•  mmg.whatsapp.net*
*║•  pps.whatsapp.net*
*║•  static.whatsapp.net*
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

handler.command = /^(bugwa|bugwhatsapp)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
