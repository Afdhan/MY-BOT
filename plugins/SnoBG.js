const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const { MessageType } = require('@adiwajshing/baileys')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { exec } = require('child_process')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
/*let user = global.DATABASE._data.users[m.sender]
if (user.prems) {*/
  try {

  await m.reply('_Sedang Membuat... Mohon tunggu sekitar 1 menit_')
    const type = Object.keys(m.message)[0]
    const content = JSON.stringify(m.message)
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    const isAudio = type === 'audioMessage'
    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
    /*if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
      const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
      const media = await conn.downloadAndSaveMediaMessage(encmedia)
      const ran = getRandom('.webp')
      await ffmpeg(`./${media}`)
        .input(media)
        .on('start', function (cmd) {
          console.log(`Started : ${cmd}`)
        })
        .on('error', function (e) {
          console.log(`Error : ${e}`)
          fs.unlinkSync(media)
          m.reply('Ada yang Error!')
        })
        .on('end', function () {
          console.log('Finish')
          buff = fs.readFileSync(ran)
          conn.sendMessage(m.chat, buff, MessageType.sticker, { quoted: m })
          fs.unlinkSync(media)
          fs.unlinkSync(ran)
        })
        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
        .toFormat('webp')
        .save(ran)
    } else if ((isMedia && m.message.videoMessage.seconds < 11 || isQuotedVideo && m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
      const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
      const media = await conn.downloadAndSaveMediaMessage(encmedia)
      const ran = getRandom('.webp')
      await ffmpeg(`./${media}`)
        .inputFormat(media.split('.')[1])
        .on('start', function (cmd) {
          console.log(`Started : ${cmd}`)
        })
        .on('error', function (e) {
          console.log(`Error : ${e}`)
          fs.unlinkSync(media)
          tipe = media.endsWith('.mp4') ? 'video' : 'gif'
          m.reply(`Gagal, pada saat mengkonversi ${tipe} ke stikergif, pastikan berdurasi dibawah 10 detik`)
        })
        .on('end', function () {
          console.log('Finish')
          buff = fs.readFileSync(ran)
          conn.sendMessage(m.chat, buff, MessageType.sticker, { quoted: m })
          fs.unlinkSync(media)
          fs.unlinkSync(ran)
        })
        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
        .toFormat('webp')
        .save(ran)
    } else if ((isMedia && !m.message.videoMessage || !isQuotedImage || isQuotedImage) && text == 'nobg') {
      const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
      const media = await conn.downloadAndSaveMediaMessage(encmedia)
      ranw = getRandom('.webp')
      ranp = getRandom('.png')
      await removeBackgroundFromImageFile({ path: media, apiKey: "ku7CybpBNXacsoWMyeZeLGQq", size: 'auto', type: 'auto', ranp }).then(res => {
        fs.unlinkSync(media)
        let buffer = Buffer.from(res.base64img, 'base64')
        fs.writeFileSync(ranp, buffer, (e) => {
          if (e) return m.reply('Gagal, Terjadi kesalahan!')
        })
        exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (e) => {
          fs.unlinkSync(ranp)
          if (e) return m.reply('Ada yang Error!')
          buff = fs.readFileSync(ranw)

          conn.sendMessage(m.chat, buff, MessageType.sticker, { quoted: m })
        })
        // fs.unlinkSync() wah gatau gmn cara ngapusnya :/
      })
        //      await m.reply('Nihh Stikernya')
    } else {
      m.reply(`Kirim Perintah ${usedPrefix + command} dengan caption di video/gambar atau reply video/gambar yang sudah terkirim`)
    }
  } catch (e) {
    console.log(e)
  }
 //   } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*'
}*/
    if (isQuotedAudio) {
          let req = args.join(' ')
          const encmedia = JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo 
          const media = await mans.downloadAndSaveMediaMessage(encmedia)
          const ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return m.reply('Error!') 
           let hah = fs.readFileSync(ran)
               conn.sendMessage(m.chat, hah, MessageType.audio, { mimetype: 'audio/mp4', ptt:true, quoted: m })
     })
   }
  }catch(e){
    console.log(e)
    }
  }
handler.command = /^(sgif2|snobg)$/i

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

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}
