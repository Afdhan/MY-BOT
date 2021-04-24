let MessageType = require('@adiwajshing/baileys');
let handler = async(m, { conn, text }) => {
   await m.reply(global.wait)
   try{
    let group = await conn.groupCreate(text, [m.sender || global.mods])
    console.log ('Membuat Grup: ' + group.gid + 'Nama Grup: ' + text)
    //conn.sendMessage(group.gid, "Success to group create!", MessageType.extendedText)
     m.reply('_Berhasil Membuat Grup *' + text + '*_\nID: *' + group.gid + '*')
       } catch (e) {
    m.reply('```Error```')
    console.log (e)
  }
}
handler.command = /^((create|buat)(gc|grup|group))$/

module.exports = handler
