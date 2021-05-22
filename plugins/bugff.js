let handler = async m => m.reply(`
─────────────────────
                          *Bug FreeFire*
─────────────────────
freefiremobile.com
m.freefiremobile.com
www.freefiremobile.com
dl.castle.freefiremobile.com
login.common.freefiremobile.com
version.common.freefiremobile.com
client.common.freefiremobile.com
client.ind.freefiremobile.com
sg.network.freefiremobile.com
winter.freefiremobile.com
partner.freefiremobile.com
support.freefiremobile.com
─────────────────────
			       *ＳＧＤＣ－ＴＥＡＭ*
─────────────────────
• https://t.me/SGDC_TEAM
• https://t.me/SobatGretong
• https://t.me/DesaConfig
• https://t.me/DesaConfigCh
─────────────────────
                      *ＳＧＤＣ－ＢＯＴ*
─────────────────────
`.trim()) 

handler.command = /^(bugff|bugfreefire)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
