let MessageType = require('@adiwajshing/baileys');
let handler = async(m, { conn, text }) => {
   
   if (!text) return m.reply('_Masukkan Nama Grup!_')
   try{
         await m.reply(global.wait)
    let group = await conn.groupCreate(text, [m.sender])
    //let user = m.sender.split("@s.whatsapp.net")[0]
    //let users = user.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v.length > 20)
         //await conn.groupAdd(group.gid, users)
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
    console.log ('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text)
    //conn.sendMessage(group.gid, "Success to group create!", MessageType.extendedText)
     m.reply('_Berhasil Membuat Grup *' + text + '*_\n\n*Nama:* ' + text + '\n*ID:* ' + group.gid + '\n*Link:* ' + url)
       } catch (e) {
    m.reply('```Error```')
    console.log (e)
  }
}
handler.command = /^((create|buat)(gc|grup|group))$/

module.exports = handler
///////////////////////
/// MUHAMMAD AFDHAN ///
///////////////////////
