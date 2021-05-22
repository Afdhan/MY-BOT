let handler = async m => m.reply(`
*V2RAY IMCLASS AKTIF 1 TAHUN*

vmess://eyJhZGQiOiJnb3YucnVhbmdndXJ1LmNvbSIsImFpZCI6IjAiLCJob3N0IjoibWFsYXlzaWEtdmlwLmpzdG9wb2sudGsiLCJpZCI6IjVkY2IyMGVlLTg0MjktMTFlYi05YTJlLTAwMTYzZTAwMTI4OCIsIm5ldCI6IndzIiwicGF0aCI6Ii9BOU9tcVBLdC8iLCJwb3J0IjoiODAiLCJwcyI6IjEgVEFIVU4gVjJSQVkgSlNURlJFRU5FVCIsInRscyI6IiIsInR5cGUiOiIiLCJ2IjoiMiJ9


BY _@JSTFREENET_

*SGDC-BOT*
`.trim()) 

handler.command = /^(v2rayimclass|vmessimclas)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

