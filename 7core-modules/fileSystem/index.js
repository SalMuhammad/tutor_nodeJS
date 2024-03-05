// cara mengimport modulenya:
const fs = require('fs')


// Menulis apapaun dalam file
// =============================================================
// ------------------ fs.writeFileSync & fs.write---------------
// ==============================================================

// //1.  fs.writeFileSync = untuk menuliskan text kedalam tulisan dengan syingkronus
// fs.writeFileSync('tes.txt', 'hello world secara syncronus')
// fs.writeFileSync('inifoldergoib/tes.txt', 'hello world secara syncronus') // akan error
//   a). jika filenya tidak ada maka akan di buatkan, 
//   b). jika file nya di simpan dalama folder yang belum ada maka tidak akkan di buatkan, karena beda cara untuk membuat folder


// fs.writeFile('tes.txt', 'tulisan secara Asyncronous', err => console.log(err))

// // colbacknya jangan lupa!! karna akan error
// fs.writeFile('tes.txt', 'tulisan secara Asyncronous') // akan error


// membaca file
// ================= fs.readFileSync() & fs.readFile()==============

// fs.readFileSync('tes.txt') // ini tidak akan berjalan karena harus tersimpan kedalam variable atau langsung di console

// const dataTes = fs.readFileSync('tes.txt') // yang tampil bukan texnya tapi Buffer
// console.log(dataTes);

// const dataTes = fs.readFileSync('tes.txt') 
// console.log(dataTes.toString()); // ngakalinyya bisa cara ini

// const dataTes = fs.readFileSync('tes.txt', 'utf-8')
// console.log(dataTes); // ini baru berhasil dengan cara benar

// // menuliskan dara dari file secara asincronous
// fs.readFile('tes.txt', 'utf-8', (error, data) => {
//   if(error) {
//     console.log(error); 
//   }
//   else {
//     console.log(data);
//   }
// })

// // latihan sederhana
// fs.writeFileSync('tulisan.txt', fs.readFileSync('tes.txt').toString() + '. di copy dari file tes')






























/*
  appendFile: [Function: appendFile], ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  appendFileSync: [Function: appendFileSync], ~~~~~~~~~~~~~~~~~~~~~~~~~
  access: [Function: access], ~~~ (-+ memeriksa suatu file)
  accessSync: [Function: accessSync],
  chown: [Function: chown], ~~~ berkaitan dgn DBS
  chownSync: [Function: chownSync],
  chmod: [Function: chmod], ~~~ pengaturan akses pada file
  chmodSync: [Function: chmodSync],
  close: [Function: close], ~~~ menutup file yang di buka
  closeSync: [Function: closeSync],
  copyFile: [Function: copyFile],~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ cukup faham
  copyFileSync: [Function: copyFileSync],~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ lebih dari cukup faham
  cp: [Function: cp], 
  cpSync: [Function: cpSync],
  createReadStream: [Function: createReadStream], ~~~~~~~~~~~~~~~~~~~~~ cukuu faham tapi masih banyak property objek yang harus di pelajari
  createWriteStream: [Function: createWriteStream], ~~~~~~~~~~~~~~~~~~~ cukup faham tapi masih yang harus di pelajari
  exists: [Function: exists],     ~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~ cukup faham tapi masih yang harus di pelajari
  existsSync: [Function: existsSync],!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! masih belum berjalan
  fchown: [Function: fchown],   
  fchownSync: [Function: fchownSync],
  fchmod: [Function: fchmod],
  fchmodSync: [Function: fchmodSync],
  fdatasync: [Function: fdatasync],
  fdatasyncSync: [Function: fdatasyncSync],
  fstat: [Function: fstat],
  fstatSync: [Function: fstatSync],
  fsync: [Function: fsync],
  fsyncSync: [Function: fsyncSync],
  ftruncate: [Function: ftruncate],
  ftruncateSync: [Function: ftruncateSync],
  futimes: [Function: futimes],
  futimesSync: [Function: futimesSync]
  lchown: [Function: lchown],
  lchownSync: [Function: lchownSync],
  lchmod: undefined,
  lchmodSync: undefined,
  link: [Function: link],
  linkSync: [Function: linkSync],
  lstat: [Function: lstat],
  lstatSync: [Function: lstatSync],
  lutimes: [Function: lutimes],
  lutimesSync: [Function: lutimesSync],
  mkdir: [Function: mkdir],
  mkdirSync: [Function: mkdirSync],
  mkdtemp: [Function: mkdtemp],
  mkdtempSync: [Function: mkdtempSync],
  open: [Function: open],
  openSync: [Function: openSync],
  openAsBlob: [Function: openAsBlob],
  readdir: [Function: readdir],
  readdirSync: [Function: readdirSync],
  read: [Function: read],
  readSync: [Function: readSync],
  readv: [Function: readv],
  readvSync: [Function: readvSync],
  readFile: [Function: readFile],
  readFileSync: [Function: readFileSync],
  readlink: [Function: readlink],
  readlinkSync: [Function: readlinkSync],
  realpath: [Function: realpath] { native: [Function (anonymous)] },
  realpathSync: [Function: realpathSync] { native: [Function (anonymous)] },
  rename: [Function: rename],
  renameSync: [Function: renameSync],
  rm: [Function: rm],
  rmSync: [Function: rmSync],
  rmdir: [Function: rmdir],
  rmdirSync: [Function: rmdirSync],
  stat: [Function: stat],
  statfs: [Function: statfs],
  statSync: [Function: statSync],
  statfsSync: [Function: statfsSync],
  symlink: [Function: symlink],
  symlinkSync: [Function: symlinkSync],
  truncate: [Function: truncate],
  truncateSync: [Function: truncateSync],
  unwatchFile: [Function: unwatchFile],
  unlink: [Function: unlink],
  unlinkSync: [Function: unlinkSync],
  utimes: [Function: utimes],
  utimesSync: [Function: utimesSync],
  watch: [Function: watch],
  watchFile: [Function: watchFile],
  writeFile: [Function: writeFile],
  writeFileSync: [Function: writeFileSync],
  write: [Function: write],
  writeSync: [Function: writeSync],
  writev: [Function: writev],
  writevSync: [Function: writevSync],
  Dirent: [class Dirent],
  Stats: [Function: Stats],
  ReadStream: [Getter/Setter],
  WriteStream: [Getter/Setter],
  FileReadStream: [Getter/Setter],
  FileWriteStream: [Getter/Setter],
  _toUnixTimestamp: [Function: toUnixTimestamp],
  Dir: [class Dir],
  opendir: [Function: opendir],
  opendirSync: [Function: opendirSync],
  F_OK: 0,
  R_OK: 4,
  W_OK: 2,
  X_OK: 1,
  constants: [Object: null prototype] {
    UV_FS_SYMLINK_DIR: 1,
    UV_FS_SYMLINK_JUNCTION: 2,
    O_RDONLY: 0,
    O_WRONLY: 1,
    O_RDWR: 2,
    UV_DIRENT_UNKNOWN: 0,
    UV_DIRENT_FILE: 1,
    UV_DIRENT_DIR: 2,
    UV_DIRENT_LINK: 3,
    UV_DIRENT_FIFO: 4,
    UV_DIRENT_SOCKET: 5,
    UV_DIRENT_CHAR: 6,
    UV_DIRENT_BLOCK: 7,
    EXTENSIONLESS_FORMAT_JAVASCRIPT: 0,
    EXTENSIONLESS_FORMAT_WASM: 1,
    S_IFMT: 61440,
    S_IFREG: 32768,
    S_IFDIR: 16384,
    S_IFCHR: 8192,
    S_IFIFO: 4096,
    S_IFLNK: 40960,
    O_CREAT: 256,
    O_EXCL: 1024,
    UV_FS_O_FILEMAP: 536870912,
    O_TRUNC: 512,
    O_APPEND: 8,
    S_IRUSR: 256,
    S_IWUSR: 128,
    F_OK: 0,
    R_OK: 4,
    W_OK: 2,
    X_OK: 1,
    UV_FS_COPYFILE_EXCL: 1,
    COPYFILE_EXCL: 1,
    UV_FS_COPYFILE_FICLONE: 2,
    COPYFILE_FICLONE: 2,
    UV_FS_COPYFILE_FICLONE_FORCE: 4,
    COPYFILE_FICLONE_FORCE: 4
  },
  promises: [Getter]
}


touch createReadStream.js createWriteStream.js exists.js existsSync.js fchown.js fchownSync.js fchmod.js 
fchmodSync.js fdatasync.js fdatasyncSync.js fstat.js fsSync.js ftruncate.js futimes.js lchown.js lchmod.js 
link.js lstat.js lutimes.js mkdir.js mkdtemp.js open.js openAsBlob.js reading.js read.js readV.js readFile.js readLink.js realPath.js rename.js rm.js rmdir.js stat.js statfs.js symlink.js truncate.js unwatchFile.jsunLink.js utimes.js watch.js writeFile.js watchFile.js write.js writev.js Dirent.js Stats.js ReadStream.js 
WriteStream.js FileReadStream.js FileWriteStream.js _toUnixTimestamp.js Dir.js opendir.js 



*/


