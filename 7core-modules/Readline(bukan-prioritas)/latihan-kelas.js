const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})









const makananHaram =  ['pork', 'pig', 'lard', 'kakuni', 'rhum']
const makananHalal =  ['terigu', 'jelatin nabati', 'jaitun', 'benzoat', 'biotin', 'fruktosa', 'malt', 'msg']

function ulangi() {
  // 1. menginputkan komposisi 
  rl.question('MASUKAN KOMPOSISI YG INGIN DI CEK !:', makanan => { 
    // 2. cek apakah ada di dalam daftar haram
    if(makananHaram.includes(makanan)) {  
      // 3. jika ada maka tampilkan ke layar bahwa komposisi itu haram
      console.log(`\n${makanan} adalah makanan yang HARAM`)
      console.log(`--------------------------------------`)
  // 4. jika tidak ada di daftar haram cari di daftar halal
    } else if(makananHalal.includes(makanan)) {
      console.log(`\n${makanan} adalah makanan yang HALAL`)
      console.log(`--------------------------------------`)
    } else { 
      // 5. jika di daftar halal juga tidak ada makata tampilkan bahwa komposisi belum di ketahui
      console.log(`\n ${makanan} belum di ketahui\n\n`)
    }
    rl.question('apakah ada yang mau ditanyakan lagi?', jawaban => { //
      if(jawaban === 'ya') {
        console.log('\n')
        ulangi()
      } else {
        console.log('-------------------------------------')
        console.log('terimakasi sudah bertanya')
        rl.close() // Hanya tutup interface readline setelah semua iterasi selesai
      }
    })
  })
}
ulangi()
 


