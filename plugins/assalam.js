let util = require('util')
let path = require('path')
let toPTT = require("../lib/converter");
let { spawn } = require('child_process')

let handler = async (m, { conn, args }) => {
//let user = m.sender
  let vnn ='src/SALAM.opus'
  let toPTT = require("../lib/converter");
  let vn = await toPTT(vnn, true)
  //m.reply('_Waalaikumsalam Kak @${user.split("@")[0]} :)_')
  conn.sendFile(m.chat, vn, 'Assaalamualaikum.opus', null, m, true)
}
handler.command = new RegExp
handler.customPrefix = /^(p(unten|ermisi)?|samlekom|hai|halo|hallo)$/i
module.exports = handler

// MUHAMMAD AFDHAN
