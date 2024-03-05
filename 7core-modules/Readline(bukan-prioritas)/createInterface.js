const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stout,
// })


// rl.question("Masukan nama anda! ", nama => {
//   rl.question('masukan nomor HP! ', no => {
//     console.log(`terima kasih ${nama} telah menuliskan ${no}`);
//     rl.close()
//   })
// })


// latihan 

const fs = require('fs')
const { constants } = require('buffer')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// const data = []
rl.question('Masukan nama :', nama => {
  rl.question('Masukan No HP :', no => {
      
    const file = fs.readFileSync('contacts.json', 'utf-8')
    const constacts = JSON.parse(file)
    const contact = {nama, no}
    constacts.push(contact)
    console.log(constacts);

    fs.writeFileSync('contacts.json',JSON.stringify(constacts))
    rl.close()
  })
})