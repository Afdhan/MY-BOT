let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
  let [_, code] = text.match(linkRegex) || []
  if (!code) throw '_Masukkan Link Yang Benar!_'
  await m.reply(global.wait)
  let res = await conn.query({
    json: ["query", "invite", code],
    expect200: true
  })
  let caption = `
*[   GROUP LINK INSPECTOR   ]*

*> Nama Grup:* ${res.subject}
*> ID:* ${res.id}
*> Dibuat Pada:* ${formatDate(res.creation * 1000)}
*> Nama Diubah Oleh:* @${res.subjectOwner.split`@`[0]} *Pada* ${formatDate(res.subjectTime * 1000)}
*> Deskripsi Dibuat Oleh:* @${res.descOwner.split`@`[0]} *Pada* ${formatDate(res.descTime * 1000)}
*> Deskripsi:*
${res.desc}


*SGDC-BOT*
`.trim()
  m.reply(caption, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(caption)
    }
  })
}

handler.command = /^(inspect(link)?|info(link|url)?)$/i

module.exports = handler

function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
