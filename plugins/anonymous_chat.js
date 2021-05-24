const { MessageType } = require("@adiwajshing/baileys")

async function handler(m, { command }) {
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) throw '_Kamu Tidak Sedang Berada Di Dalam Anonymous Chat!_'
            m.reply('```Perintah Diterima!```')
            let other = room.other(m.sender)
            if (other) this.sendMessage(other, '_Partner Anda Meninggalkan Chat!_', MessageType.text)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'anonymuschat':
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) throw '_Kamu Masih Berada Dalan Anonymous Chat!_'
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                this.sendMessage(room.a, '```Partner Ditemukan!```', MessageType.text)
                room.b = m.sender
                room.state = 'CHATTING'
                m.reply('```Partner Ditemukan!```')
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                m.reply('```Waiting Partner...```')
            }
            break
        }
    }
}

handler.command = ['start', 'leave', 'next', 'anonymuschat']
handler.private = true

module.exports = handler
