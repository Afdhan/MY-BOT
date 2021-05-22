let handler = async m => m.reply(`
─────────────────────
                           *Bug TikTok*
─────────────────────
test-business-useast2a.tiktok.com
creatormarketplace-va-useast2a.tiktok.com
webcast16-normal-c-alisg.tiktokv.com
tiktok-lb-maliva.byteoversea.net
promotion-useast2a.tiktok.com
api.tiktok.com
m.tiktok.com
alisg.tiktokv.com
videos-tiktok.com
web.tiktokcdn.com
effect-api-va.tiktok.com
datahub.tiktok.com
image-sg.tiktok.com
api-m.tiktok.com
open-api.tiktok.com
login.tiktok.com
business-sso.tiktok.com
media.tiktok.com
s-16.tiktokcdn.com
s20.tiktokcdn.com
s10.tiktokcdn.com
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

handler.command = /^(bugtiktok|bugtiktod)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
