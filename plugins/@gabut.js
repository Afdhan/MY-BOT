let axios = require("axios");
let MessageType = require("@adiwajshing/baileys");
let { image } = MessageType
let kntl = require("../src/kntl.json")
let fetch = require('node-fetch')
let CreateLink = require('../lib/CreateLink')
let handler = async (m, { conn, args, text, command }) => {
    let api = (kntl.lolkey)
    let chat = global.DATABASE.data.chats[m.chat]
    if (chat.nsfw) { 
    if(command == 'xnxx' || command == 'xnxxdl') {
    if (!text) return m.reply("_Masukkan Link XNXX_")
        await m.reply(global.wait)
  try {
let res = await fetch(`https://api.lolhuman.xyz/api/xnxx?apikey=${api}&url=${text}`)
let json = await res.json()
let data = json.result
let url = data.link
/*for (let x of data.link) {
     url += x.type} x.link + '\n\n'
 }*/

let txt = `
*Title:* ${data.title}
*Duration:* ${data.duration}
*views:* ${data.view}
*Rating:* ${data.rating}
*Like:* ${data.like}
*Dislike:* ${data.dislike}
*Comment:* ${data.comment}
*Tag:* ${data.tag.join(", ")}
*Description:* ${data.description}

*DOWNLOAD*
`.trim()

for (let i = 0; i < data.link.length; i++) {
    txt += `\nType: ${data.link[i].type}\n`
    txt += `Link: ${data.link[i].link}\n`
   }
    txt += '\n*SGDC-BOT*'
      //let ress = await fetch(data.thumbnail)
     // let thum = await ress.buffer()
      //await m.reply(txt)
      conn.sendFile(m.chat, data.thumbnail, "STOPCOLY.jpg", txt, m)
      }catch(e){
          m.reply ("ERROR")
          console.log (e)
       }
    } else if (command == 'xnxxsearch' || command == 'searchxnxx') {
      if (!text) return m.reply("_Masukkan Kata Kunci_")
      await m.reply(global.wait)
     try {
      let res = await fetch(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${api}&query=${text}`)
      let json = res.json()
      let ress = json.result
      let hsl = `*[ XNXX SEARCH ]*\n\n`
      for (let i = 0; i < ress.length; i++) {
           hsl += `*Title:* ${ress[i].title}\n`
           hsl += `*Views:* ${ress[i].views}\n`
           hsl += `*Duration:* ${ress[i].duration}\n`
           hsl += `*Uploader:* ${ress[i].uploader}\n`
           hsl += `*Download:*\n${ress[i].link}\n`
         }
           hsl += '\n*SGDC-BOT*'
        conn.reply(m.chat, hsl, m)
    }catch(e){
        m.reply("ERROR")
        console.log(e)
     }
    }
   } else {
       m.reply('```Perlu Mengaktifkan Mode NSFW```')
    }
 }
handler.command = /^(tes)$/
module.exports = handler

//M AFDHAN
