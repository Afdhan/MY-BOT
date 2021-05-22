let handler = async m => m.reply(`
*V2RAY ISAT OPOK AKTIF 1 TAHUN*

vmess://eyJhZGQiOiJjb3ZpZDE5LmdvLmlkIiwiYWlkIjoiMCIsImhvc3QiOiJtYWxheXNpYS12aXAuanN0b3Bvay50ayIsImlkIjoiNWRjYjIwZWUtODQyOS0xMWViLTlhMmUtMDAxNjNlMDAxMjg4IiwibmV0Ijoid3MiLCJwYXRoIjoiL0E5T21xUEt0LyIsInBvcnQiOiI4MCIsInBzIjoiIiwidGxzIjoiIiwidHlwZSI6IiIsInYiOiIxIn0=


BY _@JSTFREENET_

*SGDC-BOT*
`.trim()) 

handler.command = /^(v2rayopok|v2rayisat(opok)|v2rayopok(isat))$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
