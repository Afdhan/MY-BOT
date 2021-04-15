const brainly = require('brainly-scraper-v2')
let handler = async function (m, { text, err }) {
try {
  if (!text) throw 'Pertanyaannya mana?'
  await m.reply(global.wait)
  let res = await brainly(text)
  let answer = res.data.map((v, i) => `*━━► ᴩᴇʀᴛᴀɴyᴀᴀɴ ᴋᴇ ${i + 1}:*\n${v.pertanyaan}\n\n${v.jawaban.map((v,i) => `*━━► ᴊᴀᴡᴀʙᴀɴ ᴋᴇ ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n\n*[  SGDC-BOT  ]━━━━━━━━━━━━━►*\n\n\n')
  m.reply(answer)
  //if (err)  return reply('Maaf _Brainly-Scraper_ Saat Ini Sedang Error!')
  } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(brain|brainly|bl)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
