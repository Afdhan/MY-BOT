let MessageType = require ('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let axios = require ('axios')
let fs = require ('fs')
let util = require('util')
let path = require('path')
let kntl = require("../src/kntl.json");
let { spawn } = require('child_process')
let { performance } = require('perf_hooks')
let handler  = async (m, { conn, args, text, command, usedPrefix: _p }) => {
if(command == 'setreply'){
	if(!text) return m.reply('Masukkan Teks!')
	global.cpt = text
	m.reply(`_Berhasil Mengganti Fake Reply Menjadi "${text}"_`)
  } else {
let old = performance.now()
 await conn.fakeReply(m.chat, '```L o a d i n g . . .```', '0@s.whatsapp.net', '*MEMUAT LIST MENU*')
let neww = performance.now()
let gmbr = './src/SGDC_BOT.jpg'
 try {
    //let gmbr = conn.getProfilePicture(m.sender)
    //let old = performance.now()
    //await conn.fakeReply(m.chat, '```L o a d i n g . . .```', '0@s.whatsapp.net', '*MEMUAT LIST MENU*')
    //let neww = performance.now()
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let bname = package.name
    let vers = package.version
    let dsci = package.description
    let kntl = require("../src/kntl.json");
    let apikey = (kntl.xinzbot)
    //let ree = await axios.get(`https://xinzbot-api.herokuapp.com/api/ucapan?apikey=${apikey}&timeZone=Asia/Jakarta`)
    //let cpn = ree.data.result
    let res = await axios.get(`https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=${apikey}&tanggal=13&bulan=5`)
    let rmd = res.data.result
    let gc = 'https://tinyurl.com/ygu7vxny'
    let desc = 'Powered by'
    let ping = neww - old + ' ms'
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let islami = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let ampm = time >= 12 ? 'PM' : 'AM';
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    //let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
    let reg = Object.values(global.DATABASE._data.users).filter(user => user.registered == false).length
    let own = '6282252655313@s.whatsapp.net'
    let cown = '6283129011845@s.whatsapp.net'
    let mmk = m.sender
    let name = conn.getName(mmk)
    let about = (await conn.getStatus(mmk)).status
    let nom = PhoneNumber('+' + mmk.replace('@s.whatsapp.net', '')).getNumber('international')
    //let poto = 'src/SGDC_BOT.jpg'
    let chat = global.DATABASE.data.chats[m.chat]
    let ngc
    if(m.isGroup) ngc = conn.getName(m.chat)
    else ngc = 'No Result'
    let mn = `
─────────────────────
                      *ＳＧＤＣ－ＢＯＴ*
─────────────────────
*ƗNFØ ȻĦȺŦ*
*❍ Nama Group:* ${ngc}
*❍ Welcome:* ${chat.welcome ? 'ON':'OFF'}
*❍ AntiDelete:* ${chat.delete ? 'ON':'OFF'}
*❍ AntiLink:* ${chat.antiLink ? 'ON':'OFF'}
*❍ NSFW:* ${chat.nsfw ? 'ON':'OFF'}
*❍ Simi:* ${chat.simi ? 'ON':'OFF'}

*ƗNFØ ȺNĐȺ*
*❍ Nama:* ${name}
*❍ About:* ${about}
*❍ Mention:* @${mmk.split("@")[0]}
*❍ Nomor:* ${nom}
*❍ Link:* https://wa.me/${mmk.split`@`[0]}

*ƗNFØ ɃØŦ*
*❍ Nama:* ${bname}
*❍ Versi:* ${vers}
*❍ Prefix:* ${_p}
*❍ Total User:* ${reg}
*❍ Peform:* ${ping}
*❍ Uptime:* ${uptime}
*❍ License:* GPL-3.0
*❍ Github:* https://github.com/Afdhan/SGDC-55

*ƗNFØ ⱣɆNǤɆMɃȺNǤ*
*❍ Owner:* ᴍ ᴀꜰᴅʜᴀɴ (@${own.split("@")[0]})
*❍ Mods:* ɴᴇᴢᴀᴠᴩɴ (@${cown.split("@")[0]})
*❍ Telegram:* https://t.me/SobatGretong
*❍ Instagram:* @dhans11__

─────────────────────
*ＲＯＡＤ ＴＯ ＩＤＵＬ ＦＩＴＲＩ １４４２ Ｈ*
*❍* ${rmd}

*ＷＡＫＴＵ:* ${time} ${ampm}
*ＴＡＮＧＧＡＬ:* ${week}, ${date} | ${islami}

${readMore}
┌──────────────────╮
│               *❏ TEXT MAKER ❏*
│
├≽ ${_p}sand
├≽ ${_p}neon
├≽ ${_p}burn
├≽ ${_p}wolf
├≽ ${_p}candy
├≽ ${_p}smoke
├≽ ${_p}shine
├≽ ${_p}metall
├≽ ${_p}graffiti
├≽ ${_p}candle
├≽ ${_p}naruto
├≽ ${_p}paper
├≽ ${_p}dark
├≽ ${_p}coffe
├≽ ${_p}coffe2
├≽ ${_p}matrix
├≽ ${_p}silverbutton
├≽ ${_p}goldbutton
├≽ ${_p}quotemaker
├≽ ${_p}8bit
├≽ ${_p}glitch
├≽ ${_p}wanted
├≽ ${_p}cswp
├≽ ${_p}photooxy
├≽ ${_p}qrcode
├≽ ${_p}style
├≽ ${_p}tahta
├≽ ${_p}tahta2
├≽ ${_p}sgdc
├≽ ${_p}nulis
├≽ ${_p}nulis2
├≽ ${_p}nulis3
├─────────────────
│              *❏ SERTI MAKER ❏*
│
├≽ ${_p}pubgserti
├≽ ${_p}pubgserti2
├≽ ${_p}pubgserti3
├≽ ${_p}pubgserti4
├≽ ${_p}pubgserti5
├≽ ${_p}mlserti
├≽ ${_p}mlserti2
├≽ ${_p}mlserti3
├≽ ${_p}mlserti4
├≽ ${_p}mlserti5
├≽ ${_p}ffserti
├≽ ${_p}ffserti2
├≽ ${_p}ffserti3
├≽ ${_p}ffserti4
├≽ ${_p}ffserti5
├─────────────────
│                *❏ ISLAMIC ❏*
│
├≽ ${_p}quran
├≽ ${_p}ayatkursi
├≽ ${_p}doawirid
├≽ ${_p}doatahlil
├≽ ${_p}doaharian
├≽ ${_p}niatsholat
├≽ ${_p}bacaansholat
├≽ ${_p}asmaulhusna
├≽ ${_p}quotemuslim
├≽ ${_p}getsurah
├≽ ${_p}jadwalsholat
├≽ ${_p}kisahnabi
├≽ ${_p}hadist
├─────────────────
│                *❏ STICKER ❏*
│
├≽ ${_p}ttp
├≽ ${_p}ttp2
├≽ ${_p}ttp3
├≽ ${_p}attp
├≽ ${_p}attp2
├≽ ${_p}semoji
├≽ ${_p}triggered
├≽ ${_p}snbg
├≽ ${_p}sticgif
├≽ ${_p}sticker
├≽ ${_p}stickerwm
├≽ ${_p}takestic
├≽ ${_p}stimg
├─────────────────
│         *❏ STICKER EMOJI ❏*
│
├≽ ${_p}emo lg
├≽ ${_p}emo htc
├≽ ${_p}emo apple
├≽ ${_p}emo twitter
├≽ ${_p}emo google
├≽ ${_p}emo mozilla
├≽ ${_p}emo whatsapp
├≽ ${_p}emo microsoft
├≽ ${_p}emo samsung
├≽ ${_p}emo facebook
├≽ ${_p}emo joypixels
├≽ ${_p}emo openmoji
├≽ ${_p}emo emojidex
├≽ ${_p}semoji
├─────────────────
│         *❏ RANDOM IMAGE ❏*
│
├≽ ${_p}cecan
├≽ ${_p}cogan
├≽ ${_p}meme
├≽ ${_p}randmeme
├≽ ${_p}darkjoke
├≽ ${_p}randomexo
├≽ ${_p}randombts
├≽ ${_p}randomcum
├≽ ${_p}randomfeet
├≽ ${_p}randomloli
├≽ ${_p}randomtits
├≽ ${_p}randomneko
├≽ ${_p}randonhusbu
├≽ ${_p}randomkanna
├≽ ${_p}randomshota
├≽ ${_p}randomwaifu
├≽ ${_p}randomsagiri
├≽ ${_p}randomshinobu
├≽ ${_p}randomhentai
├≽ ${_p}gimage
├≽ ${_p}pinterest
├≽ ${_p}randompict
├─────────────────
│           *❏ SOCIAL MEDIA ❏*
│
├≽ ${_p}igstalk
├≽ ${_p}githubstalk
├≽ ${_p}twitterstalk
├≽ ${_p}tiktokstalk
├≽ ${_p}igpost
├─────────────────
│                   *❏ SPAM ❏*
│
├≽ ${_p}spam
├≽ ${_p}spam2
├≽ ${_p}spam3
├≽ ${_p}spammer
├≽ ${_p}call
├─────────────────
│                  *❏ GROUP ❏*
│
├≽ ${_p}tagall
├≽ ${_p}otagall
├≽ ${_p}grup
├≽ ${_p}setppgc
├≽ ${_p}setname
├≽ ${_p}setdesc
├≽ ${_p}add
├≽ ${_p}promote
├≽ ${_p}demote
├≽ ${_p}kick
├≽ ${_p}oadd
├≽ ${_p}opromote
├≽ ${_p}odemote
├≽ ${_p}okick
├≽ ${_p}getpp
├≽ ${_p}rptag
├≽ ${_p}hidetag
├≽ ${_p}ohidetag
├≽ ${_p}fitnah
├─────────────────
│                 *❏ ANIME ❏*
│
├≽ ${_p}anime husbu
├≽ ${_p}anime neko
├≽ ${_p}anime waifu
├≽ ${_p}anime random
├─────────────────
│              *❏ ANIME 18+ ❏*
│
├≽ ${_p}cum
├≽ ${_p}feet
├≽ ${_p}loli
├≽ ${_p}tits
├≽ ${_p}neko
├≽ ${_p}husbu
├≽ ${_p}kanna
├≽ ${_p}shota
├≽ ${_p}waifu
├≽ ${_p}sagiri
├≽ ${_p}shinobu
├≽ ${_p}hentai
├─────────────────
│                   *❏ NSFW ❏*
│
├≽ ${_p}nsfw blowjob
├≽ ${_p}nsfw neko
├≽ ${_p}nsfw loli
├≽ ${_p}nsfw waifu
├≽ ${_p}nsfw trap
├≽ ${_p}nsfw random
├─────────────────
│                  *❏ OTHERS ❏*
│
├≽ ${_p}listmsg
├≽ ${_p}listvn
├≽ ${_p}listimg
├≽ ${_p}listvideo
├≽ ${_p}listaudio
├≽ ${_p}liststicker
├≽ ${_p}getmsg
├≽ ${_p}getvn
├≽ ${_p}getimg
├≽ ${_p}getvideo
├≽ ${_p}getaudio
├≽ ${_p}getsticker
├≽ ${_p}puitis
├≽ ${_p}iqtest
├≽ ${_p}ping
├≽ ${_p}bacotan
├≽ ${_p}donasi
├≽ ${_p}covid
├≽ ${_p}sfileup
├≽ ${_p}numpangbot
├≽ ${_p}stopnumpang
├≽ ${_p}getcode
├≽ ${_p}jadian
├≽ ${_p}infogempa
├≽ ${_p}nickepep
├≽ ${_p}grouplist
├≽ ${_p}linkgroup
├≽ ${_p}tebakgambar
├≽ ${_p}mark
├≽ ${_p}google
├≽ ${_p}sfile
├≽ ${_p}wiki
├≽ ${_p}kbbi
├≽ ${_p}lirik
├≽ ${_p}chord
├≽ ${_p}artimimpi
├≽ ${_p}cuaca
├≽ ${_p}waktu
├≽ ${_p}jadwaltv
├≽ ${_p}save
├≽ ${_p}ninja
├≽ ${_p}artinama
├≽ ${_p}afk
├≽ ${_p}math
├≽ ${_p}say
├≽ ${_p}halah
├≽ ${_p}hilih
├≽ ${_p}huluh
├≽ ${_p}heleh
├≽ ${_p}holoh
├≽ ${_p}simi
├≽ ${_p}jhuruf
├≽ ${_p}repeat
├≽ ${_p}teksbalik
├≽ ${_p}otakudesu
├≽ ${_p}dewabatch
├≽ ${_p}kusonime
├≽ ${_p}teksbalik
├≽ ${_p}tts
├≽ ${_p}readmore
├≽ ${_p}jodoh
├≽ ${_p}maknajadian
├─────────────────
│              *❏ DOWNLOAD ❏*
│
├≽ ${_p}mediafire
├≽ ${_p}igdl
├≽ ${_p}fbdl
├≽ ${_p}sfiledl
├≽ ${_p}tiktokdl
├≽ ${_p}ytmp3
├≽ ${_p}ytmp4
├≽ ${_p}playmp3
├≽ ${_p}playmp4
├≽ ${_p}playstore
├─────────────────
│                  *❏ TOOLS ❏*
│
├≽ ${_p}proxyscrapper
├≽ ${_p}upload
├≽ ${_p}inspect
├≽ ${_p}join
├≽ ${_p}fetch
├≽ ${_p}ssweb
├≽ ${_p}bitly
├≽ ${_p}cuttly
├≽ ${_p}tinyurl
├≽ ${_p}pastebin
├≽ ${_p}report
├≽ ${_p}base64
├≽ ${_p}decode64
├≽ ${_p}whois
├≽ ${_p}calc
├≽ ${_p}hostsearch
├≽ ${_p}infonpm
├≽ ${_p}fullhd
├─────────────────
│                 *❏ OWNER ❏*
│
├≽ ${_p}ban
├≽ ${_p}unban
├≽ ${_p}reset
├≽ ${_p}restart
├≽ ${_p}clear
├≽ ${_p}leave
├≽ ${_p}bc
├≽ ${_p}bcgc
├≽ ${_p}bcbot
├≽ ${_p}buatgc
├≽ ${_p}setbye
├≽ ${_p}setwelcome
├≽ ${_p}opromote
├≽ ${_p}odemote
├≽ ${_p}ohidetag
├≽ ${_p}okick
├≽ ${_p}bann
├≽ ${_p}unbann
├≽ ${_p}addprem
├≽ ${_p}delprem
├≽ ${_p}optionlist
├≽ ${_p}addmsg
├≽ ${_p}addvn
├≽ ${_p}addimg
├≽ ${_p}addvideo
├≽ ${_p}addaudio
├≽ ${_p}addsticker
├≽ ${_p}delmsg
├≽ ${_p}delvn
├≽ ${_p}delimg
├≽ ${_p}delvideo
├≽ ${_p}delaudio
├≽ ${_p}delsticker
├≽ ${_p}on
├≽ ${_p}off
│
└──────────────────╯

                    *${bname}@^${vers}*

─────────────────────
                      *ＳＧＤＣ－ＢＯＴ*
─────────────────────
`.trim()

global.cpt = 'Support Me With Donate :)'
await conn.reply(m.chat, mn, {
  key: { 
      remoteJid: 'status@broadcast', 
      participant: '0@s.whatsapp.net', 
      fromMe: false 
     }, 
      message: { 
        "imageMessage": { 
        "mimetype": "image/jpeg", 
        "caption":  (global.cpt), 
        "jpegThumbnail": fs.readFileSync(gmbr)
       }
    }
},
{ 
   contextInfo: { 
       mentionedJid: [mmk, own, cown]
      }
})
conn.fakeReply(m.chat, `Untuk Menu Gretongan, Ketik *${_p}gretongmenu*`, '0@s.whatsapp.net', '*M AFDHAN || SUPPORT ME WITH DONATE*')
  } catch (e) {
    conn.fakeReply(m.chat, '_TERJADI KESALAHAN PADA SAAT MEMUAT MENU!_', '0@s.whatsapp.net', '*MENU ERROR! SEGERA LAPORKAN KE OWNER!*')
    //throw e
    //conn.sendMessage(`, 'Menu Error\n' + util.format(e), MessageType.text)
  console.log(e)
  }
 }
}
handler.command = /^(menu|help|start|(set)?reply)$/i
handler.fail = null
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)


function clockString(ms) {
  let chalk = require('chalk')
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log(chalk.bold.cyan('SGDC-BOT Berjalan Selama ' + '\n\n~ MiliSecond: ' + ms,'\n~ Hours: ' + h,'\n~ Minutes: ' + m,'\n~ Second: ' + s,'\n\n\nPowered by M AFDHAN'))
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
