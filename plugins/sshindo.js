let util = require('util')
let path = require('path')

let { spawn } = require('child_process')


let handler = async (m, { conn, args }) => {
/*  let sshindo ='src/ssh1.jpg'
  await m.reply('*[ WAIT ]* _Media Sedang Dikirim..._')
  conn.sendFile(m.chat, sshindo, 'AkunSsh.jpg','Bagi Akun SSH Mbah!, Buat Gantiin Yg Ini', m)*/
  m.reply('*SSH BELUM UPDATE!*')
}

handler.command = /^(sshindo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


