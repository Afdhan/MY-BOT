const { MessageType } = require('@adiwajshing/baileys')
const { sticker: TES } = require('../lib/sticker')
const util = require('util')
let handler = async (m, { conn, text, args }) => {
let stiker = false
  try {
	let q = { message: { [m.quoted.mtype]: m.quoted }}
	if (!m.quoted) return m.reply('Tag Stickernya!')
	if (m.quoted != /sticker/.test(m.quoted.mtype)) return m.reply('Sticker Aja Tod!')
	if (/sticker/.test(m.quoted.mtype)) {
    let stick = await conn.downloadM(q)
    if (!stick) throw "Sticker Tidak Ditemukan!"
	let users = participants.map(u => u.jid)
	stiker = await TES(stick, false, global.packname, global.author)
	if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, { 
               quoted: m 
              }, { 
                 contextInfo: { 
                           mentionedJid: users 
               }
          })
          else throw '_Gagal Mengambil ContextInfo!_'
       }
   } catch (e) {
   	m.reply('```Error```')
   console.log ('Error\n\n' + e)
   }
}
handler.command = /^(s(tag|tickertag|tikertag))$/
module.exports = handler

// Muhammad Afdhan
