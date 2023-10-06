const path = require('path');

const fpath = '/a/b/c/index.html';
const fullName = path.basename(fpath);
console.log(fullName);//输出 index.html

const nameWithoutExt = path.basename(fpath,'.html');//后缀名要带上点，不然输出就会多点
console.log(nameWithoutExt);//输出 index