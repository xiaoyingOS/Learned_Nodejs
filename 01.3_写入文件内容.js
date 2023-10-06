//导入fs模块
const fs = require('fs');

//调用 fs.writeFile() 方法，写入文件的内容
//参数1：文件存放路径
//参数2：要写入的内容
//参数3：回调函数
//utf8 默认参数，不用写
fs.writeFile('H:/a1_Files/a.txt',"hello Node.JS",function(err){
    //运行后，路径有效就会新建文件，并写入文件内容

    //如果文件写入成功，则 err 的值等于 null
    //如果文件写入失败，则 err 的值等于 错误对象

    console.log(err);
});