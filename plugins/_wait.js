const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType, Mimetype } = require("@adiwajshing/baileys")
let handler = async (m, { conn, usedPrefix}) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `_Kirim Foto Dengan Caption *${usedPrefix}wait* Atau Reply Foto Yang Sudah Terkirim!_`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support!`
  let img = await q.download()
  await m.reply(global.wait)
  let anime = `data:image/jpeg;base64,${img.toString('base64')}`
  let response = await fetch("https://trace.moe/api/search", {
                 method: "POST",
                 body: JSON.stringify({ image: anime }),
                 headers: { "Content-Type": "application/json" }})
  if (!response.ok) throw 'Content Tidak Ditemukan!'
  let result = await response.json()
  let { is_adult, title, title_chinese, title_romaji, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
  let link = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`
  let SGDC = `
${similarity < 0.89 ? '_SGDC BOT Tidak Sepenuhnya Yakin Akan Hal Ini_' : ''}

*>* Judul Jepang: *${title}*
*>* Ejaan Judul: *${title_romaji}*
*>* Similarity: *${(similarity * 100).toFixed(1)}%*
*>* Episode: *${episode.toString()}*
*>* Ecchi: *${is_adult ? 'YES' : 'NO'}*

*SGDC-BOT*
`.trim()
  conn.sendFile(m.chat, link, 'Hasil_SGDCBOT.mp4', `${SGDC}`, m)
}

handler.command = /^(wait|srchanime)$/i

module.exports = handler
