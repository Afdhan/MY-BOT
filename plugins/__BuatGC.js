let MessageType = require('@adiwajshing/baileys');
let handler = async(m, { conn, text }) => {
   await m.reply(global.wait)
   if (!text) return m.reply('_Masukkan Nama Grup!_')
   try{
    let group = await conn.groupCreate(text, [m.sender || global.mods])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
    console.log ('Membuat Grup: ' + group.gid + 'Nama Grup: ' + text)
    //conn.sendMessage(group.gid, "Success to group create!", MessageType.extendedText)
     m.reply('_Berhasil Membuat Grup *' + text + '*_\nID: *' + group.gid + '*\n*Link:*\n' + url)
       } catch (e) {
    m.reply('```Error```')
    console.log (e)
  }
}
handler.command = /^((create|buat)(gc|grup|group))$/

module.exports = handler
