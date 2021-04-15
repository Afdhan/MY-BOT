let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link?!'
    let res = await conn.query({
        json: ["action", "invite", code]
    })
    if (res.status !== 200) throw res
    m.reply(`_Berhasil Join Grup ${res.gid}_`)
}

handler.command = /^(join)$/i
handler.premium = true

handler.fail = null

//  MUHAMMAD AFDHAN

module.exports = handler
