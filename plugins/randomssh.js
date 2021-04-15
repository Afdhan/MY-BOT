let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
//  let isEnable = /true|enable|(turn)?on/i.test(command)
let handler  = async (m, { conn, args, usedPrefix, command, isOwner, text }) => {
   if (command == 'ssh' || command == 'randomssh' || command == 'random') {
   let items = (global.ssh)
   let sss = items[Math.floor(Math.random() * items.length)];
   conn.reply(m.chat, `${sss}\n\n*SGDC-BOT*`, m)
   } else if (command == 'addssh') {
  if (!isOwner) return m.reply('```Lah Ngatur?!```')
  let txt = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
  await (global.ssh.push(txt))
  conn.reply(m.chat, '_Berhasil Menambahkan SSH Di Database!_', m)
      } else throw '```Bengek xD...```'
  }
  
handler.command = /^(addssh|ssh|random(ssh)?)$/i

module.exports = handler

global.ssh = [
'Terimakasih Telah Menggunakan Layanan Kami\nInformasi Akun SSH & OpenVPN\nUsername       : sgdcbot\nPassword       : random\n===============================\nHost           : 137.116.144.40\nOpenSSH        : 22\nDropbear       : 109, 110, 143, 456\nSSL/TLS        : 222, 443, 777, 990\nPort Squid     : 80, 3128, 8080 (limit to IP SSH)\nOpenVPN        : TCP 1194 http://137.116.144.40:81/client-tcp-1194.ovpn\nOpenVPN        : UDP 2200 http://137.116.144.40:81/client-udp-2200.ovpn\nOpenVPN        : SSL 442 http://137.116.144.40:81/client-tcp-ssl.ovpn\nbadvpn         : 7100-7300\n===============================\nAktif Sampai   : May 09, 2021\nScript by Horasss\nroot@ferri02:~#\n\nThanks To @NEZAVPN',
'Premium SSH Information\n===========================\nIP / Host : 23.101.228.24\nDomain    : neza.londodeso.xyz\nUsername  : sgdc\nPassword  : bot\nOpenSSH   : 22\nStunnel   : 443,990\nDropbear  : 110,143\nSquid     : 8080,3128\nBadVPN    : 7100-7200-7300\nCreated   : 09-04-2021\nExpired   : 09-05-2021\n===========================\n\nThanks To @NEZAVPN',
'Premium SSH Information\n===========================\nIP / Host : 23.101.228.24\nDomain    : neza.londodeso.xyz\nUsername  : bot\nPassword  : sgdc\nOpenSSH   : 22\nStunnel   : 443,990\nDropbear  : 110,143\nSquid     : 8080,3128\nBadVPN    : 7100-7200-7300\nCreated   : 09-04-2021\nExpired   : 09-05-2021\n===========================\nScript By Wildy Sheverando\n\nThanks To @NEZAVPN',
]
