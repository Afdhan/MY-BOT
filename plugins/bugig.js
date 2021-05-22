let handler = async m => m.reply(`
─────────────────────
                          *Bug Instagram*
─────────────────────
upload.instagram.com
live-upload.instagram.com
blog.instagram.com
m.instagram.com
admin.instagram.com
secure.instagram.com
developers.instagram.com
www.instagram.com
graph.instagram.com
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

handler.command = /^(bugig|buginstagram)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
