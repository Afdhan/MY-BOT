let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `Gunakan *${usedPrefix}list${which}* untuk melihat list`
    let msgs = global.DATABASE._data.msgs
    if (!text in msgs) throw `'${text}' tidak terdaftar di list`
    delete msgs[text]
    m.reply(`Berhasil menghapus pesan '${text}'`)
}

handler.command = /^del(vn|msg|video|audio|img|sticker)$/
handler.owner = true
module.exports = handler