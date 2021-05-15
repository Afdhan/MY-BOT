let handler = async (m, { conn, text, args }) => {
  let data = await conn.groupMetadata(m.chat)
  let hsl = JSON.stringify(data, null, 1)
  let yy = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
  //let dua = await conn.loadAllMessages(yy)
  for (let i = 0; i < yy.length; i++) {
      let dua += await conn.loadAllMessages(yy[i])
    }
  m.reply(dua)
}
handler.command = /^tes$/
module.exports = handler
