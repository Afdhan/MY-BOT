let handler = async (m, { conn, usedPrefix }) => {
    let nama = conn.getName(m.sender)
    let ayam = m.sender
  conn.reply(m.chat, `_Hai Kak @${ayam.split("@")[0]}, Ketik *${pickRandom(global.rpf)}menu* Untuk Memulai *SGDC-BOT*_`, m, { 
      contextInfo: { 
          mentionedJid: [ayam] 
      } 
  })
}
handler.customPrefix = /(bot|sgdc-bot|bott|@6283159600193)/i
handler.command = new RegExp

module.exports = handler


global.rpf = [
"♤","◇","~","●","@","•","♡",",","♧",
"○","¥","+","+","×","%","$","☆","/","^",
"#","?","€","7","*","Q","0","Z",".","1","!","-",
]

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
