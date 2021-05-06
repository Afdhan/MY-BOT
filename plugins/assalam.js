let util = require('util')
let path = require('path')
let toPTT = require("../lib/converter");
let { spawn } = require('child_process')

let handler = async (m, { conn, args }) => m

let assalam = /^(p|punten|permisi|samlekom|hai|halo|hallo)$/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isASalam = assalam.exec(m.text)
  //let user = m.sender
  let vnn ='src/SALAM.opus'
  let toPTT = require("../lib/converter");
  let vn = await toPTT(vnn, true)
  //m.reply('_Waalaikumsalam Kak @${user.split("@")[0]} :)_')
  if (isASalam) conn.sendFile(m.chat, vnn, 'Assaalamualaikum.opus', null, m, true)
  return true
}

module.exports = handler

// MUHAMMAD AFDHAN
