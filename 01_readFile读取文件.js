//导入fs模块
const fs = require('fs');

//调用 fs.readFile() 方法读取文件
//参数1：读取文件的存放路径
//参数2：读取文件时采用的编码格式，一般默认指定的是utf8
//参数3：回调函数，拿到读取失败和成功的结果 err dataStr
fs.readFile('./a1_Files/a.md','utf8',function(err,dataStr){
    //打印失败的结果
    ///如果读取成功，则 err 的值为 null，dataStr为文件内容
    ///如果读取失败，则 err 为错误对象，dataStr 的值为 undefined
    console.log(err);
    console.log("------");
    //打印成功的结果
    console.log(dataStr);
});