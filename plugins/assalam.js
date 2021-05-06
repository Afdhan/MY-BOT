let util = require('util')
let path = require('path')
let fs = require("fs")
let convert = require("../lib/converter");
let { spawn } = require('child_process')

let handler = async (m, { conn, args }) => {
//let user = m.sender
  /*let vnn ='src/SALAM.m4a'
  let toPTT = convert.toPTT
  let vn = await toPTT(vnn, vnn)*/
  //m.reply('_Waalaikumsalam Kak @${user.split("@")[0]} :)_')
  conn.sendFile(m.chat, './src/SALAM.opus', 'Assaalamualaikum.opus', null, m, { PTT: true })
}
handler.command = new RegExp
handler.customPrefix = /^(p(unten|ermisi)?|samlekom|hai|halo|hallo)$/i
module.exports = handler

// MUHAMMAD AFDHAN
