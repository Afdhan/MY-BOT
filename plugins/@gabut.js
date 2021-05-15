let axios = require("axios");
let MessageType = require("@adiwajshing/baileys");
let { image } = MessageType
let kntl = require("../src/kntl.json")
let fetch = require('node-fetch')
let CreateLink = require('../lib/CreateLink')
let handler = async (m, { conn, args, text, command }) => {
    let api = (kntl.lolkey)
    if (!text) return m.reply("_Masukkan Link XNXX_")
  try {
let res = await fetch(`https://api.lolhuman.xyz/api/xnxx?apikey=${api}&url=${text}`)
let json = await res.json()
let data = json.result
let url = data.link

let txt = `
*Title:* ${data.title}
*Duration:* ${data.duration}
*views:* ${data.view}
*Rating:* ${data.rating}
*Like:* ${data.like}
*Dislike:* ${data.dislike}
*Comment:* ${data.comment}
*tag:* ${data.tag.join(",")}
*Description:* ${data.description}

*LINK*
${url}
`.trim()
for (let x of url) {
      txt += `${x.type} - ${x.link}\n\n`
 }
      let ress = await fetch(data.thumbnail)
      let thum = await ress.buffer()
      conn.sendFie(m.chat, thum, txt, m)
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
