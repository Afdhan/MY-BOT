let limit = 30
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let server = (args[1] || 'id4').toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'Thumbnail.jpg', `
*Title:* ${title}
*Filesize:* ${filesizeF}
*Link:* 
${dl_link}

_Download Sendiri, Jangan Manja!_

*SGDC-BOT*
`.trim(), m)
  if (isPrems) conn.sendFile(m.chat, dl_link, title + '.mp3', `
*Title:* ${title}
*Filesize:* ${filesizeF}
`.trim(), m)
}

handler.command = /^yt(a|mp32)$/i

module.exports = handler

