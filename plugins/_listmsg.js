let handler = m => {
    let msgs = global.DATABASE._data.msgs
    m.reply(`
*LIST PESAN DATABASE*

${Object.keys(msgs).map(v => '- ' + v).join('\n')}

*SGDC-BOT*
`.trim())
}

handler.command = /^list(vn|msg|video|audio|img|sticker)$/

module.exports = handler
