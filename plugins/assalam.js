let util = require('util')
let path = require('path')
let fs = require("fs")
let Mimetype = require("@adiwajshing/baileys")
const { toAudio, toPTT, toVideo } = require('./lib/converter')
let { spawn } = require('child_process')

let handler = async (m, { conn, args }) => {
  let pok = './src/SALAM.opus'
  let vn = await toPTT(pok, pok.ext)
conn.sendFile(m.chat, vn, 'SGDC-BOT.opus', null, m, true, {
  type: 'audioMessage', // paksa tanpa convert di ffmpeg
  ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
  })
}
handler.command = new RegExp
handler.customPrefix = /^(p(unten|ermisi)?|samlekom|hai|halo|hallo)$/i
module.exports = handler

// MUHAMMAD AFDHAN
