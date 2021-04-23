const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`Url: ${link}
Ukuran File: ${media.length} Bytes
Ekspires: ${isTele ? 'No Expiry Date' : '1 Time Use + Expired in 1 Week)'}`)
}

handler.command = /^(up(load)?|tourl)$/i

module.exports = handler
