let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
  let [_, code] = text.match(linkRegex) || []
  if (!code) throw 'Link invalid'
  let res = await conn.query({
    json: ["query", "invite", code],
    expect200: true
  })
  let caption = `
[ • GROUP LINK INSPECTOR • ]

Judul: ${res.subject}
Dibuat Pada: ${formatDate(res.creation * 1000)}
Judul Diubah Oleh @${res.subjectOwner.split`@`[0]} pada ${formatDate(res.subjectTime * 1000)}
Deskripsi Dibuat Oleh: @${res.descOwner.split`@`[0]} pada ${formatDate(res.descTime * 1000)}
Deskripsi:
${res.desc}

Res: ${res.id}
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