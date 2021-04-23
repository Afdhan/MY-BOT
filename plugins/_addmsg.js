let handler = async (m, { command, usedPrefix, text }) => {
    let M = m.constructor
    let which = command.replace(/get/i, '')
    if (!m.quoted) throw 'Reply Pesan!'
    if (!text) throw `Gunakan *${usedPrefix}list${which}* untuk melihat list`
    let msgs = global.DATABASE._data.msgs
    if (text in msgs) throw `'${text}' telah terdaftar di list pesan`
    msgs[text] = M.fromObject(M.toObject(await m.getQuotedObj()))
    m.reply(`Berhasil menambahkan pesan di database sebagai '${text}'`)
}

handler.command = /^add(vn|msg|video|audio|img|sticker)$/
handler.owner = true
module.exports = handler