let handler = async m => m.reply(`
─────────────────────
                        *Bug PubgMobile*
─────────────────────
pubgmobile.com
m.pubgmobile.com
www.pubgmobile.com
pmsc.pubgmobile.com
pmco.pubgmobile.com
esports.pubgmobile.com
clubopen.pubgmobile.com
tencentgames.pubgmobile.com
beta.clubopen.pubgmobile.com
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

handler.command = /^(bugpubg)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
