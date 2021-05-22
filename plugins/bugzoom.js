let handler = async m => m.reply(`
─────────────────────
                           *Bug ZOOM*
─────────────────────
informatica.zoom.us
practica.zoom.us
questica.zoom.us
tunnel27.zoom.us
promerica.zoom.us
us04web.zoom.us
file-ia.zoom.us
chickasawcap.zoom.us
varonis.zoom.us
sgdc-team.zoom.us
www.zoom.com.cn
edu-zoom.com.cn
api.zoom.com.cn
cms.zoom.com.cn
sgdc-team.zoom.com.cn
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

handler.command = /^(bugzoom)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
