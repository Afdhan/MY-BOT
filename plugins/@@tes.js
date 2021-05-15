let handler = async (m, { conn, text, args }) => {
 // let data = await conn.groupMetadata(m.chat)
  //let hsl = JSON.stringify(tuga, null, 1)
 // let yy = Object.values(global.DATABASE._data.users).filter(user => user.registered == false)
  /*let dua = 'TES\n\n'
      //await conn.loadAllMessages(yy)
  for (let i = 0; i < yy.length; i++) {
      dua = `@${yy[i].split("@")[0]}`
    }*/
  let tuga = await conn.groupMetadataMinimal(m.chat)
  let hsl = JSON.stringify(tuga, null, 1)
  m.reply(hsl)
}
handler.command = /^tes$/
module.exports = handler
