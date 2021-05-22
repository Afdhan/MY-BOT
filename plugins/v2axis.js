let handler = async m => m.reply(`
*V2RAY AXIS AKTIF 1 TAHUN*

vmess://eyJhZGQiOiJibG9nLnVkZW15LmNvbSIsImFpZCI6IjAiLCJob3N0IjoibWFsYXlzaWEtdmlwLmpzdG9wb2sudGsiLCJpZCI6IjVkY2IyMGVlLTg0MjktMTFlYi05YTJlLTAwMTYzZTAwMTI4OCIsIm5ldCI6IndzIiwicGF0aCI6Ii9BOU9tcVBLdC8iLCJwb3J0IjoiODAiLCJwcyI6IiIsInRscyI6IiIsInR5cGUiOiIiLCJ2IjoiMSJ9


BY _@JSTFREENET_

*SGDC-BOT*
`.trim()) 

handler.command = /^(v2rayaxis|v2rayaxis(edu)|v2rayaxisedu)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
