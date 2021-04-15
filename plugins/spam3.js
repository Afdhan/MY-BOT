const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let [usr, psn] = text.split `|`

    if (!usr) return conn.reply(m.chat, 'Siapa yang mau di santet?', m)
    if (!psn) return conn.reply(m.chat, 'Silahkan masukan teks pesan', m)
    if (text.length > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)

    var kn = m.mentionedJid[0]
    let grup = conn.getName(m.key.remoteJid)
    let kr = kn.split("@s.whatsapp.net")[0]
 
    let ss = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let sn = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s3 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s4 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s5 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s6 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s7 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s8 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s9 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s0 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s11 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s12 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s13 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s14 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s15 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s16 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s17 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s18 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s19 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s20 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s21 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s22 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s23 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s24 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s25 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s26 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s27 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s28 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s29 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s30 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s31 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s32 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s33 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s34 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s35 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s36 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s37 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s38 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s39 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s40 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s41 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s42 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s43 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s44 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s45 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s46 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s47 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s48 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s49 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s50 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s51 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s52 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s53 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s54 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s55 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s56 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s57 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s58 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s59 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s60 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s61 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s62 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s63 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s64 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s65 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s66 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s67 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s68 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s69 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s70 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s71 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s72 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s73 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s74 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s75 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s76 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s77 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s78 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s79 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s80 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s81 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s82 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s83 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s84 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s85 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s86 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s87 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s88 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s89 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s90 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s91 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s92 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s93 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s94 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s95 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s96 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s97 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s98 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s99 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s100 = `*「 SANTET 」*\n\n*Dari Grup:*\n${grup}\n\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`


   // conn.sendMessage(kr + '@s.whatsapp.net', ss, MessageType.text)                                                                                                                                                                                                          conn.sendMessage(korban + '@s.whatsapp.net', spam2, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', sn, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s3, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s4, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s5, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s6, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s7, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s8, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s9, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s0, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s11, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s12, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s13, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s14, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s15, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', ss, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s16, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s17, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s18, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s19, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s20, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s21, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s22, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s23, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s24, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s25, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s26, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s27, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s28, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s29, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s30, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s31, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s32, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s33, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s34, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s35, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s36, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s37, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s38, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s39, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s40, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s41, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s42, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s43, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s44, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s45, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s46, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s47, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s48, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s49, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s50, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s51, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s52, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s53, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s54, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s55, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s56, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s57, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s58, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s59, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s60, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s61, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s62, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s63, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s64, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s65, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s66, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s67, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s68, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s69, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s70, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s71, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s72, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s73, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s74, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s75, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s76, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s77, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s78, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s79, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s80, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s81, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s82, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s83, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s84, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s85, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s86, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s87, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s88, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s89, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s90, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s91, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s92, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s93, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s94, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s95, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s96, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s97, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s98, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s99, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s100, MessageType.text)

 await m.reply('_Proses Pengiriman Spam..._')
    let kntl = `*Berhasil mengirim spam ke nomor tujuan!*`
    conn.reply(m.chat, kntl, m)

}

handler.command = /^(spam3)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null

module.exports = handler


//  MUHAMMAD AFDHAN


