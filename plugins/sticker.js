const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler  = async (m, { conn, args, command }) => {
   await m.reply(global.wait)
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw '_Tipe Tidak Diketahui!_'
      stiker = await sticker(img, false, global.packname, global.author)
    } else if (args[0]) stiker = await sticker(false, args[0], global.packname, global.author)
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
   else throw '_Terjadi Kesalahan Pada Saat Mengonversi!_'
    }
  }
   } catch (e) {
  	m.reply('```Error```')
  }
}

handler.command = /^(s(tic?ker)?(gif)?|s)$/i

module.exports = handler

