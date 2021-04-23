let handler = async(m, { conn, command, text }) => {
   try{
      if(command == 'search' || command == 'srch') {
       let resp = await conn.searchMessages(`${text}`, m.chat, 25, 1)
       await conn.reply(m.chat, `Hasil Pencarian Pesan ${text},\nAda *${resp.messages.length}* Pesan Ditemukan`, m)
       /*let tt = Object.values(resp.messages.length).map(v => '- ' + v).join('\n')
       m.reply(tt)*/
             let _m = await conn.serializeM(resp.messages.length)
                                       
              _m.copyNForward(m.chat, true)
         //conn.copyNForward(m.chat, m.message)
     } else if(command == 'load' || command == 'loadmsg') {
        let user = m.mentionedJid[0]
        let mess = await conn.loadMessages(m.chat, user)
        conn.reply(m.chat, `Total Pesan *${mess.length}*`, m)
      } else throw 'Terjadi Kesalahan'
       } catch (e) {
    m.reply('```Error```')
    console.log (e)
  }
}

handler.command = /^(search|srch|load(msg)?)$/

module.exports = handler
