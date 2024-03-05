// const readline = require('readline')

// const fs = require('fs')
// const { constants } = require('buffer')
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// // buatkan folder data jika belum ada.
// const folderData = './dataNo'
// if(!fs.existsSync(folderData)) {
//   fs.mkdir(folderData)
// }

// // buatkan file json jika belum ada
// const fileContak = './constacts.json'
// if(!fs.existsSync(fileContak)) {
//   fs.writeFileSync(fileContak, '[]', 'utf-8')
// }

// rl.question('Masukan nama :', nama => {
//   rl.question('Masukan No HP :', no => {
//     const file = fs.readFileSync('dataNo/contacts.json', 'utf-8')
//     const constacts = JSON.parse(file)
//     const contact = {nama, no}
//     constacts.push(contact)
//     console.log(constacts);
    
//     fs.writeFileSync('dataNo/contacts.json',JSON.stringify(constacts))
//     rl.close()
//   })
// })












const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Buat folder data jika belum ada.
const folderData = './dataNo';
if (!fs.existsSync(folderData)) {
  fs.mkdirSync(folderData);
}

// Buat file json jika belum ada
const contactsPath = './dataNo/contacts.json';
if (!fs.existsSync(contactsPath)) {
  fs.writeFileSync(contactsPath, '[]', 'utf-8');
}


const pertanyaan = (pesan) => {
  return new Promise((resolve, rejects) => {
    rl.question(pesan, v => {
      resolve(v)
    })
  })
}

function simpanContacts(nama, noHP, email) {
  const file = fs.readFileSync(contactsPath, 'utf-8');
  const contacts = JSON.parse(file);
  const contact = { nama, noHP, email};
  contacts.push(contact);
  
  fs.writeFileSync(contactsPath, JSON.stringify(contacts));
  rl.close();
}

module.exports = {pertanyaan, simpanContacts}