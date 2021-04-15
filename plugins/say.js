let handler = async (m, { conn, text }) => {
  if (!text) throw '_Masukan teks!_'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.command = /^say$/i

module.exports = handler
