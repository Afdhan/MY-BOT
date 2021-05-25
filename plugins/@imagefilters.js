const { uploadImage: upp } = require('../lib/uploadImage')
const uploadimg = require("../lib/uploadimg")
const { imgbb } = require('imgbb-uploader')
const kntl = require("../src/kntl.json")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await m.reply(global.wait)
  var imgbb = require('imgbb-uploader')
  let api = (kntl.imgbb)
try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let data = await upp(img)
  let stick = `https://some-random-api.ml/canvas/${command}?avatar=${data.display_url}`
  await conn.sendFile(m.chat, stick, "SGDC-BOT.jpg", "*SGDC-BOT*",  m)
  let stiker = await sticker(null, stick, global.packname, global.author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
} catch (e) {
  m.reply('```ERROR```')
  console.log(e)
  }
}


handler.command = [
'greyscale',
'invert',
'brightness',
'threshold',
'sepia',
'red',
'green',
'blue',
'blurple',
'pixelate',
'blur',
]

module.exports = handler
