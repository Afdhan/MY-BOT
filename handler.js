let util = require('util')
let simple = require('./lib/simple')
let { MessageType } = require('@adiwajshing/baileys')

const isNumber = x => typeof x === 'number' && !isNaN(x)
module.exports = {
  async handler(chatUpdate) {
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    let m = chatUpdate.messages.all()[0]
    try {
      simple.smsg(this, m)
      m.exp = 0
      m.limit = false
      try {
        let user = global.DATABASE._data.users[m.sender]
        if (typeof user !== 'object') global.DATABASE._data.users[m.sender] = {}
        if (user) {
          if (!'registered' in user) user.registered = false
          if (!user.registered) {
            if (!'number' in user) user.number = m.sender.split("@")[0]
            if (!'name' in user) user.name = this.getName(m.sender)
            if (!'pesan' in user) user.pesan = m.text
          }
          if (!isNumber(user.afk)) user.afk = -1
          if (!'afkReason' in user) user.afkReason = ''
          if (!'banned' in user) user.banned = false
         } else global.DATABASE._data.users[m.sender] = {
          registered: false,
          number: m.sender.split("@")[0],
          name: this.getName(m.sender),
          pesan: m.text,
          afk: -1,
          afkReason: '',
          banned: false,
        }
    
        let chat = global.DATABASE._data.chats[m.chat]
        if (typeof chat !== 'object') global.DATABASE._data.chats[m.chat] = {}
        if (chat) {
          if (!'isBanned' in chat) chat.isBanned = false
          if (!'welcome' in chat) chat.welcome = false
          if (!'detect' in chat) chat.detect = false
          if (!'sWelcome' in chat) chat.sWelcome = ''
          if (!'sBye' in chat) chat.sBye = ''
          if (!'sPromote' in chat) chat.sPromote = ''
          if (!'sDemote' in chat) chat.sDemote = ''
          if (!'delete' in chat) chat.delete = false
          if (!'antiLink' in chat) chat.antiLink = false
          if (!'badWord' in chat) chat.badWord = false
          if (!'simi' in chat) chat.simi = false
          if (!'nsfw' in chat) chat.nsfw = false       
          if (!'gretong' in chat) chat.gretong = false   
        } else global.DATABASE._data.chats[m.chat] = {
          isBanned: false,
          welcome: false,
          detect: false,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          delete: false,
          antiLink: false,
          badWord: false,
          simi: false,
          nsfw: false,
          gretong: false,
        }
      } catch (e) {
        console.error(e)
      }
      if (opts['nyimak']) return
      if (!m.fromMe && opts['self']) return
      if (typeof m.text !== 'string') m.text = ''
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!plugin.all) continue
        if (typeof plugin.all !== 'function') continue
        try {
          await plugin.all.call(this, m, chatUpdate)
        } catch (e) {
          console.error(e)
        }
      }
      if (m.isBaileys) return
      m.exp += Math.ceil(Math.random() * 10)

      let usedPrefix
      let _user = global.DATABASE.data && global.DATABASE.data.users && global.DATABASE.data.users[m.sender]

      let isROwner = [global.conn.user.jid, ...global.rowner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isOwner = isROwner || m.fromMe || global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isMods = global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isPrems = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let groupMetadata = m.isGroup ? this.chats.get(m.chat).metadata || await this.groupMetadata(m.chat) : {} || {}
      let participants = m.isGroup ? groupMetadata.participants : []
      let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {}
      let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {}
      let isAdmin = user.isAdmin || user.isSuperAdmin || false
      let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false
      for (let name in global.plugins) {
    	let plugin = global.plugins[name]
      if (!plugin) continue
      if (plugin.disabled) continue
      if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue
        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
  	  let match = (_prefix instanceof RegExp ?
          [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ?
            _prefix.map(p => {
         let re = p instanceof RegExp ?             
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
             typeof _prefix === 'string' ?
              [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
              [[[], new RegExp]]
        ).find(p => p[1])
        if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
        })) continue
        if (typeof plugin !== 'function') continue
    	if ((usedPrefix = (match[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
  	    let [command, ...args] = noPrefix.trim().split` `.filter(v=>v)
          args = args || []
          let _args = noPrefix.trim().split` `.slice(1)
          let text = _args.join` `
    	  command = (command || '').toLowerCase()
          let fail = plugin.fail || global.dfail
  		let isAccept = plugin.command instanceof RegExp ?
            plugin.command.test(command) :
            Array.isArray(plugin.command) ?
              plugin.command.some(cmd => cmd instanceof RegExp ?
                cmd.test(command) :
                cmd === command
              ) :
              typeof plugin.command === 'string' ?
                plugin.command === command :
                false

    	  if (!isAccept) continue
          m.plugin = name
          if (m.chat in global.DATABASE._data.chats || m.sender in global.DATABASE._data.users) {
            let chat = global.DATABASE._data.chats[m.chat]
            let user = global.DATABASE._data.users[m.sender]
            if (name != 'unbanchat.js' && chat && chat.isBanned) return
            if (name != 'unbanuser.js' && user && user.banned) return
          }
          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { 
            fail('owner', m, this)
            continue
          }
          if (plugin.rowner && !isROwner) { 
            fail('rowner', m, this)
            continue
          }
          if (plugin.owner && !isOwner) {
            fail('owner', m, this)
            continue
          }
          if (plugin.mods && !isMods) { 
            fail('mods', m, this)
            continue
          }
          if (plugin.premium && !isPrems) { 
            fail('premium', m, this)
            continue
          }
      	if (plugin.group && !m.isGroup) {
            fail('group', m, this)
            continue
          } else if (plugin.botAdmin && !isBotAdmin) {
            fail('botAdmin', m, this)
            continue
          } else if (plugin.admin && !isAdmin) {
            fail('admin', m, this)
            continue
          }
          if (plugin.private && m.isGroup) {
            fail('private', m, this)
            continue
          }
          if (plugin.register == false && _user.registered == true) {
            fail('unreg', m, this)
            continue
          }

          m.isCommand = true
          let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17
          if (xp > 200) m.reply('Mengbengek xD') 
          else m.exp += xp
          if (!isPrems && plugin.limit && global.DATABASE._data.users[m.sender].limit < plugin.limit * 1) {
            this.reply(m.chat, `Fffftttt`, m)
            continue 
          }
      let extra = {
              match,
              usedPrefix,
              noPrefix,
              _args,
              args,
              command,
              text,
              conn: this,
              participants,
              groupMetadata,
              user,
              bot,
              isROwner,
              isOwner,
              isAdmin,
              isBotAdmin,
              isPrems,
              chatUpdate,
            }
            try {
            await plugin.call(this, m, extra)
            if (!isPrems) m.limit = m.limit || plugin.limit || false
          } catch (e) {
            m.error = e
            console.error(e) 
            if (e) {
              let text = util.format(e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
              m.reply(text)
            }
          } finally {
            // m.reply(util.format(_user))
            if (typeof plugin.after === 'function') {
              try {
                await plugin.after.call(this, m, extra)
              } catch (e) {
                console.error(e)
              }
            }
            if (m.limit) m.reply(':v')
          }
     	break
    	}
  	}
    } finally {
      //console.log(global.DATABASE._data.users[m.sender])
      let user, stats = global.DATABASE._data.stats
      if (m) {
        if (m.sender && (user = global.DATABASE._data.users[m.sender])) {
          user.exp += m.exp
          user.limit -= m.limit * 1
        }
    
        let stat
        if (m.plugin) {
          let now = + new Date
          if (m.plugin in stats) {
            stat = stats[m.plugin]
            if (!isNumber(stat.total)) stat.total = 1
            if (!isNumber(stat.success)) stat.success = m.error ? 0 : 1
            if (!isNumber(stat.last)) stat.last = now
            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error ? 0 : now
          } else stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now
          }
          stat.total += 1
          stat.last = now
          if (m.error == null) {
            stat.success += 1
            stat.lastSuccess = now
          }
        }
      } 

      try {
        require('./lib/print')(m, this)
      } catch (e) {
        console.log(m, m.quoted, e)
      }
    }
  },
   async participantsUpdate({ jid, participants, action }) {
    let chat = global.DATABASE._data.chats[jid] || {}
    let text = ''
    switch (action) {
      case 'add':
      case 'remove':
        if (chat.welcome) {
          for (let user of participants) {
            let pp = './src/avatar_contact.png'
            try {
              pp = await this.getProfilePicture(user)
            } catch (e) {
            } finally {
              text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', this.getName(jid)) :
                (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0])
               this.sendFile(jid, pp, 'pp.jpg', text, null, false, {
                contextInfo: {
                  mentionedJid: [user]
                }
              })
            }
          }
        }
      break
      case 'promote':
        text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
      case 'demote':
        if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
        text = text.replace('@user', '@' + participants[0].split('@')[0])
        if (chat.detect) this.sendMessage(jid, text, MessageType.extendedText, {
          contextInfo: {
            mentionedJid: this.parseMention(text)
          }
        })
        break
    }
  },
  async delete(m) {
    if (m.key.fromMe) return
    let chat = global.DATABASE._data.chats[m.key.remoteJid]
    if (!chat.delete) return
    await this.reply(m.key.remoteJid, `
*「  CHAT ANTI DELETE  」*

_Terdeteksi *@${m.participant.split`@`[0]}* telah menghapus pesan!_

*SGDC-BOT*
`.trim(), m.message, {
      contextInfo: {
        mentionedJid: [m.participant]
      }
    })
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  }
}

global.dfail = (type, m, conn) => {
  let msg = {
    rowner: "```[!] Only For Owner Script SGDC-BOT```",
    owner: "```[!] Only For Owner SGDC-BOT```",
    mods: "```[!] Only For Mods SGDC-BOT```",
    premium: "```[!] Only For Premium Users!```",
    group: "```[!] Only For Group Chats!```",
    private: "```[!] Only For Private Chats!```",
    admin: "```[!] Only For Group Admins!```",
    botAdmin: "```[!] SGDC-BOT Must Be Admin To Use This Feature!```"
  }[type]
  if (msg) return m.reply(msg)
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})
