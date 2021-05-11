let MessageType = require("@adiwajshing/baileys")
let handler = async (m, { conn, usedPrefix, isOwner, isAdmin, isBotAdmin }) => {

if (m.isGroup && !isAdmin && !isOwner){
            if(MessageType.sticker === true){
                if(isStickerMsg(m.sender)) return
                addStickerCount(m.sender)
            }
     }



function isStickerMsg(m){
            if (isOwner, isAdmin) {return false;}
            let found = false;
            for (let i of global.cspam){
                if(i.m === m){
                    if (i.msg >= 1) {
                        found === true 
                        conn.reply(m.chat, '*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 」*\nKamu telah SPAM STICKER di grup, kamu akan di kick otomatis oleh Elaina', m).then(() => {
                          //  conn.groupRemove(m.chat, id)
                        }).then(() => {
                            const cus = m.message
                            var found = false
                            Object.keys(global.cspam).forEach((i) => {
                                if(global.cspam[i].m == cus){
                                    found = i
                                }
                            })
                            if (found !== false) {
                                global.cspam[found].msg = 1;
                                const resultx = 'Database telah direset!'
                                console.log(global.cspam[found])
                                JSON.stringify(global.cspam);
                                conn.senMessage(m.chat, resultx, MessageType.extendedText)
                            } else {
                                    conn.reply(m.chat, `Nomor itu tidak terdaftar didalam database!`, m)
                            }
                        })
                        return true;
                    }else{
                        found === true
                        return false;
                    }   
                }
            }
            if (found === false){
                let obj = {m: `${m}`, msg:1};
                global.cspam.push(obj);
                JSON.stringify(global.cspam);
                return false;
            }  
        }
        function addStickerCount(m){
            if (isOwner, isAdmin) {return;}
            var found = false
            Object.keys(global.cspam).forEach((i) => {
                if(global.cspam[i].m == m){
                    found = i
                }
            })
            if (found !== false) {
                global.cspam[found].msg += 1;
                JSON.stringify(global.cspam);
            }
        }
}

global.cspam = ["1"]
        
handler.command = new RegExp
module.export = handler

