let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = false
  m.reply('```Success Unbanned```')
}

handler.command = /^(unbanchat|unban|unmute)$/i
handler.owner = true

module.exports = handler

