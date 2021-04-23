let handler = async (m, { conn, command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `Gunakan *${usedPrefix}list${which}* untuk melihat list`
    let msgs = global.DATABASE._data.msgs
    if (!text in msgs) throw `'${text}' tidak terdaftar di list pesan`
    let _m = await conn.serializeM(msgs[text])
    await _m.copyNForward(m.chat, true)
}

handler.command = /^get(vn|msg|video|audio|img|sticker)$/

module.exports = handler