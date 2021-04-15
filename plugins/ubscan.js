let handler  = async (m, { conn }) => {
//let user = global.DATABASE._data.users[m.sender]
let no = pickRandom(global.number)
let unive = pickRandom(global.univ)
//if (user.prems) {
m.reply(`
*╭══════════════════╮*
                   *Random Univ Scanner*
*╰══════════════════╯*

*═►* _Scan Baris Ke:_ *${no}*
*►* ${unive}

*[  • SGDC-BOT • ]*
`.trim()) 
//    } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}

handler.command = /^univ$/i

handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

//  MUHAMMAD AFDHAN

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.number = [
'01','02','03','04','05','06','07','08','09','10',
'11','12','13','14','15','16','17','18','19','20',
'21','22','23','24','25','26','27','28','29','30',
'31','32','33','34','35','36','37','38','39','40',
'41','42','43','44','45','46','47','48','49','50',
'51','52','53','54','55','56','57','58','59','60',
'61','62','63','64','65','66','67','68','69','70',
'71','72','73','74','75','76','77','78','79','80',
'81','82','83','84','85','86','87','88','89','90',
'91','92','93','94','95','96','97','98','99','100',
'101','102','103','104','105','106','107','108','109','110',
'111','112','113','114','115','116','117','118','119','120',
'121','122','123','124','125','126','127','128','129','130',
'131','132','133','134','135','136','137','138','139','140',
'141','142','143','144','145','146','147','148','149','150',
'151','152','153','154','155','156','157','158','159','160',
'161','162','163','164','165','166','167','168','169','170',
'171','172','173','174','175','176','177','178','179','180',
'181','182','183','184','185','186','187','188','189','190',
'191','192','193','194','195','196','197','198','199','200',
]



global.univ = [
//UB
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 195030801111020:aldinur ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 195030801111020:aldinur1234 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 195030807111028:alelomasae ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 195030807111028:aleloma ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ AKTIF ] 175130101111044:jusanti123 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 195030807111028:aleloma1234 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ AKTIF ] 195040100113014:serrina123 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 195030807111028:lomasae1234 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 195030807111028:alesae ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 195030807111028:alesae1234 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ AKTIF ] 185080300111030:faizan123 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030807111015:aaliyahputri ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030800111023:hasbizulfi ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030800111023:hasbizulfi1234 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030800111023:muhammadzulfi ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030800111023:muhammadzulfi1234 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ AKTIF ] 195090301111030:noorsha123 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030807111027:muhammadihsanfarid ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030807111027:muhammadihsan ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ AKTIF ] 195040100113014:serrina123 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030807111027:ihsanfarid ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030807111027:ihsanfarid1234 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ AKTIF ] 205080407113032:fardhian123 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030807111027:muhammadfarid ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030807111027:muhammadfarid1234 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 195030800111040:muhammadikhwanfawwaz ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 195030800111040:muhammadikhwan ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ AKTIF ] 185080301111020:adellia123 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030807111015:aaliyahputri1234 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030807111015:putrisyaafira ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030807111015:putrisyaafira1234 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030807111015:aaliyahsyaafira ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030807111015:aaliyahsyaafira1234 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ AKTIF ] 195090307111021:fitriani123 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 185030800111009:abdulfattahmanshur ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 185030800111009:abdulfattah ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 185030800111009:abdulfattah1234  ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 185030800111009:fattahmanshur ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ AKTIF ] 193141414111094:herdian123 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 185030800111009:fattahmanshur1234 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 185030801111008:nidaarub1234 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ AKTIF ] 165010101111145:manik123 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 185030801111008:arubmajida1234 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 185030801111008:nidamajida ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ AKTIF ] 165080100111015:mentari123 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 165030800111012:yusifaputri ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 165030800111012:yusifaputri1234 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 165030800111012:odinaputri ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ AKTIF ] 195080400113038:muhammad123 ',
' *Universitas Brawijaya (UB)*\n\n*━►* [ MODAR ] 205030807111011:pahleviaulia1234 ',
//UPI
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1710627:Abisha123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1707312:Nawansyah123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700623:Abraham123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1200623:Sadana123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700624:Achmad123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ AKTIF ] 1704652:laksmana30 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700620:Aqilla123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700622:Ade123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1707366:Julianto123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700621:Adha123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ AKTIF ] 1707370:pratama19 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700629:Gustian123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1900627:Adhi123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1707363:Aditya123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1707384:Laksono123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1707350:Putra123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ AKTIF ] 1700470:mulyana19 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1707372:Adhitya123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1705227:Muhammad123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700632:Adi123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700698:Aulia123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700634:Adinda123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700687:Aniza123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ AKTIF ] 1700627:wulan123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700651:Adinda123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700641:Bani123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700656:Adinda123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700609:Raihanna123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700653:Adinda123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ AKTIF ] 1702297:noviantika17 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700617:Rani123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700618:Aditya123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1700652:Adamas123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1707334:Aditya123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1707373:Kurniawan123 ',
' *Universitas Pendidikan Indonesia (UPI)*\n\n*━►* [ MODAR ] 1707327:Aditya123 ',
//UII
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 17410365:Ramadhana123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 17410361:Arfianto123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 17410362:Nursatriaji123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 17410363:Ariel123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ AKTIF ] 17410540:Caroline99 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 17410368:Wibisono123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 17410360:Arif123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 17410369:Nurichsan123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 17410326:Ariyani123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 17410329:Putri123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 17410335:Armansyah123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ AKTIF ] 17410363:Haekal21 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 17410327:Prasasti123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 17410322:Arona123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323098:Wijayanty123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323032:Arya123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323030:Damara123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323046:Aryadhani123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323021:Prier123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ AKTIF ] 14522156:Muhammad95 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323079:Asbar123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323099:Oktosa123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323054:Ashari123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323551:Wahyu123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323876:Aska123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323016:Andanto123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323052:Athaya123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ AKTIF ] 16323033:Pyroxinda22 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323024:Fitri123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323063:Athillah123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323032:Ramadhea123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323098:Athiyyah123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323044:Imtiyaaz123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 16323011:Atika123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ AKTIF ] 17323129:Febyola20 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 14522190:Fatmawati123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 14522155:Atika123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 14522150:Restiana123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 14522151:Audrey123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 14522152:Salsabila123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 14522153:Aulia123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 14522157:Chafifah123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 14522190:Aulia123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 14522176:Haryani123 ',
' *Universitas Islam Indonesia (UII)*\n\n*━►* [ MODAR ] 14522122:Aulia123 ',
]

//BY MUHAMMAD AFDHAN
