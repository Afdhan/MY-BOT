let handler = async (m, { conn, text }) => {

let s1 = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
let s2 = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)

let kn = s1[Math.floor(Math.random() * s1.length)]
let kw = s2[Math.floor(Math.random() * s2.length)]

let kntll = `
_Woyy @${kn.split("@")[0]} Sama @${kw.split("@")[0]} Baru Jadian Woyy !!! xD_
`.trim()
    
    conn.reply(m.chat, kntll, m, { 
         contextInfo: { 
               mentionedJid: [kn, kw]
             }
         }
     )
}

handler.command = /^(jadian)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
