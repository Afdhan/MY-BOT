let MessageType = require('@adiwajshing/baileys');
let handler = async(m, { conn, text }) => {
   try{
    let nmr = m.sender
    let mor = nmr.split("@s.whatsapp.net")[0]
    let ttk = 'mor@s.whatsapp.net'
    let group = await conn.groupCreate(text, [ttk])
    console.log ('Membuat Grup' + text)
    conn.sendMessage(group.gid, "Success to group create!", MessageType.extendedText)
     m.reply('_Berhasil Membuat Grup_ *' + group.gid + '*')
       } catch (e) {
    m.reply('```Error```')
    console.log (e)
  }
}

handler.command = /^((create|buat)(gc|grup|group))$/

module.exports = handler
