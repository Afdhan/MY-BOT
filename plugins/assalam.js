let { MessageType, Presence, mimetype } = require('@adiwajshing/baileys')
let { exec } = require('child_process');
let ffmpeg = require('fluent-ffmpeg');
let fetch = require('node-fetch');
let ftype = require('file-type');
let util = require('util');
let path = require('path');
let fs = require('fs');


let handler = async (m, { conn, args }) => {
  let media = await conn.getFile('./src/SALAM.m4a')
  let ran = getRandom('.opus')
   exec(`ffmpeg -i ${media} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return
              let ptt = fs.readFileSync(ran)
 conn.sendFile(m.chat, ptt, 'salam.opus', '', m, false, { ptt: true })
     fs.unlinkSync(ran)
       })
}
handler.command = new RegExp
handler.customPrefix = /^(p(unten|ermisi)?|samlekom|hai|halo|hallo)$/i
module.exports = handler

// MUHAMMAD AFDHAN
const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}