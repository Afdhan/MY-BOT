let handler = async(m, { conn, text }) => {
   try{
       let resp = await conn.searchMessages(`${text}`, m.chat, 25, 1)
       conn.reply(m.chat, `Hasil Pencarian Pesan ${text},\nAda *${resp.messages.length}* Pesan Ditemukan`, m)
       } catch (e) {
    m.reply('```Error```')
    console.log (e)
  }
}

handler.command = /^(search|srch)$/

module.exports = handler
