const uploadImage = require('../lib/uploadImage') 
const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, text, command }) => {
  m.reply(global.wait)
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  //let url = await uploadImage(img)
  let res = await fetch('https://storage.naufalhoster.xyz', {
        method: 'POST',
        body: img
  })
  let link = res.result.image
  let ress = await axios.get(`https://lolhuman.herokuapp.com/api/filter/${command}?apikey=oniichan&img=${link}`)
  let oo = ress.data
   conn.sendMessage(m.chat, oo, MessageType.image, {
    quoted: m, caption: `*SGDC-BOT*`
  })
 } catch (e) {
   m.reply("```ERROR```")
  }
}

handler.command = [
'lofi',
'1977',
'aden',
'moon',
'kelvin',
'lark',
'maven',
'mayfair',
'earlybird',
'brannan',
'brooklyn',
'clarendon',
'gingham',
'hudson',
'inkwell',
'nashville',
'perpetua',
'reyes',
'rise',
'slumber',
'stinson',
'toaster',
'valencia',
'walden',
'willow',
'xpro2',
]

module.exports = handler