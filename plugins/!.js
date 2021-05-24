const { uploadimg: imag } = require("../lib/uploadimg")
let handler = async (m, { conn, text, args }) => {
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''

    //if (/image|video/.test(mime)) {
      let img = await q.download()
    //  if (!img) throw '_Tipe Tidak Diketahui!_'
      let hasil = await imag(img)
      m.reply('link: ' + hasil)
    }catch(e){
      console.log (e)
    }
}
handler.command = /^tes$/i
module.exports = handler
