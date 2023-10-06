//导入fs模块
const fs = require('fs');
//读取文件
// fs.readFile('a2_Files/成绩.md','utf8',function(err,dataStr){
//     //判断是否读取成功
//     if(err){
//         return console.log("文件读取失败-->" + err.message);
//     };
//     console.log("文件读取成功-->" + dataStr);
// });

//出现路径拼接错误问题，是因为提供了(./ ../)开头的相对路径
//解决这个问题，可以直接提供一个完整是文件存放路径就行

///最后还要注意一下，文件读取失败和文件执行不对(没有这个文件)的区别。
///因为你可能换执行路径后，还是node + 原来执行路径，所以就输出下面这个
/* 输出 Error: Cannot find module + 路径 */

//要把 C:\Users\xiaoying\Desktop\Nodejs_Code\a2_Files\成绩.md 都加一个\
// fs.readFile('C:\\Users\\xiaoying\\Desktop\\Nodejs_Code\\a2_Files\\成绩.md','utf8',function(err,dataStr){
//     //判断是否读取成功
//     if(err){
//         return console.log("文件读取失败-->" + err.message);
//     };
//     console.log("文件读取成功-->" + dataStr);
// });



//但是又出现新的问题，移植性差，不利于维护
// __dirname 表示读取文件所处的目录 (注意是双下划线)
console.log(__dirname);//输出 c:\Users\xiaoying\Desktop\Nodejs_Code
//并且这个路径不会改变，死的，就是这个文件所在目录


fs.readFile(__dirname + '/a2_Files/成绩.md','utf8',function(err,dataStr){
    //判断是否读取成功
    if(err){
        return console.log("文件读取失败-->" + err.message);
    };
    console.log("文件读取成功-->" + dataStr);
});
