let handler = async (m, { conn, text, args, command: cmd, usedPrefix: _p }) => {
        let prf = `${pickRandom(global.rpf)}`
        let ch = m.message
	if(cmd.startsWith(_p + cmd) || cmd.startsWith(prf + cmd) === undefined) {
	let user = m.sender
        conn.reply(m.chat, `Maaf @${user.split("@")[0]}, Command *${m.text}* Tidak Ditemukan`, m, { contextInfo: { mentionedJid: [user]}})
       /*let users = global.DATABASE._data.users
       users[user].banned = true*/
       }
   }
handler.command = new RegExp

module.exports = handler

global.rpf = [
"♤","◇","~","●","@","•","♡",",","♧",
"○","¥","+","+","×","%","$","☆","/","^",
"#","?","€","7","*","Q","0","Z",".","1","!","-",
]

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
