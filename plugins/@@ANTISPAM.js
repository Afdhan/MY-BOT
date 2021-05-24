let handler = (m, { isBotAdmin }) => m

handler.all = async function (m) {
    this.spam = this.spam ? this.spam : {}
    if (!(m.sender in this.spam)) {
        let spaming = {
        jid: await m.sender, 
        spam: 0,
        lastspam: 0

        }
        this.spam[spaming.jid] = spaming
    } else try {
        this.spam[m.sender].spam += 1
        if (new Date - this.spam[m.sender].lastspam > 4000) {
            if (this.spam[m.sender].spam > 10) {
                this.spam[m.sender].spam = 0
                this.spam[m.sender].lastspam = new Date * 1
                global.DATABASE._data.users[m.sender].banned = true
                if(m.isGroup &&  isBotAdmin){
                       await m.reply('```Kamu Telah Melakukan Spam Di Grup Ini! Maaf Kamu Akan Di Kick Oleh SGDC-BOT```')
                       this.blockUser(m.sender, "add")
                       this.groupRemove(m.chat, [m.sender])
              }else if(m.isGroup && !isBotAdmin){
              	await m.reply('```Kamu Telah Melakukan Spam Di Grup Ini! Grup Dan User Akan Di Banned Oleh SGDC-BOT```')
                 global.DATABASE._data.users[m.chat].banned = true
              	this.blockUser(m.sender, "add")
              }else if(!m.isGroup){
              	await m.reply('```Kamu Telah Melakukan Spam Di Diluar Batas! Kamu Akan Di Blokir Oleh SGDC-BOT```')
                   this.blockUser(m.sender, "add")
                   }
            } else {
                this.spam[m.sender].spam = 0
                this.spam[m.sender].lastspam = new Date * 1
            }
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = handler
