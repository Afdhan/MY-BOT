let handler = async m => m.reply(`
*╭═════════════════════╮*
                               *IP Bug Edukasi*
*┏═════════════════════╯*
*║•  kelas.ruangguru.com ━► 104.19.139.56*
*║•  wiris.ruangguru.com ━► 104.19.140.56*
*║•  ops.ruangguru.com ━► 104.19.142.56*
*║•  tps.ruangguru.com ━► 199.60.103.28*
*║•  payment.ruangguru.com ━► 104.19.143.56*
*║•  tryout.ruangguru.com ━► 199.60.103.228*
*║•  www.sso.udemy.com ━► 104.16.66.85*
*║•  business.udemy.com ━► 104.16.65.85*
*║•  community.udemy.com ━► 13.225.80.105*
*║•  support.udemy.com ━► 104.16.51.111*
*║•  email.udemy.com ━► 199.7.201.32*
*║•  zenius.net ━► 99.83.251.185*
*║•  cdn.zenius.net ━► 75.2.104.153*
*║•  kelas.zenius.net ━► 52.77.54.168*
*║•  lms.zenius.net ━► 13.224.196.34*
*║•  api.zenius.net ━► 99.83.229.160*
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


handler.command = /^(ipedu?kasi)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
