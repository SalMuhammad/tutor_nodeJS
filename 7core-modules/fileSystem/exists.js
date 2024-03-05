const { log } = require('console');
const fs = require('fs')


// di gunakan untuk mengecek apakah jalur yang di berikan itu ada atau tidak

// code:
// fs.exists(jalur, callback)

const jalur = 'coba/mobil'
fs.exists(jalur, exists => {
  console.log(exists ? `jalur ${jalur} itu ada`: `tidak ada jalur atau direktory bernama ${jalur}`); // tidak ada
})

// ------------------------- dengan metode singkoronus-------------------

// masih tidak berjalan
// const field = fs.existsSync('hello.txt')
// function ambilDirektory() {
//   console.log('....');
//   fs.readdirSync(__dirname).forEach(file => {
//     console.log(file);
//   })
//   console.log('\n');
// }