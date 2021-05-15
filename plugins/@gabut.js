let axios = require("axios");
let MessageType = require("@adiwajshing/baileys");
let { image } = MessageType
let CreateLink = require('../lib/CreateLink')
let handler = async (m, { conn, args, text }) => {
let data = Object.values(global.DATABASE._data.users[m.sender]).filter(user => user.number)
let out = `*DATA USERS*`
	for (let i = 0; i < data.length; i++) {
       out += `${data[i]}\n`
    }
//let tes = await CreateLink(user, text)
m.reply(`${out}`)
}
handler.command = /^(tes)$/
module.exports = handler
