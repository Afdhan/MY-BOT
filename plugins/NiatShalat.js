let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.tbotkey)
   try{   
   	     await m.reply(global.wait)
            axios.get(`https://xnxx-tbot.herokuapp.com/api/muslim/niatshalat?apikey=${api}`).then ((res) => {
                let meme = `*「  NIAT SHOLAT  」*\n\n`
                for (let i = 0; i < res.data.result.length; i++) {
                    meme += `───────────────────\n\n*~ Nama:* ${res.data.result[i].name}*\n*~ Arab:*\n${res.data.result[i].arabic}\n*~ Latin:*\n${res.data.result[i].latin}\n`
                }
                    meme += '\n\n*SGDC-BOT*'
                 conn.reply(m.chat, meme, m)
	  })
  } catch (e) {
   m.reply('```Error```')
  }
}
handler.command = /^(niatshalat|niatsholat|niatsolat)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

//  MUHAMMAD AFDHAN
