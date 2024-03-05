const fs = require('fs')
let writer = fs.createWriteStream('tes.txt')



// di gunakan untuk menulis sambil menimpa tulisan sebelumnya
writer.write( "Assalaamu'alaikum Alfia")

