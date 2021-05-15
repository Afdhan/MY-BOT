let axios = require("axios");
let MessageType = require("@adiwajshing/baileys");
let { image } = MessageType
let CreateLink = require('../lib/CreateLink')
let handler = async (m, { conn, args, text }) => {
let user = m.sender
let tes = await CreateLink(user, text)
m.reply(tes)
}
handler.command = /^(tes)$/
module.exports = handler
