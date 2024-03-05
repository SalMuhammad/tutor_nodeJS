const fs = require('fs')

// contoh 2 penggunaan konstanta string dan OR untuk memberikan izin
console.log('...');
fs.chmod('tes.txt', fs.constants.S_IRUSR, () => {

  console.log('file content:', fs.readFileSync('tes.txt', 'utf-8'));

  try{
    console.log('\n bisa menulis file');
    fs.writeFileSync('tes.txt', 'sekarang file ini bisa di edit')
  } catch (e) {
    console.log('error ', e.code);
  }

  console.log('--------------------------------------------------');
  fs.chmod('tes.txt', fs.constants.S_IRUSR | fs.constants.S_IWUSR, () => {
    console.log('mulai menulis ke file');
    fs.writeFileSync('tes.txt', 'merubah tulisan')

    console.log('maka : ', fs.readFileSync('tes.txt', 'utf-8'));
  })
})

