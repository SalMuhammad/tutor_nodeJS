const fs = require('fs')



// sintak dasar
// fs.close(fd, callback)

let fileDeskriptor = fs.openSync('tes.txt')
console.log(fileDeskriptor);

fs.open('tes.txt', 'r', (err, fd) => {
  if(err) {
    console.error('error saat membuka file', err)
    return
  }
  
  console.log(fd);

  fs.close(fd, err => {
    if(err) {
      console.error('error saat menutup file', err)
      return 
    }
    console.log('file sudah di tutup');
  })
})











