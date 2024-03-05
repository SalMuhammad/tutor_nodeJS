const fs = require('fs')

// fs.copyFile(url_sumber_salinan, file_tujuan_salinan, mode, callback)

// jika nama file tujuan sudah ada maka akan di ganti isinya oleh file sumber. jika belum ada maka akan di buatkan filenya



// // contoh pertama ti chat gpt
// fs.copyFile('tes.txt', 'j', er => {
//   if(er) {
//     console.error('gagal saat menyain file ', er)
//     return
//   }
//   console.log('file copied succesfully');
// })



// -----------------------------------------------------------------------
// ------------------    penulisan secara singkronus   -------------------

// code :
// fs.copyFileSync(src, tujuan, mode)
try {
  fs.copyFileSync('tes.txt', 'tes22.txt', fs.constants.COPYFILE_EXCL)
  console.log('file berhasil di salin');
} catch (e) {
  if(e.code === 'EEXIST') {
    console.log('file sudah ada ', 'tes2.txt');
  } else {
    console.log('error saat nyalin');
  }
}


