let handler = async (m, { conn, args, text }) => {
	let who = m.sender
	if (args.length == 0) return m.reply ('Masukkan Teks')
	if (args.length > 20) return m.reply ('Teks Terlalu Panjang! Maksimal 20 Kata')
	let hsl
        if (args.length == 1) {
	            hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0]
       }else if(args.length == 2) {
	            hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1]
       }else if(args.length == 3) {
	            hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2]
       }else if(args.length == 4) {
	            hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3]
       }else if(args.length == 5) {
                hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4]
       }else if(args.length == 6) {
                hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5]
       }else if(args.length == 7) {
                hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6]
       }else if(args.length == 8) {
                hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7]
       }else if(args.length == 9) {
                hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8]
       }else if(args.length == 10) {
                hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9]
       }else if(args.length == 11) {
                hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10]
       }else if(args.length == 12) {
                hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11]
       }else if(args.length == 13) {
                hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12]
       }else if(args.length == 14) {
                hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13]
       }else if(args.length == 15) {
                hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14]
       }else if(args.length == 16) {
                hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14] + '+' + args[15]
       }else if(args.length == 17) {
                hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14] + '+' + args[15] + '+' + args[16]
       }else if(args.length == 18) {
                hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14] + '+' + args[15] + '+' + args[16] + '+' + args[17]
       }else if(args.length == 19) {
                hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14] + '+' + args[15] + '+' + args[16] + '+' + args[17] + '+' + args[18]
       }else if(args.length == 20) {
                hsl = 'https://wa.me/' + who.split`@`[0] + '&send?text=' + args[0] + '+' + args[1] + '+' + args[2] + '+' + args[3] + '+' + args[4] + '+' + args[5] + '+' + args[6] + '+' + args[7] + '+' + args[8] + '+' + args[9] + '+' + args[10] + '+' + args[11] + '+' + args[12] + '+' + args[13] + '+' + args[14] + '+' + args[15] + '+' + args[16] + '+' + args[17] + '+' + args[18] + '+' + args[19]
}
	conn.reply(m.chat, hsl, m)
}
handler.command = /^((msg)?send)$/i

module.exports = handler


// Muhammad Afdhan
