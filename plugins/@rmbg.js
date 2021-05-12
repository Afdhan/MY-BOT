const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const { removeBackgroundFromImageFile: _Rmbg } = require('remove.bg')
const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')
const { fromBuffer } = require('file-type')
const kntl = require("../src/kntl.json");
let handler  = async (m, { conn, args, command }) => {
   await m.reply(global.wait)
  let stiker = false
  try {
    let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted }} : m
    if (/image/.test((m.quoted ? m.quoted : m.msg).mimetype || '')) {
      let img = await q.download()   //conn.downloadM(q)
      if (!img) throw '_Tipe Tidak Diketahui!_'
      let api = (kntl.rmbg)
      let inp = path.join(tmp, + new Date + '.jpeg')
      let png = inp + '.png'
      let out = png + '.webp'
      await _Rmbg({ path: media, apiKey: api, size: 'auto', type: 'auto', png }).then(res => {
      	fs.unlinkSync(img)
        let buffer = Buffer.from(res.base64img, 'base64')
        fs.writeFileSync(png, buffer, (e) => {
          if (e) return m.reply('Gagal, Terjadi Kesalahan Pada Saat Removing Background!')
        })
      fs.writeFileSync(inp, img)
      spawn('ffmpeg', [
        '-y',
        '-i', inp,
        '-vf', 'scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1',
        png
      ])
      .on('error', reject)
      .on('close', () => {
        fs.unlinkSync(inp)
        spawn('convert', [png, out])
        .on('error', reject)
        .on('close', () => {
          fs.unlinkSync(png)
          resolve(fs.readFileSync(out))
          if (e) return m.reply('Gagal, Terjadi KeslahanPada Saat Mengonversi Media Ke Sticker!') console.log (e)
          let buff = fs.unlinkSync(out)
          if (buff) conn.sendMessage(m.chat, buff, MessageType.sticker, { quoted: m })
        })
      })
     }
    }  catch (e) {
    	m.reply ("```ERROR``` _Conversation Full Failed_")
    console.log (e)
    }
  }
handler.command = /^(sbg)$/i

module.exports = handler
