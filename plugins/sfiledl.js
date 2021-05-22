let axios = require("axios");
let kntl = require("../src/kntl.json")
let handler = async(m, { conn, args, usedPrefix, text }) => {
  let api = (kntl.xteam)
 if(args.length == 0) return m.reply(`Cara Penggunaan Fitur Sfile Downloader, *${usedPrefix}sfiledl (ext) (url)*\n\nContoh: *${usedPrefix}sfiledl hc https://sfile.mobi/taikucing*`)
 if(!args[0] || args[0].startsWith('https://')) return m.reply('_Masukkan Extensi File!_')
 //if(args[0] != 'hc' || args[0] != 'ehi' ||  args[0] != 'hi' || args[0] != 'npv2') return m.reply('```Ekstensi File Tidak Didukung!```')
 if(!args[1] || !args[1].startsWith('https://sfile.mobi/')) return m.reply('_Masukkan Link Sfile!_')
   await m.reply(global.wait)
  try {
  axios.get(`https://api.xteam.xyz/dl/sfiledl?url=${args[1]}&APIKEY=${api}`).then ((res) => {
  conn.reply(m.chat, `
*Title:* ${res.data.result.title}
*Size:* ${res.data.result.size}
*Extensi Changed:* .${args[0]}
*Link:* ${res.data.result.downloadURL}

_Download Sendiri, Jangan Manja :v_

File Dikirim Dengan Delay 5 Detik

*SGDC-BOT*
`.trim(), m)
   let ext
   if(args[0] == 'hc') ext = '.hc'
   else if(args[0] == 'ehi' || args[0] == 'hi') ext = '.ehi'
   else if(args[0] == 'npv2') ext = '.npv2'
   else if(args[0] == 'ktr') ext = '.ktr'
   else if(args[0] == 'tls') ext = '.tls'
   else if(args[0] == 'epro') ext = '.epro'
   else if(args[0] == 'pdf') ext = '.pdf'
   else if(args[0] == 'zip') ext = '.zip'
   else setTimeout(() => {
	m.reply(`
File Tidak Dikirim! Ekstensi File Tidak Didukung.
_Silahkan Download Melalui Link Diatas!_

Extensi Yang Didukung:
> .hc
> .ehi
> .npv2
> .ktr
> .tls
> .epro
> .pdf
> .zip

*SGDC-BOT*
`.trim())
     }, 5000)
   let bct = res.data.result.title
   let ajg = res.data.result.downloadURL
   if(ext) setTimeout(() => {
	   conn.sendFile(m.chat, ajg, 'SGDC-BOT || ' + bct + ext, 'ini', m)
	}, 5000)
   })
 } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(sfiledl)$/i

module.exports = handler
