const fs = require('fs')
const path = require('path')


module.exports = async function(m, users, args) => {
	let result
        if (users != m.mentionedJid && args.length == 1) {
	            result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0]
       }else if(args.length == 2) {
	            result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1]
       }else if(args.length == 3) {
	            result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2]
       }else if(args.length == 4) {
	            result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3]
       }else if(args.length == 5) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4]
       }else if(args.length == 6) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5]
       }else if(args.length == 7) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6]
       }else if(args.length == 8) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7]
       }else if(args.length == 9) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8]
       }else if(args.length == 10) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9]
       }else if(args.length == 11) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10]
       }else if(args.length == 12) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11]
       }else if(args.length == 13) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12]
       }else if(args.length == 14) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13]
       }else if(args.length == 15) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14]
       }else if(args.length == 16) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14] + '+' + args[15]
       }else if(args.length == 17) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14] + '+' + args[15] + '+' + args[16]
       }else if(args.length == 18) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14] + '+' + args[15] + '+' + args[16] + '+' + args[17]
       }else if(args.length == 19) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14] + '+' + args[15] + '+' + args[16] + '+' + args[17] + '+' + args[18]
       }else if(args.length == 20) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14] + '+' + args[15] + '+' + args[16] + '+' + args[17] + '+' + args[18] + '+' + args[19]
}
       if (users == m.mentionedJid[0] && args.length == 2) {
	            result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1]
       }else if(args.length == 3) {
	            result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2]
       }else if(args.length == 4) {
	            result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3]
       }else if(args.length == 5) {
	            result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4]
       }else if(args.length == 6) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5]
       }else if(args.length == 7) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6]
       }else if(args.length == 8) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7]
       }else if(args.length == 9) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8]
       }else if(args.length == 10) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9]
       }else if(args.length == 11) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10]
       }else if(args.length == 12) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11]
       }else if(args.length == 13) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12]
       }else if(args.length == 14) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13]
       }else if(args.length == 15) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14]
       }else if(args.length == 16) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14] + '+' + args[15]
       }else if(args.length == 17) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14] + '+' + args[15] + '+' + args[16]
       }else if(args.length == 18) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14] + '+' + args[15] + '+' + args[16] + '+' + args[17]
       }else if(args.length == 19) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14] + '+' + args[15] + '+' + args[16] + '+' + args[17] + '+' + args[18]
       }else if(args.length == 20) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14] + '+' + args[15] + '+' + args[16] + '+' + args[17] + '+' + args[18] + '+' + args[19]
       }else if(args.length == 21) {
                result = 'https://wa.me/' + users.split`@`[0] + '&send?text=' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14] + '+' + args[15] + '+' + args[16] + '+' + args[17] + '+' + args[18] + '+' + args[19] + '+' + args[20]
}
    if(!result || !users || users === undefined) {
            result = 'Users is undefined'
            console.log(result)
    }
   if (args.length > 20) console.log ('Teks Terlalu Panjang! Maksimal 20 Kata')
	return result
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'lib/CreateLink.js'"))
  delete require.cache[file]
})