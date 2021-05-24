const { MessageType } = require("@adiwajshing/baileys")
let handler = (m, { conn, isNumber }) => {
	var date = new Date();

var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();

let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
//let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n' + readMore + '「 All Chat Broadcast 」')
let str = `
_Selamat Adzan Maghrib Untuk Wilayah D.K.I Jakarta Dan Sekitarnya..._

_*SGDC-BOT* Auto Reminder_
`.trim()

if (isNumber(jam) === 21 && isNumber(menit) === 37) {
	
 // for (let id of chats) conn.copyNForward(id, str, true) 
conn.sendMessage(m.chat, str, MessageType.text)
     }
}

/*
      "Shubuh": "04:35",
      "Dzuhur": "11:52",
      "Ashr": "15:14",
      "Maghrib": "17:46",
      "Isya": "19:00"
*/

module.exports = handler
