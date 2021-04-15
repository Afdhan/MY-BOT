let handler = async (m, { conn, text }) => {
	m.reply(`
*╭═════════╮*
*║ ○* Welcome
*║ ○* Antilink
*║ ○* Badword
*║ ○* Simsimi
*║ ○* Delete
*║ ○* Nsfw
*╰═════════╯*
`.trim())
}
handler.command = /^(optionlist)$/i
handler.owner = true

//  MUHAMMAD AFDHAN

module.exports = handler
