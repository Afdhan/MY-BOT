let handler = m => m

let bw = /(anjing|kontol|bangsat|ngentot|ngewe|memek|tolol)/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isBW = bw.exec(m.text)
  if (chat.badWord && isBW) 
    m.reply(`
*╭════[ ANTI BADWORD ]════╮*

*_Jangan Kasar Mbah !!!_(

*[ • SGDC-BOT • ]*
`.trim())
  return true
}


//module.exports = handler



