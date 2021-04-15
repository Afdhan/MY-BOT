let handler  = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, '_Kenapa Nggk Langsung Aja Ke Terminalnya?_', m)
  else {
    await conn.reply(m.chat, 'GoodBye XD', m)
    conn.close()
  }
}

handler.command = /^(berhenti|stop|stopjadibot|stopnumpang)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

