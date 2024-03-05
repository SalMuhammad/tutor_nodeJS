const {pertanyaan, simpanContacts} = require('./contacts')


const main = async ()=> {
  const nama = await pertanyaan('masukan nama anda: ')
  const noHP = await pertanyaan('masukan noHP anda: ')
  const email = await pertanyaan('masukan email anda: ')

  simpanContacts(nama, noHP, email)
}

main()







// rl.question('Masukan nama: ', nama => {
//   rl.question('Masukan No HP: ', no => {
//     rl.question('Masukan email anda :', email => {

//       const file = fs.readFileSync(contactsPath, 'utf-8');
//       const contacts = JSON.parse(file);
//       const contact = { nama, no, email};
//       contacts.push(contact);
//       console.log(contacts);
      
//       fs.writeFileSync(contactsPath, JSON.stringify(contacts));

//       rl.close();
//     });
//   })
// });
