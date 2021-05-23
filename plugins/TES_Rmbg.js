let request = require("request")
let fs = require("fs")
let uploadimg = require("../lib/uploadimg")
let kntl = require("../src/kntl.json")
let handler  = async (m, { conn, args, command }) => {
	let api = (kntl.rmbg)
   await m.reply(global.wait)
   try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
    	let file_name = getRandom('.png')
    	let img = await q.download()
        let imag = await uploadimg(img)
     await request({
      	url: `https://api.remove.bg/v1.0/removebg`,
          method: 'POST',
          formData: {
          image_url: imag,
          size: 'auto',
        },
      headers: {
           'X-Api-Key': `${api}`
       },
      encoding: "binary"
      }, function(error, response, body) {
                            fs.unlinkSync(img)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            conn.sendMessage(m.chat, ini_buff, MessageType.image, { quoted: m, caption: '*SGDC-BOT*' })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Tag Stickernya!`)
                  }
               }catch (e){
		  console.log(e)
               	m.reply('Error')
               }
         }
         
handler.command = /^remove$/i
module.exports = handler
         
const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
