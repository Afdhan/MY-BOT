const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler  = async (m, { conn, args, text }) => {
  let [kontol, memek] = text.split `|`
  if (!kontol) return m.reply('_Masukkan Nama Packname_')
  if (!memek) return m.reply('_Masukkan Nama Author_')
  let stiker = false
  try {
  	await m.reply(global.wait)
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw '_Media Tidak Ditemukan!_'
      stiker = await sticker(img, false, kontol, memek)
    } else if (args[0]) stiker = await sticker(false, args[0], kontol, memek)
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw '```Error```'
  }
}


handler.command = /^(take(stic|stik)er|take(stic)?|s(tic?ker)wm|sticwm)$/i

handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

//  MUHAMMAD AFDHAN

module.exports = handler
