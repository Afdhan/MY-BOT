let util = require('util')
let path = require('path')

let { spawn } = require('child_process')


let handler = async (m, { conn, args }) => {
/*  let sshindo ='src/ssh1.jpg'
  await m.reply('*[ WAIT ]* _Media Sedang Dikirim..._')
  conn.sendFile(m.chat, sshindo, 'AkunSsh.jpg','Bagi Akun SSH Mbah!, Buat Gantiin Yg Ini', m)*/
  m.reply('Fitur Ini Udah Mau Dihapus')
}

handler.command = /^(sshindo)$/i

module.exports = handler


