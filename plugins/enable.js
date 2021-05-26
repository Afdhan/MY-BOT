let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
  let isEnable = /true|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  switch (type) {
    case 'gretong':
    case 'gretongan':
    case 'gretongers':
    case 'grtg':
    case 'phreaker':
    chat.gretong = isEnable
  	break
    case 'welcome':
    case 'wel':
      chat.welcome = isEnable
      break
    case 'delete':
    case 'del':
      chat.delete = isEnable
      break
    case 'public':
    case 'self':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      chat.antiLink = isEnable
      break
    case 'simsimi':
    case 'simi':
      chat.simi = isEnable
      break
    case 'nsfw':
      chat.nsfw = isEnable
      break
    case 'detect':
    case 'autodetect':
      chat.detect = isEnable
      break
    case 'alloption':
    case 'option':
      //chat.badWord = isEnable
      chat.simi = isEnable
      chat.detect = isEnable
      chat.antiLink = isEnable
      chat.welcome = isEnable
      chat.delete = isEnable
      chat.gretong = isEnable
      break
    default:
      return m.reply(`
List option: welcome | delete | simi | antilink | gretong

Contoh:
${usedPrefix}on welcome
${usedPrefix}off welcome
`.trim())
  }
  m.reply(`
_Berhasil Me${isEnable ? 'nyala' : 'mati'}kan *${type}* Untuk ${isAll ? 'BOT ini' : 'Chat Ini'}_
`.trim())
}

handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff))$/i
handler.owner = true

handler.fail = null

module.exports = handler


// MUHAMMAD AFDHAN
// SC BY NURUTOMO
