const path = require('path');
const fs = require('fs');

//注意 ../ 会抵消前面的路径
const pathStr = path.join('/a','b/c/d','../../','./e','/f','g');
console.log(pathStr);//输出 \a\b\e\f\g
//每一个写不写 / 都行，这个方法会自动加上

//使用 + 号拼接路径，可能出现一些问题，比如多写了个点(.) 就会出错
//所以，以后都要用path.join拼接

fs.readFile(path.join(__dirname,'./a2_Files/成绩.txt'),'utf8',function(err,dataStr){
    if(err){
        return console.log(err.message);
    };
    console.log(dataStr);
});


// //
// const fpath = 'a/b/c/index.HTML';

// const fullName = path.basename(fpath);
// console.log(fullName);//输出 index.HTML

// const nameWithoutExt = path.basename(fpath,'.HTML');
// console.log(nameWithoutExt);//输出 index
