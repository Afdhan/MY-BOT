let axios = require("axios");
let MessageType = require("@adiwajshing/baileys");
let { image } = MessageType
let CreateLink = require('../lib/CreateLink')
let handler = async (m, { conn, args, text }) => {
let data = Object.entries(global.DATABASE._data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
let dia = data.map(toNumber('number')).sort(sort('number'))
let makhluk = dia.map(enumGetKey)
let out = dia.slice(0).map(({ jid }) => `*>* @${jid.split`@`[0]}`).join`\n`

//let tes = await CreateLink(user, text)
m.reply(out, {
    contextInfo: {
      mentionedJid: [...makhluk.slice(0)]
    }
  })
}
handler.command = /^(tes)$/
module.exports = handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
