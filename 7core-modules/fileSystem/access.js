const fs = require('fs')

// // contoh 1 memerisa  file bisa di baca dan di tulis oleh siapa saja.
// console.log('hanya memberikan izin membaca kepada penulis');
// fs.chmodSync('tes.txt', fs.constants.S_IRUSR)

// fs.access('tes.txt', fs.constants.R_OK, er => {
//   console.log('\n > memeriksa izin untuk di baca ');
//   if(er) {
//     console.log('No read Acces');
//   } else { 
//     console.log('file can be read');
//   }
// })

// fs.access('tes.txt', fs.constants.R_OK | fs.constants.W_OK, er => {
//   console.log('\n memeriksa izin untuk membaca dan menulis');
//   if(er)
//     console.log('tidak bisa membaca dan meulis');
//   else 
//     console.log('file bisa di baca dan menulis');
// })




// contoh 2 menguji keberadaan suatu file.
fs.access('tes2.txt', fs.constants.F_OK, er => {
  console.log('\n > cek apakah file tes2.txt ada?');
  if(er) {
    console.error('file belum di buat');

    console.log('\n membuat file');
    fs.writeFileSync('tes2.txt', 'esina meren. Emang esina co')

    fs.access('tes2.txt', fs.constants.F_OK, er => {
      console.log('buat file jika tidak ada'); 
      if(er) {
        console.log('file belum ada');
      } else {
        console.log('file sudah ada');
      }
    }) 
  } else {
    console.log('file sudah di buat');
  }
})