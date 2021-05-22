let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
 try {
    await m.reply(global.wait)
    let items = ["cewe imut berhijab", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang"];
    let cewe = items[Math.floor(Math.random() * items.length)];
    let url = "https://api.fdci.se/rep.php?gambar=" + encodeURIComponent(cewe);
    let str = `
Jangan Ngaceng :v

*SGDC-BOT*
`.trim()
    
    axios.get(url)
      .then((result) => {
        let b = JSON.parse(JSON.stringify(result.data));
        let cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek)
        .then(
            (response) => {
	let buf = Buffer.from(response, 'base64');

    conn.sendFile(m.chat, buf, 'Cangtip.jpg', str, m)
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

handler.command = /^(cewek|cecan|ciwi|ciwey)$/i
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