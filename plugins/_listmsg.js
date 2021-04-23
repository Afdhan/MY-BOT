let handler = m => {
    let msgs = global.DATABASE._data.msgs
    m.reply(`
*LIST PESAN*
${Object.keys(msgs).map(v => '- ' + v).join('\n')}
`.trim())
}

handler.command = /^list(vn|msg|video|audio|img|sticker)$/
handler.owner = true
module.exports = handler