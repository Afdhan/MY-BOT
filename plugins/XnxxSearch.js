let fetch = require("node-fetch")
let axios = require("axios")
let kntl = require("../src/kntl.json")
let handler = async (m, { conn, text }) => {
  let api = (kntl.lolkey)
  let chat = global.DATABASE.data.chats[m.chat]
   if (chat.nsfw) { 
      if (!text) return m.reply("_Masukkan Kata Kunci!_")
      await m.reply(global.wait)
     try {
      let res = await axios.get(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${api}&query=${text}`)
      let json = res.data
      //let ress = json.result
      let hsl = `*XNXX SEARCH*\n\n`
      for (let i = 0; i < json.result.length; i++) {
           hsl += `*Title:* ${json.result[i].title}\n`
           hsl += `*Views:* ${json.result[i].views}\n`
           hsl += `*Duration:* ${json.result[i].duration}\n`
           hsl += `*Uploader:* ${json.result[i].uploader}\n`
           hsl += `*Link:*\n${json.result[i].link}\n\n`
         }
           hsl += '*SGDC-BOT*'
        conn.reply(m.chat, hsl, m)
    }catch(e){
        m.reply("ERROR")
        console.log(e)
     }
    } else {
       m.reply('```Perlu Mengaktifkan Mode NSFW```')
    }
   }
handler.command = /^(xnxxsearch|searchxnxx|xnxx)$/
handler.premium = true
module.exports = handler
