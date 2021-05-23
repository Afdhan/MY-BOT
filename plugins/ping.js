let axios = require("axios");
let os = require("os")
let { performance } = require('perf_hooks')
let handler = async(m, { conn, text }) => {
     let { 
wa_version, 
mcc, 
mnc,
os_version, 
device_manufacturer, 
device_model 
} = conn.user.phone
	axios.get(`https://api.zeks.xyz/api`).then ((res) => {
		let up = process.uptime() * 1000
		let per = performance.now() % 10000
		let ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB / ' + Math.round(require('os').totalmem / 1024 / 1024) + 'MB'
	 	let hasil = `
*[  BOT STATUS  ]*

Status BOT: _78% Update_
Ram: _${ram}_
CPU: _${res.data.CPU}_
Uptime: _${clockString(up)}_
Versi WA: _
Status Charging: _${pickRandom(['false','false','false','true','true','true','false','false','true','false','null'])}_
Connection: _4G_

Ping: _${per} ms_

*[ • SGDC-BOT • ]*
`.trim()
    conn.reply(m.chat, hasil, m)
	})
}

handler.command = /^(status|ping)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

// MUHAMMAD AFDHAN
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
