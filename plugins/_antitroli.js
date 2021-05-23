let handler = m => m

handler.all = async function (m) {
    if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
        m.reply('```Bug Troli Terdeteksi!```\n\n' + require('util').format(m.key) + '\n\n*SGDC-BOT* Akan Membersihkan Chat!')
        await this.clearMessage(m.chat, m.key)
    }
}

module.exports = handler