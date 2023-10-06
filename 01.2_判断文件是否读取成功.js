//导入fs模块
const fs = require('fs');
//读取文件
fs.readFile('./a1_Files/a.md','utf8',function(err,dataStr){
    //判断是否读取成功
    if(err){
        return console.log("文件读取失败-->" + err.message);
    };
    console.log("文件读取成功-->" + dataStr);
});