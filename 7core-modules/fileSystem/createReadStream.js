// let fs = require('fs')

// fs.createReadStream(jalur, opsi)

// constoh 1
// const reader = fs.createReadStream('tes2.txt')
// reader.on('data', function(chunk) {
  //   console.log(chunk.toString())
  // })
  
  
let fs = require('fs')
const reader = fs.createReadStream('tes2.txt', {
  flags: 'a+',
  encoding:'utf-8',
  start: 0,
  end: 10,
  highWaterMark: 166
})

reader.on('data', function(chunk) {
  console.log(chunk);
})


