const fs = require('fs')
const { default: test } = require('node:test')



// // fs.appendFile(jalurFileYgDiTiTambah, Data,OptionalNuCanNgarti colback)

// // constoh 1 tanpa mengisi parameter optional
// console.log(fs.readFileSync('tes.txt', 'utf-8'));

// fs.appendFile('tes.txt', ' Alfia Damayanti ', er => {
//   if(er) {
//     console.log(er);
//   } else {
//     fs.readFileSync('tes.txt', 'utf-8')
//   }
// })

// fs.appendFile('tes.txt', " Word", err => err ? console.log(err) : console.log(fs.readFileSync('tes.txt', 'utf-8')))


// // contoh 2. dengan mengisi parameter.
// console.log(fs.readFileSync('tes.txt', 'utf-8'))
// fs.appendFile('tes.txt', '- Geek for geek', /*{encoding: "latin1", mode: 0666, flag: "a"},*/ err => {
//   if(err) {
//     console.log( err);
//   } else {
//     console.log(fs.readFileSync('tes.txt', 'utf-8'));
//   }
// })


// ---------------------------------------------------
// ================== fs.addFileSync =================
// ---------------------------------------------------

// // contoh 1 
// console.log(fs.readFileSync('tes.txt', 'utf-8'));
// fs.appendFileSync('tes.txt', ' Damayanti', e => {
//   if(e) {
//     console.log(e);
//   } {
//     console.log(console.log(fs.readFileSync('tes.txt', 'utf-8'))) // meskipun berhasil. datanya tidak di tampilkan ke console.
//   }
// })

// contoh 2 mengisi nilai optionalnya (berguna untuk menggantikan text ini dengan yang baru)
console.log(fs.readFileSync('tes.txt', 'utf-8'));
fs.appendFileSync('tes.txt', /* data baru yg di tambahkan */' Faisal', {encoding: 'utf-8', flag: 'w'} , e => {
  if(e) {
    console.log(e);
  } {
    console.log(console.log(fs.readFileSync('tes.txt', 'utf-8'))) // meskipun berhasil. datanya tidak di tampilkan ke console.
  }
})