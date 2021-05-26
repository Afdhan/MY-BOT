let MessageType = require ('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let axios = require ('axios')
let fs = require ('fs')
let util = require('util')
let path = require('path')
let os = require("os")
let kntl = require("../src/kntl.json");
let { spawn } = require('child_process')
let { performance } = require('perf_hooks')
let handler  = async (m, { conn, args, text, command, isOwner, isPrems, isROwner, usedPrefix: _p }) => {
let gmbr = './src/SGDC-BOT.jpg'
let old = performance.now()
 await conn.fakeReply(m.chat, '```L o a d i n g . . .```', '0@s.whatsapp.net', '*SGDC-BOT PROCESSING*')
let neww = performance.now()
 try {
let chalk = require("chalk");
let { 
wa_version, 
mcc, 
mnc,
os_version, 
device_manufacturer, 
device_model 
} = conn.user.phone
 let platfrom = os.platform()
 let core = os.cpus().length
 let ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB / ' + Math.round(require('os').totalmem / 1024 / 1024) + 'MB'
 let wa_versi = wa_version
 let _mcc = mcc
 let _mnc = mnc
 let versi_os = os_version
 let device = device_manufacturer
 let versi_hp = device_model
   console.log(chalk.red(`
SGDC-BOT Service Running
			     
WhatsApp Version: ${chalk.bold.green(wa_versi)}
Platform: ${chalk.bold.green(platfrom)}
MCC: ${chalk.bold.green(_mcc)}
MNC: ${chalk.bold.green(_mnc)}
Core: ${chalk.bold.green(core)}
RAM: ${chalk.bold.green(ram)}
Device: ${chalk.bold.green(device)}
OS Version: ${chalk.bold.green(versi_os)}
Device Version: ${chalk.bold.green(versi_hp)}

Powered By SGDC-BOT || M AFDHAN
`))
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let bname = package.name
    let vers = package.version
    let dsci = package.description
    let kntl = require("../src/kntl.json");
    let apikey = (kntl.xinzbot)
    //let ree = await axios.get(`https://xinzbot-api.herokuapp.com/api/ucapan?apikey=${apikey}&timeZone=Asia/Jakarta`)
    //let cpn = ree.data.result
    let res = await axios.get(`https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=${apikey}&tanggal=19&bulan=7`)
    let rmd = res.data.result
    let gc = 'https://tinyurl.com/ygu7vxny'
    let desc = 'Powered by'
    let ping = neww - old + ' ms'
    let d = new Date(new Date + 3600000)
    let locale = 'id'
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
    let ampm = time >= 12 ? 'PM':'AM';
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let premi = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    let reg = Object.values(global.DATABASE._data.users).filter(user => user.registered == false).length
    let own = '6282252655313@s.whatsapp.net'
    let cown = '6283129011845@s.whatsapp.net'
    let mmk = m.sender
    let name = conn.getName(mmk)
    let about = (await conn.getStatus(mmk)).status
    let nom = PhoneNumber('+' + mmk.replace('@s.whatsapp.net', '')).getNumber('international')
    let mode
    if(isROwner || mmk === own) mode = "```ROwner SGDC-BOT```"
    else if(mmk === cown) mode = "```Owner SGDC-BOT```"
    else if(premi) mode = "```Premium User```"
    else mode = "```Free User```"
    let chat = global.DATABASE.data.chats[m.chat]
    let ngc
    if(m.isGroup) ngc = conn.getName(m.chat)
    else ngc = 'Private Chat'
    let mn = `
─────────────────────
                      *ＳＧＤＣ－ＢＯＴ*
─────────────────────
Owner - Recode: \`\`\`M AFDHAN  @${own.split("@")[0]}\`\`
Mods Supporter: \`\`\`NezaVPN  @${cown.split("@")[0]}\`\`\`
Author SC: \`\`\`Nrtm\`\`\`


─────────────────────
*ＲＯＡＤ ＴＯ ＩＤＵＬ ＡＤＨＡ １４４２ Ｈ*
*>* ${rmd}

*ＷＡＫＴＵ:* ${time} ${ampm}

*ＨＡＲＩ ＩＮＩ* 
${week}, ${date} M
${week}, ${islami} H

>  \`\`\`${_p}info\`\`\`
>  \`\`\`${_p}report\`\`\`
─────────────────────
┌──────────────────╮
│               *⸨   TEXT MAKER   ⸩*
│
├≽ \`\`\`${_p}sand\`\`\`
├≽ \`\`\`${_p}neon\`\`\`
├≽ \`\`\`${_p}burn\`\`\`
├≽ \`\`\`${_p}wolf\`\`\`
├≽ \`\`\`${_p}candy\`\`\`
├≽ \`\`\`${_p}smoke\`\`\`
├≽ \`\`\`${_p}shine\`\`\`
├≽ \`\`\`${_p}metall\`\`\`
├≽ \`\`\`${_p}graffiti\`\`\`
├≽ \`\`\`${_p}candle\`\`\`
├≽ \`\`\`${_p}naruto\`\`\`
├≽ \`\`\`${_p}paper\`\`\`
├≽ \`\`\`${_p}dark\`\`\`
├≽ \`\`\`${_p}coffe\`\`\`
├≽ \`\`\`${_p}coffe2\`\`\`
├≽ \`\`\`${_p}matrix\`\`\`
├≽ \`\`\`${_p}silverbutton\`\`\`
├≽ \`\`\`${_p}goldbutton\`\`\`
├≽ \`\`\`${_p}quotemaker\`\`\`
├≽ \`\`\`${_p}8bit\`\`\`
├≽ \`\`\`${_p}glitch\`\`\`
├≽ \`\`\`${_p}wanted\`\`\`
├≽ \`\`\`${_p}cswp\`\`\`
├≽ \`\`\`${_p}photooxy\`\`\`
├≽ \`\`\`${_p}qrcode\`\`\`
├≽ \`\`\`${_p}style\`\`\`
├≽ \`\`\`${_p}tahta\`\`\`
├≽ \`\`\`${_p}tahta2\`\`\`
├≽ \`\`\`${_p}sgdc\`\`\`
├≽ \`\`\`${_p}nulis\`\`\`
├≽ \`\`\`${_p}nulis2\`\`\`
├≽ \`\`\`${_p}nulis3\`\`\`
├─────────────────
│              *⸨   SERTI MAKER   ⸩*
│
├≽ \`\`\`${_p}pubgserti\`\`\`
├≽ \`\`\`${_p}pubgserti2\`\`\`
├≽ \`\`\`${_p}pubgserti3\`\`\`
├≽ \`\`\`${_p}pubgserti4\`\`\`
├≽ \`\`\`${_p}pubgserti5\`\`\`
├≽ \`\`\`${_p}mlserti\`\`\`
├≽ \`\`\`${_p}mlserti2\`\`\`
├≽ \`\`\`${_p}mlserti3\`\`\`
├≽ \`\`\`${_p}mlserti4\`\`\`
├≽ \`\`\`${_p}mlserti5\`\`\`
├≽ \`\`\`${_p}ffserti\`\`\`
├≽ \`\`\`${_p}ffserti2\`\`\`
├≽ \`\`\`${_p}ffserti3\`\`\`
├≽ \`\`\`${_p}ffserti4\`\`\`
├≽ \`\`\`${_p}ffserti5\`\`\`
├─────────────────
│                *⸨   ISLAMIC   ⸩*
│
├≽ \`\`\`${_p}quran\`\`\`
├≽ \`\`\`${_p}ayatkursi\`\`\`
├≽ \`\`\`${_p}doawirid\`\`\`
├≽ \`\`\`${_p}doatahlil\`\`\`
├≽ \`\`\`${_p}doaharian\`\`\`
├≽ \`\`\`${_p}niatsholat\`\`\`
├≽ \`\`\`${_p}bacaansholat\`\`\`
├≽ \`\`\`${_p}asmaulhusna\`\`\`
├≽ \`\`\`${_p}quotemuslim\`\`\`
├≽ \`\`\`${_p}getsurah\`\`\`
├≽ \`\`\`${_p}jadwalsholat\`\`\`
├≽ \`\`\`${_p}kisahnabi\`\`\`
├≽ \`\`\`${_p}hadist\`\`\`
├─────────────────
│                *⸨   STICKER   ⸩*
│
├≽ \`\`\`${_p}ttp\`\`\`
├≽ \`\`\`${_p}ttp2\`\`\`
├≽ \`\`\`${_p}ttp3\`\`\`
├≽ \`\`\`${_p}attp\`\`\`
├≽ \`\`\`${_p}attp2\`\`\`
├≽ \`\`\`${_p}semoji\`\`\`
├≽ \`\`\`${_p}triggered\`\`\`
├≽ \`\`\`${_p}stag\`\`\`
├≽ \`\`\`${_p}stickertag\`\`\`
├≽ \`\`\`${_p}sticgif\`\`\`
├≽ \`\`\`${_p}sticker\`\`\`
├≽ \`\`\`${_p}stickerwm\`\`\`
├≽ \`\`\`${_p}takestic\`\`\`
├≽ \`\`\`${_p}tovideo\`\`\`
├≽ \`\`\`${_p}stimg\`\`\`
├─────────────────
│         *⸨   STICKER EMOJI   ⸩*
│
├≽ \`\`\`${_p}emo lg\`\`\`
├≽ \`\`\`${_p}emo htc\`\`\`
├≽ \`\`\`${_p}emo apple\`\`\`
├≽ \`\`\`${_p}emo twitter\`\`\`
├≽ \`\`\`${_p}emo google\`\`\`
├≽ \`\`\`${_p}emo mozilla\`\`\`
├≽ \`\`\`${_p}emo whatsapp\`\`\`
├≽ \`\`\`${_p}emo microsoft\`\`\`
├≽ \`\`\`${_p}emo samsung\`\`\`
├≽ \`\`\`${_p}emo facebook\`\`\`
├≽ \`\`\`${_p}emo joypixels\`\`\`
├≽ \`\`\`${_p}emo openmoji\`\`\`
├≽ \`\`\`${_p}emo emojidex\`\`\`
├≽ \`\`\`${_p}semoji\`\`\`
├─────────────────
│         *⸨   RANDOM IMAGE   ⸩*
│
├≽ \`\`\`${_p}cecan\`\`\`
├≽ \`\`\`${_p}cogan\`\`\`
├≽ \`\`\`${_p}meme\`\`\`
├≽ \`\`\`${_p}randmeme\`\`\`
├≽ \`\`\`${_p}darkjoke\`\`\`
├≽ \`\`\`${_p}randomexo\`\`\`
├≽ \`\`\`${_p}randombts\`\`\`
├≽ \`\`\`${_p}randomcum\`\`\`
├≽ \`\`\`${_p}randomfeet\`\`\`
├≽ \`\`\`${_p}randomloli\`\`\`
├≽ \`\`\`${_p}randomtits\`\`\`
├≽ \`\`\`${_p}randomneko\`\`\`
├≽ \`\`\`${_p}randonhusbu\`\`\`
├≽ \`\`\`${_p}randomkanna\`\`\`
├≽ \`\`\`${_p}randomshota\`\`\`
├≽ \`\`\`${_p}randomwaifu\`\`\`
├≽ \`\`\`${_p}randomsagiri\`\`\`
├≽ \`\`\`${_p}randomshinobu\`\`\`
├≽ \`\`\`${_p}randomhentai\`\`\`
├≽ \`\`\`${_p}gimage\`\`\`
├≽ \`\`\`${_p}pinterest\`\`\`
├≽ \`\`\`${_p}randompict\`\`\`
├─────────────────
│           *⸨   SOCIAL MEDIA   ⸩*
│
├≽ \`\`\`${_p}igstalk\`\`\`
├≽ \`\`\`${_p}githubstalk\`\`\`
├≽ \`\`\`${_p}twitterstalk\`\`\`
├≽ \`\`\`${_p}tiktokstalk\`\`\`
├≽ \`\`\`${_p}igpost\`\`\`
├─────────────────
│                   *⸨   SPAM   ⸩*
│
├≽ \`\`\`${_p}spam\`\`\`
├≽ \`\`\`${_p}spam2\`\`\`
├≽ \`\`\`${_p}spam3\`\`\`
├≽ \`\`\`${_p}spammer\`\`\`
├≽ \`\`\`${_p}call\`\`\`
├≽ \`\`\`${_p}olx\`\`\`
├─────────────────
│                  *⸨   GROUP   ⸩*
│
├≽ \`\`\`${_p}tagall\`\`\`
├≽ \`\`\`${_p}otagall\`\`\`
├≽ \`\`\`${_p}grup\`\`\`
├≽ \`\`\`${_p}setppgc\`\`\`
├≽ \`\`\`${_p}setname\`\`\`
├≽ \`\`\`${_p}setdesc\`\`\`
├≽ \`\`\`${_p}add\`\`\`
├≽ \`\`\`${_p}promote\`\`\`
├≽ \`\`\`${_p}demote\`\`\`
├≽ \`\`\`${_p}kick\`\`\`
├≽ \`\`\`${_p}oadd\`\`\`
├≽ \`\`\`${_p}opromote\`\`\`
├≽ \`\`\`${_p}odemote\`\`\`
├≽ \`\`\`${_p}okick\`\`\`
├≽ \`\`\`${_p}getpp\`\`\`
├≽ \`\`\`${_p}rptag\`\`\`
├≽ \`\`\`${_p}listadmin\`\`\`
├≽ \`\`\`${_p}hidetag\`\`\`
├≽ \`\`\`${_p}ohidetag\`\`\`
├≽ \`\`\`${_p}fitnah\`\`\`
├─────────────────
│                 *⸨   ANIME   ⸩*
│
├≽ \`\`\`${_p}anime husbu\`\`\`
├≽ \`\`\`${_p}anime neko\`\`\`
├≽ \`\`\`${_p}anime waifu\`\`\`
├≽ \`\`\`${_p}anime random\`\`\`
├─────────────────
│              *⸨   ANIME 18+   ⸩*
│
├≽ \`\`\`${_p}cum\`\`\`
├≽ \`\`\`${_p}feet\`\`\`
├≽ \`\`\`${_p}loli\`\`\`
├≽ \`\`\`${_p}tits\`\`\`
├≽ \`\`\`${_p}neko\`\`\`
├≽ \`\`\`${_p}husbu\`\`\`
├≽ \`\`\`${_p}kanna\`\`\`
├≽ \`\`\`${_p}shota\`\`\`
├≽ \`\`\`${_p}waifu\`\`\`
├≽ \`\`\`${_p}sagiri\`\`\`
├≽ \`\`\`${_p}shinobu\`\`\`
├≽ \`\`\`${_p}hentai\`\`\`
├─────────────────
│                   *⸨   NSFW   ⸩*
│
├≽ \`\`\`${_p}nsfw blowjob\`\`\`
├≽ \`\`\`${_p}nsfw neko\`\`\`
├≽ \`\`\`${_p}nsfw loli\`\`\`
├≽ \`\`\`${_p}nsfw waifu\`\`\`
├≽ \`\`\`${_p}nsfw trap\`\`\`
├≽ \`\`\`${_p}nsfw random\`\`\`
├─────────────────
│                  *⸨   OTHERS   ⸩*
│
├≽ \`\`\`${_p}listmsg\`\`\`
├≽ \`\`\`${_p}listvn\`\`\`
├≽ \`\`\`${_p}listimg\`\`\`
├≽ \`\`\`${_p}listvideo\`\`\`
├≽ \`\`\`${_p}listaudio\`\`\`
├≽ \`\`\`${_p}liststicker\`\`\`
├≽ \`\`\`${_p}getmsg\`\`\`
├≽ \`\`\`${_p}getvn\`\`\`
├≽ \`\`\`${_p}getimg\`\`\`
├≽ \`\`\`${_p}getvideo\`\`\`
├≽ \`\`\`${_p}getaudio\`\`\`
├≽ \`\`\`${_p}getsticker\`\`\`
├≽ \`\`\`${_p}puitis\`\`\`
├≽ \`\`\`${_p}iqtest\`\`\`
├≽ \`\`\`${_p}ping\`\`\`
├≽ \`\`\`${_p}bacotan\`\`\`
├≽ \`\`\`${_p}donasi\`\`\`
├≽ \`\`\`${_p}covid\`\`\`
├≽ \`\`\`${_p}sfileup\`\`\`
├≽ \`\`\`${_p}numpangbot\`\`\`
├≽ \`\`\`${_p}stopnumpang\`\`\`
├≽ \`\`\`${_p}getcode\`\`\`
├≽ \`\`\`${_p}jadian\`\`\`
├≽ \`\`\`${_p}infogempa\`\`\`
├≽ \`\`\`${_p}nickepep\`\`\`
├≽ \`\`\`${_p}grouplist\`\`\`
├≽ \`\`\`${_p}linkgroup\`\`\`
├≽ \`\`\`${_p}tebakgambar\`\`\`
├≽ \`\`\`${_p}mark\`\`\`
├≽ \`\`\`${_p}google\`\`\`
├≽ \`\`\`${_p}sfile\`\`\`
├≽ \`\`\`${_p}xnxx\`\`\`
├≽ \`\`\`${_p}wiki\`\`\`
├≽ \`\`\`${_p}kbbi\`\`\`
├≽ \`\`\`${_p}lirik\`\`\`
├≽ \`\`\`${_p}chord\`\`\`
├≽ \`\`\`${_p}wpanime\`\`\`
├≽ \`\`\`${_p}artimimpi\`\`\`
├≽ \`\`\`${_p}cuaca\`\`\`
├≽ \`\`\`${_p}waktu\`\`\`
├≽ \`\`\`${_p}jadwaltv\`\`\`
├≽ \`\`\`${_p}save\`\`\`
├≽ \`\`\`${_p}wame\`\`\`
├≽ \`\`\`${_p}ninja\`\`\`
├≽ \`\`\`${_p}artinama\`\`\`
├≽ \`\`\`${_p}afk\`\`\`
├≽ \`\`\`${_p}math\`\`\`
├≽ \`\`\`${_p}say\`\`\`
├≽ \`\`\`${_p}halah\`\`\`
├≽ \`\`\`${_p}hilih\`\`\`
├≽ \`\`\`${_p}huluh\`\`\`
├≽ \`\`\`${_p}heleh\`\`\`
├≽ \`\`\`${_p}holoh\`\`\`
├≽ \`\`\`${_p}simi\`\`\`
├≽ \`\`\`${_p}jhuruf\`\`\`
├≽ \`\`\`${_p}repeat\`\`\`
├≽ \`\`\`${_p}teksbalik\`\`\`
├≽ \`\`\`${_p}otakudesu\`\`\`
├≽ \`\`\`${_p}dewabatch\`\`\`
├≽ \`\`\`${_p}kusonime\`\`\`
├≽ \`\`\`${_p}teksbalik\`\`\`
├≽ \`\`\`${_p}tts\`\`\`
├≽ \`\`\`${_p}tebaklagu\`\`\`
├≽ \`\`\`${_p}cek\`\`\`
├≽ \`\`\`${_p}msgsend\`\`\`
├≽ \`\`\`${_p}readmore\`\`\`
├≽ \`\`\`${_p}jodoh\`\`\`
├≽ \`\`\`${_p}maknajadian\`\`\`
├─────────────────
│              *⸨   DOWNLOAD   ⸩*
│
├≽ \`\`\`${_p}mediafire\`\`\`
├≽ \`\`\`${_p}igdl\`\`\`
├≽ \`\`\`${_p}fbdl\`\`\`
├≽ \`\`\`${_p}sfiledl\`\`\`
├≽ \`\`\`${_p}tiktokdl\`\`\`
├≽ \`\`\`${_p}ytmp3\`\`\`
├≽ \`\`\`${_p}ytmp32\`\`\`
├≽ \`\`\`${_p}ytmp4\`\`\`
├≽ \`\`\`${_p}ytmp42\`\`\`
├≽ \`\`\`${_p}playmp3\`\`\`
├≽ \`\`\`${_p}playmp4\`\`\`
├≽ \`\`\`${_p}xnxxdl\`\`\`
├─────────────────
│                  *⸨   TOOLS   ⸩*
│
├≽ \`\`\`${_p}proxyscrapper\`\`\`
├≽ \`\`\`${_p}anonymuschat\`\`\`
├≽ \`\`\`${_p}next\`\`\`
├≽ \`\`\`${_p}upload\`\`\`
├≽ \`\`\`${_p}inspect\`\`\`
├≽ \`\`\`${_p}join\`\`\`
├≽ \`\`\`${_p}fetch\`\`\`
├≽ \`\`\`${_p}ssweb\`\`\`
├≽ \`\`\`${_p}bitly\`\`\`
├≽ \`\`\`${_p}cuttly\`\`\`
├≽ \`\`\`${_p}tinyurl\`\`\`
├≽ \`\`\`${_p}pastebin\`\`\`
├≽ \`\`\`${_p}report\`\`\`
├≽ \`\`\`${_p}base64\`\`\`
├≽ \`\`\`${_p}decode64\`\`\`
├≽ \`\`\`${_p}whois\`\`\`
├≽ \`\`\`${_p}groupsearch\`\`\`
├≽ \`\`\`${_p}githubsearch\`\`\`
├≽ \`\`\`${_p}calc\`\`\`
├≽ \`\`\`${_p}ytsearch\`\`\`
├≽ \`\`\`${_p}hostsearch\`\`\`
├≽ \`\`\`${_p}infonpm\`\`\`
├≽ \`\`\`${_p}fullhd\`\`\`
├─────────────────
│                 *⸨   OWNER   ⸩*
│
├≽ \`\`\`${_p}ban\`\`\`
├≽ \`\`\`${_p}unban\`\`\`
├≽ \`\`\`${_p}reset\`\`\`
├≽ \`\`\`${_p}restart\`\`\`
├≽ \`\`\`${_p}clear\`\`\`
├≽ \`\`\`${_p}leave\`\`\`
├≽ \`\`\`${_p}bc\`\`\`
├≽ \`\`\`${_p}bcgc\`\`\`
├≽ \`\`\`${_p}bcbot\`\`\`
├≽ \`\`\`${_p}buatgc\`\`\`
├≽ \`\`\`${_p}pin\`\`\`
├≽ \`\`\`${_p}unpin\`\`\`
├≽ \`\`\`${_p}setbye\`\`\`
├≽ \`\`\`${_p}setwelcome\`\`\`
├≽ \`\`\`${_p}opromote\`\`\`
├≽ \`\`\`${_p}odemote\`\`\`
├≽ \`\`\`${_p}ohidetag\`\`\`
├≽ \`\`\`${_p}okick\`\`\`
├≽ \`\`\`${_p}bann\`\`\`
├≽ \`\`\`${_p}unbann\`\`\`
├≽ \`\`\`${_p}addprem\`\`\`
├≽ \`\`\`${_p}delprem\`\`\`
├≽ \`\`\`${_p}optionlist\`\`\`
├≽ \`\`\`${_p}addmsg\`\`\`
├≽ \`\`\`${_p}addvn\`\`\`
├≽ \`\`\`${_p}addimg\`\`\`
├≽ \`\`\`${_p}addvideo\`\`\`
├≽ \`\`\`${_p}addaudio\`\`\`
├≽ \`\`\`${_p}addsticker\`\`\`
├≽ \`\`\`${_p}delmsg\`\`\`
├≽ \`\`\`${_p}delvn\`\`\`
├≽ \`\`\`${_p}delimg\`\`\`
├≽ \`\`\`${_p}delvideo\`\`\`
├≽ \`\`\`${_p}delaudio\`\`\`
├≽ \`\`\`${_p}delsticker\`\`\`
├≽ \`\`\`${_p}on\`\`\`
├≽ \`\`\`${_p}off\`\`\`
│
└──────────────────╯
                    \`\`\`${bname}@^${vers}\`\`\`
─────────────────────
                      *ＳＧＤＣ－ＢＯＴ*
─────────────────────
`.trim()

let ppp = 'src/SGDC-BOT.jpg'
global.cpt = `Support Me With Donate :)`
await conn.sendFile(m.chat, ppp, "SGDC_BOT.jpg", mn, {
  key: { 
      remoteJid: '6283159600193-1620323735@g.us', 
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
}, false,
{ 
   contextInfo: { 
       mentionedJid: [mmk, own, cown]
      }
})

conn.reply(m.chat, `Untuk Menu Gretongan, Ketik *${_p}gretongmenu*`, {
  key: { 
      remoteJid: '111234567890-1594482450@g.us', 
      participant: '0@s.whatsapp.net', 
      fromMe: false 
     }, 
      message: { 
        "imageMessage": { 
        "mimetype": "image/jpeg", 
        "caption":  'Gretongers Indonesia | SGDC-TEAM', 
        "jpegThumbnail": fs.readFileSync('./src/sgdc1.jpg')
       }
    }
})
  } catch (e) {
    conn.reply(m.chat, '```Menu Gagal Dimuat!!!```', '0@s.whatsapp.net', 'MENU ERROR! SEGERA LAPORKAN KE OWNER!', 'status@broadcast')
    console.error(e)
  }
}
handler.command = /^(menu|help|start|(set)?reply)$/i

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)


function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
