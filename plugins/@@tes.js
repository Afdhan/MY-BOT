let handler = async (m, { conn, text, args }) => {
  let data = await conn.groupMetadata(m.chat)
  let hsl = JSON.stringify(data, null, 1)
  m.reply(hsl)
}
handler.command = /^tes$/
module.exports = handler
