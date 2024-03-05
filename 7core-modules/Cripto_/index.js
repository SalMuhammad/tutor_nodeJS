const crypto = require('crypto')

const buffer = new ArrayBuffer(2)

const val = crypto.checkPrimeSync(buffer)

console.log(val); // selalu menghasilkan false, belum tau saya juga sebabnya.

