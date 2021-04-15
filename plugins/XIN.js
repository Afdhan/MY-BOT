let handler = async (m, { conn, args }) => {
	let ingfo = `
*╭══ 「  INFO SGDC-BOT  」 ══╮*
*║*
*║• • ~ Github:*
*║•* _https://github.com/Afdhan/SGDC_
*║*
*║• • ~ Script Ori:*
*║•* _https://github.com/Nurutomo/wabot-aq_
*║*
*║• • ~ Recode By:*
*║•* _@dhans11___  _x Admin SGDC-TEAM_
*║*
*║• • ~ Thanks To:*
*║•* _Seluruh Contributors Nurutomo/wabot-aq_
*║•* _Seluruh Rest Api BOT WhatsApp_
*║•* _Seluruh Creator BOT WhatsApp_
*║•* _Seluruh Admin Dan Owner SGDC_
*║•* _Seluruh Orang Yang Terlibat Di BOT Ini_
*║*
*╰════════════════*

_Saya Pribadi Mengucapkan Ribuan, Jutaan, Milyaran, Atau Bahkan Trilyunan Terima Kasih Kepada Orang-Orang Hebat Diatas, Khususnya *Nurutomo* Dan *Semua Contibutors wabot-aq*_
`.trim()
	conn.fakeReply(m.chat, ingfo, '0@s.whatsapp.net', '*INGFO SGDC-BOT*')
}

handler.customPrefix = /^(X)$/i
handler.command = new RegExp


handler.fail = null

module.exports = handler
