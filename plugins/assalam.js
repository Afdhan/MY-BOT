let util = require('util')
let path = require('path')
let fs = require("fs")
let MessageType = require("@adiwajshing/baileys")
const { toAudio, toPTT, toVideo } = require('../lib/converter')
let { spawn } = require('child_process')

let handler = async (m, { conn, args }) => {
  let type = await conn.getFile('./src/SALAM.m4a')
  let { res, data: file } = type
  let vn = await toPTT(file, type.ext)
  if (res && res.status !== 200 || file.length <= 65536) {
        try { throw { json: JSON.parse(file.toString()) } }
        catch (e) { if (e.json) console.log(e.json) }
      }
conn.sendMessage(m.chat, vn, MessageType.audio, { quoted: m }) 
 /* type: 'audioMessage', // paksa tanpa convert di ffmpeg
  ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
  })*/
}
handler.command = new RegExp
handler.customPrefix = /^(p(unten|ermisi)?|samlekom|hai|halo|hallo)$/i
module.exports = handler

// MUHAMMAD AFDHAN
