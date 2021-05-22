let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler = async (m, { conn, args }) => m

let salam = /^(assalamualaikum|asalamualaikum|assalamualikum|salamualaikum|salam|assallamuallaikum)$/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return
  let chat = global.DATABASE.data.chats[m.chat]
  let isSalam = salam.exec(m.text)
  let user = m.sender
  //let vn ='src/SALAM.m4a'
  if (isSalam) conn.reply(m.chat, `_Waalaikumsalam Kak @${user.split("@")[0]} :)_`, m, { contextInfo: { mentionedJid: [user] }}) 
  return true
}

module.exports = handler
