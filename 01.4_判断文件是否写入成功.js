//导入fs模块
const fs = require('fs');

fs.writeFile('./a1_Files/a1.md','写入文件',function(err){
    //判断文件是否写入成功
    if(err){
        return console.log('文件写入失败！！！' + err.message);
    };
    console.log("文件写入成功。。。");
});