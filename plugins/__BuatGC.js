let MessageType = require('@adiwajshing/baileys');
let handler = async(m, { conn, text }) => {
   await m.reply(global.wait)
   try{
    /*let nmr = m.sender
    let mor = nmr.split("@s.whatsapp.net")[0]
    let ttk = 'mor@s.whatsapp.net'
    let group = */
    await conn.groupCreate(text)
    //console.log ('Membuat Grup: ' + group.gid)
    //conn.sendMessage(group.gid, "Success to group create!", MessageType.extendedText)
    conn.reply(m.chat, '_Berhasil Membuat Grup_ *' + text + '*', m)
       } catch (e) {
    m.reply('```Error```')
    console.log (e)
  }
}

handler.command = /^((create|buat)(gc|grup|group))$/

module.exports = handler
