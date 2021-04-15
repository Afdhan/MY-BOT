let handler = function (m) {
  this.sendContact(m.chat, '6282252655313', ' ᴍ ᴀꜰᴅʜᴀɴ || @dhans11__', m)
m.reply('wa.me/6282252655313')
}

handler.command = /^(owner|creator)$/i

handler.fail = null

module.exports = handler
