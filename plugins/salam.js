let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler = async (m, { conn, args }) => m

let salam = /^(assalamualaikum|asalamualaikum|assalamualikum|salamualaikum|salam|assallamuallaikum)$/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isSalam = salam.exec(m.text)
  let vn ='src/SALAM.m4a'
  if (isSalam) conn.sendFile(m.chat, vn, 'Waalaikumsalam.m4a','salam', m)
  return true
}

module.exports = handler
