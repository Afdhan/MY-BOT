let path = require('path');
let util = require('util');
let fs = require('fs');
let handler  = async (m, { conn, usedPrefix: _p }) =>  {
	let chat = global.DATABASE._data.chats[m.chat]
    if(m.isGroup && !chat.gretong) return m.reply("```Fitur Ini Belum Diaktifkan Oleh Owner!```")
    let pepek = `
─────────────────────
                       *ＳＧＤＣ－ＢＯＴ*
─────────────────────

_Join For New Update_
> https://t.me/SobatGretong
> https://t.me/SGDC_TEAM
> https://t.me/DesaConfig
> https://t.me/DesaConfigCh
> https://t.me/Neza_VPN
┌──────────────────╮
│             *⸨ CONFIGURATION ⸩*
│
├≽ \`\`\`${_p}axisgame\`\`\` (Coid)
├≽ \`\`\`${_p}axisedukasi\`\`\`
├≽ \`\`\`${_p}axischat\`\`\`
├≽ \`\`\`${_p}axismusic\`\`\`
├≽ \`\`\`${_p}axistiktok\`\`\`
├≽ \`\`\`${_p}axisconference\`\`\` (Coid)
├≽ \`\`\`${_p}axissosmed\`\`\`
├≽ \`\`\`${_p}xlchat\`\`\`
├≽ \`\`\`${_p}xlunli\`\`\`
├≽ \`\`\`${_p}xlcombo\`\`\`
├≽ \`\`\`${_p}xlconference\`\`\` (Coid)
├≽ \`\`\`${_p}triedukasi\`\`\`
├≽ \`\`\`${_p}imclass\`\`\`
├≽ \`\`\`${_p}isatkemendikbud\`\`\`
├≽ \`\`\`${_p}unlimax\`\`\`
├≽ \`\`\`${_p}unliapps\`\`\`
├≽ \`\`\`${_p}unlichat\`\`\`
├≽ \`\`\`${_p}unliwa\`\`\`
├≽ \`\`\`${_p}facebook\`\`\`
├≽ \`\`\`${_p}youtube\`\`\`
├≽ \`\`\`${_p}tiktok\`\`\`
├≽ \`\`\`${_p}instagram\`\`\`
├≽ \`\`\`${_p}kbssl\`\`\`
├≽ \`\`\`${_p}kbdirek\`\`\`
├≽ \`\`\`${_p}kemendikbud\`\`\`
├≽ \`\`\`${_p}gamemax\`\`\`
├≽ \`\`\`${_p}musicmax\`\`\`
├≽ \`\`\`${_p}maxtream\`\`\` (Coid)
├≽ \`\`\`${_p}tselopok\`\`\`
├≽ \`\`\`${_p}omg\`\`\`
├─────────────────
│               *⸨ BUG HOST ⸩*
│
├≽ \`\`\`${_p}bugig\`\`\`
├≽ \`\`\`${_p}bugwa\`\`\`
├≽ \`\`\`${_p}bugfb\`\`\`
├≽ \`\`\`${_p}bugff\`\`\`
├≽ \`\`\`${_p}bugyt\`\`\`
├≽ \`\`\`${_p}bugcod\`\`\`
├≽ \`\`\`${_p}bugunli\`\`\`
├≽ \`\`\`${_p}bugimclass\`\`\`
├≽ \`\`\`${_p}bugzoom\`\`\`
├≽ \`\`\`${_p}bugpubg\`\`\`
├≽ \`\`\`${_p}bugtiktok\`\`\`
├≽ \`\`\`${_p}bughbogo\`\`\`
├≽ \`\`\`${_p}bugmicrosoft\`\`\`
├─────────────────
│         *⸨ PAYLOAD INJECT ⸩*
│
├≽ \`\`\`${_p}payloadkuotabelajar\`\`\` (Coid)
├≽ \`\`\`${_p}payloadgamemax\`\`\`
├≽ \`\`\`${_p}payloadimclass\`\`\`
├≽ \`\`\`${_p}payloadaxisedukasi\`\`\`
├≽ \`\`\`${_p}payloadisatopok\`\`\`
├≽ \`\`\`${_p}payloadunlimax\`\`\`
├≽ \`\`\`${_p}payloadtriedukasi\`\`\`
├─────────────────
│           *⸨ SECURE SHELL ⸩*
│
├≽ \`\`\`${_p}univ\`\`\`
├≽ \`\`\`${_p}ssh\`\`\`
├≽ \`\`\`${_p}randomssh\`\`\`
├≽ \`\`\`${_p}ipopok\`\`\`
├≽ \`\`\`${_p}ipedukasi\`\`\`
├─────────────────
│              *⸨ V2RAY VMESS ⸩*
│
├≽ \`\`\`${_p}v2rayimclass\`\`\`
├≽ \`\`\`${_p}v2rayopok\`\`\`
├≽ \`\`\`${_p}v2rayaxis\`\`\`
│
└──────────────────╯
   \`\`\`Powered by @SobatGretong\`\`\`
─────────────────────
                       *ＳＧＤＣ－ＢＯＴ*
─────────────────────
`.trim()
let tytyd = {
   key: { 
      remoteJid: 'status@broadcast', 
      participant: '0@s.whatsapp.net', 
      fromMe: false 
     }, 
      message: { 
        "imageMessage": { 
        "mimetype": "image/jpeg", 
        "caption": `*https://t.me/SobatGretong*`, 
        "jpegThumbnail": fs.readFileSync("./src/SGDC.jpg")
       }
    }
}

conn.reply(m.chat, pepek, tytyd)

//conn.fakeReply(m.chat, pepek, '0@s.whatsapp.net', 'I Hope You Reading Description :)')
}
               
handler.command = /^(gretong(an|ers)?menu)$/i

module.exports = handler
///     MUHAMMAD  AFDHAN
