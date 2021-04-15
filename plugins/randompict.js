let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
	if (!text) return m.reply('_Masukkan Teks!_')
    await m.reply(global.wait)
  try{
    let url = "https://api.fdci.se/rep.php?gambar=" + text
    let str = `
*SGDC-BOT*
`.trim()
    
    axios.get(url)
      .then((result) => {
        let b = JSON.parse(JSON.stringify(result.data));
        let pict =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(pict) 
        .then(
            (response) => {
	let buf = Buffer.from(response, 'base64'); 
    
    conn.sendFile(m.chat, buf, 'SGDC-BOT.jpg', str, m)
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
      } catch (e) {
   m.reply('```Error```')
  }
} 

handler.command = /^(pict|randompict)$/i

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