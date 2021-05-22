let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
 try {
    await m.reply(global.wait)
    let items = ["cowok idaman", "cowo ganteng", "cowok ganteng", "korean boy", "artis cowok korea", "cowok korea", "cowok jepang"];
    let cowo = items[Math.floor(Math.random() * items.length)];
    let url = "https://api.fdci.se/rep.php?gambar=" + encodeURIComponent(cowo);
    let str = `
 *SGDC-BOT*
`.trim()
    
    axios.get(url)
      .then((result) => {
        let b = JSON.parse(JSON.stringify(result.data));
        let cowok =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cowok)
        .then(
            (response) => {
	let buf = Buffer.from(response, 'base64');

    conn.sendFile(m.chat, buf, 'JanganGay.jpg', str, m)
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

handler.command = /^(cogan|cowok)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

// MUHAMMAD AFDHAN