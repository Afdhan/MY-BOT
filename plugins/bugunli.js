let handler = async m => m.reply(`
─────────────────────
                 *Bug Unlimited Telkomsel*
─────────────────────
sgdc-server.spotify.com
unlimax.spotify.com
unliapps.spotify.com
www.spotify-desktop.com
accounts.spotify.com
api.spotify.com
artist.spotify.com
beta.spotify.com
blog.spotify.com
c.spotify.com
carthing.spotify.com
m.spotify.com
open.spotify.com
play.spotify.com
publishers.spotify.com
support.spotify.com
line.me
tr.line.me
today.line.me
chatting.line-apps.com
connect.line-apps.com
profile.line-apps.com
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

handler.command = /^(bugunli|bugunlimax|bugunlimited)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
