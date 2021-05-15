let axios = require("axios");
let MessageType = require("@adiwajshing/baileys");
let { image } = MessageType
let CreateLink = require('../lib/CreateLink')
let handler = async (m, { conn, args, text }) => {
let user = Object.values(global.DATABASE._data.users).number
//let tes = await CreateLink(user, text)
m.reply(user)
}
handler.command = /^(tes)$/
module.exports = handler
