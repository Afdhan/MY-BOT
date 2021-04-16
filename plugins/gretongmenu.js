let handler  = async (m, { conn, usedPrefix: _p }) =>  {
  let pepek = `
*┏━━━━━━━━━━━━━━━━━━━┓*
*┃                         SGDC-BOT*
*┃╭═════════════════╮*
*┃                   SGDC-BOT@^1.6.0*
*┃*
*┃╭═════════════════╮*
*┃                    GRETONG MENU*
*┃╰═════════════════╯*
*┃                   Configuration (HC)*
*┃╭═════════════════╮*
*┃║ ${_p}axisgame*
*┃║ ${_p}axisedukasi*
*┃║ ${_p}axischat*
*┃║ ${_p}axismusic*
*┃║ ${_p}axistiktok*
*┃║ ${_p}axisconference* (Coid)
*┃║ ${_p}axissosmed*
*┃║ ${_p}xlchat*
*┃║ ${_p}xlunli*
*┃║ ${_p}xlcombo*
*┃║ ${_p}xlconference* (Coid)
*┃║ ${_p}triedukasi*
*┃║ ${_p}imclass*
*┃║ ${_p}isatkemendikbud*
*┃║ ${_p}unlimax*
*┃║ ${_p}unliapps*
*┃║ ${_p}unlichat*
*┃║ ${_p}unliwa*
*┃║ ${_p}facebook*
*┃║ ${_p}youtube*
*┃║ ${_p}tiktok*
*┃║ ${_p}instagram*
*┃║ ${_p}kbssl*
*┃║ ${_p}kbdirek*
*┃║ ${_p}kemendikbud*
*┃║ ${_p}gamemax*
*┃║ ${_p}musicmax*
*┃║ ${_p}maxtream* (Coid)
*┃║ ${_p}tselopok*
*┃║ ${_p}omg*
*┃╰═════════════════╯*
*┃                             List Bug*
*┃╭═════════════════╮*
*┃║ ${_p}bugig*
*┃║ ${_p}bugwa*
*┃║ ${_p}bugfb*
*┃║ ${_p}bugff*
*┃║ ${_p}bugyt*
*┃║ ${_p}bugcod*
*┃║ ${_p}bugunli*
*┃║ ${_p}bugimclass*
*┃║ ${_p}bugopok*
*┃║ ${_p}bugzoom*
*┃║ ${_p}bugpubg*
*┃║ ${_p}bugtiktok*
*┃║ ${_p}bughbogo*
*┃║ ${_p}bugmicrosoft*
*┃╰═════════════════╯*
*┃                       Payload Inject*
*┃╭═════════════════╮*
*┃║ ${_p}payloadkuotabelajar*
*┃║ ${_p}payloadgamemax*
*┃║ ${_p}payloadimclass*
*┃║ ${_p}payloadaxisedukasi*
*┃║ ${_p}payloadisatopok*
*┃║ ${_p}payloadunlimax*
*┃║ ${_p}payloadtriedukasi*
*┃╰═════════════════╯*
*┃                         Secure SHell*
*┃╭═════════════════╮*
*┃║ ${_p}sshindo* _(none)_
*┃║ ${_p}univ*
*┃║ ${_p}ssh*
*┃║ ${_p}randomssh*
*┃║ ${_p}keytrial* _(none)_
*┃║ ${_p}ipopok*
*┃║ ${_p}ipedukasi*
*┃╰═════════════════╯*
*┃                       V2Ray Vmess*
*┃╭═════════════════╮*
*┃║ ${_p}v2rayimclass* 
*┃║ ${_p}v2rayopok*
*┃║ ${_p}v2rayaxis*
*┃║ ${_p}v2raytsel* _(none)_
*┃╰═════════════════╯*
*┃                          SGDC-BOT*
*┗━━━━━━━━━━━━━━━━━━━┛*
`.trim()

conn.fakeReply(m.chat, pepek, '0@s.whatsapp.net', '*JANGAN LUPA BACA DESKRIPSI*')
}
               
handler.command = /^(gretong(an|ers)?menu)$/i
handler.fail = null

module.exports = handler
///     MUHAMMAD  AFDHAN
