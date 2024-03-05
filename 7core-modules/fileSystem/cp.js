const fs = require('fs')


// berfungsi untuk menyalin file dalam bentuk promise
fs.cp('tes.txt', 'uya.txt')
  .then(()=> console.log('file berhasil di salin'))
  .catch(er => console.error('error saat menyalin file ', er))