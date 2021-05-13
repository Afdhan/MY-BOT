const { removeBackgroundFromImageFile: Hapus } = require('remove.bg');
const { MessageType } = require('@adiwajshing/baileys');
const fetch = require('node-fetch');
const chalk = require('chalk');
const request = require('request');
const fs = require('fs');
const kntl = require("../src/kntl.json");
const path = require('path');
const { spawn } = require('child_process');
const { fromBuffer } = require('file-type');
const FormData = require('form-data');

let handler  = async (m, { conn, args, usedPrefix }) => {
  await m.reply('Sedang Membuat..  Mohon tunggu sebentar.')
  let stiker = false
  try {
    let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted }} : m
    if (/image/.test((m.quoted ? m.quoted : m.msg).mimetype || '')) {
      let img = await conn.downloadM(q)
      if (!img) throw img      
      let tmp = path.join(__dirname, '../tmp')
      let ranw = getRandom('.webp')
      let ranp = getRandom('.png')
      let buf = await Eraser(img)
      await conn.sendMessage(m.chat, buf, MessageType.image, { quoted: m })
      //Hapus({ path: img, apiKey: (kntl.rmng), size: 'auto', type: 'auto', ranp })
      stiker = await sticker2(buf)
    } else if (args[0]) stiker = await sticker2(false, args[0])
      else {
      m.reply(`Kirim Perintah ${usedPrefix}stiker dengan caption di gambar atau reply gambar yang tersedia.`)
    }
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
}

handler.command = /^sbg$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}

const Eraser = async (buffer) => new Promise(async (resolve, reject) => {
let kntl = require("../src/kntl.json")
let API = (kntl.rmbg)
let attachmentData = `data:image/jpeg;base64,${buffer.toString('base64')}`
let poto = JSON.stringify(encodeURIComponent(attachmentData))
//let { ext } = await fromBuffer(attachmentData)
let tmp = path.join(__dirname, '../tmp', + new Date  + '.jpeg')
let out = tmp + '.png'
try {
   request.post({
               url: 'https://api.remove.bg/v1.0/removebg',
               formData: {
               image_file: fs.createReadStream(attachmentData),
               size: 'auto',
            },
               headers: {
               "X-Api-Key": API,
               "Content-Type": "application/json",
           },
         encoding: null
   },
         function(error, response, body) {
  if(error) { 
	  console.error(chalk.red('TERJADI KESALAHAN:\n\n', error)) 
	  reject('*ERROR! Terjadi Kesalahan*');
	  }
  if(response.statusCode != 200) return console.error(chalk.red('RESPONSE ERROR:\n\n', response.statusCode, body.toString('utf8')));
  if (response.status == 200 || response.statusCode == 200) { 
  fs.writeFileSync(out, body)
  fs.unlinkSync(tmp)
      resolve(fs.readFileSync(out))
      if (fs.existsSync(out)) fs.unlinkSync(out)
       }
      })
   } catch (e) {
		console.log('ERROR', e)
		reject(`CONVERSI GAGAL TOTAL!`)
	}
  })


let tmp = path.join(__dirname, '../tmp')
function sticker2(img, url) {
  return new Promise(async (resolve, reject) => {
    try {
      if (url) {
        let res = await fetch(url)
        img = await res.buffer()
      }
      let inp = path.join(tmp, +new Date + '.jpeg')
      let png = path.join(tmp, +new Date + '.png')
      let out = path.join(tmp, +new Date + '.webp')
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
          fs.unlinkSync(out)
        })
      })
    } catch (e) {
      reject(e)
    }
  })
}

async function canvas(code, type = 'png', quality = 0.92) {
    let res = await fetch('https://nurutomo.herokuapp.com/api/canvas?' + queryURL({
        type,
        quality
    }), {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
            'Content-Length': code.length
        },
        body: code
    })
    let image = await res.buffer()
    return image
}

function queryURL(queries) {
    return Object.entries(queries).map(([key, value]) => key + (value ? '=' + encodeURIComponent(value) : '')).join('&')
}

function Removed(buffer) {
let API = (kntl.rmbg)
return new Promise(async (resolve, reject) => {
  try {
request.post({
  url: 'https://api.remove.bg/v1.0/removebg',
  formData: {
    image_file: fs.createReadStream(buffer),
    size: 'auto',
  },
  headers: {
    'X-Api-Key': API
  },
  encoding: null
 }, function(error, response, body) {
  if(error) return console.error(chalk.red('TERJADI KESALAHAN:\n\n', error));
  if(response.statusCode != 200) return console.error(chalk.red('RESPONSE ERROR:\n\n', response.statusCode, body.toString('utf8')));
  if (response.status === 200 || response.statusCode === 200) { 
  fs.writeFileSync("no-bg.png", body);
       }
    });
    } catch (e) {
      reject(e)
    }
    })
  }


//let { fromBuffer } = require('file-type')
async function sticker(img, url) {
    url = url ? url : await uploadImage(img)
    let {
        mime
    } = url ? {mime:'image/jpeg'} : await fromBuffer(img)
    let sc = `let im = await loadImg('data:${mime};base64,'+(await window.loadToDataURI('${url}')))
c.width = c.height = 512
let max = Math.max(im.width, im.height)
let w = 512 * im.width / max
let h = 512 * im.height / max
ctx.drawImage(im, 256 - w / 2, 256 - h / 2, w, h)
`
    return await canvas(sc, 'webp')
}

function uploadImage(buffer) {
    return new Promise(async (resolve, reject) => {
        try {
            const {
                ext
            } = await fromBuffer(buffer)
            let form = new FormData()
            form.append('file', buffer, 'tmp.' + ext)
            let res = await fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
            let img = await res.json()
            if (img.error) reject(img.error)
            else resolve('https://telegra.ph' + img[0].src)
        } catch (e) {
            reject(e)
        }
    })
}
