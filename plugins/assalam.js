let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler = async (m, { conn, args }) => m

let assalam = /^(p|punten|permisi|samlekom|hai|halo|hallo)$/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isASalam = assalam.exec(m.text)
  let vnn ='src/ASSALAM.m4a'
  if (isASalam) conn.sendFile(m.chat, vnn, 'Assaalamualaikum.m4a','salam', m)
  return true
}

module.exports = handler

// MUHAMMAD AFDHAN
