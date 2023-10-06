const http = require('http');
const fs = require('fs');
const path = require('path');

//创建 web服务器 实例
const server = http.createServer();
//为服务器绑定 request 事件，使用on方法绑定
server.on('request',(req,res)=>{
    //获取到客服端请求的 url 地址
    const url = req.url;
    ///把请求的 url 地址映射为具体文件的存放路径
    //预定义一个空白的文件存放路径
    let fpath = '';
    if(url === '/'){
        fpath = path.join(__dirname,'/clock/index.html');
    }else{
        fpath = path.join(__dirname,'/clock',url);
    };
    
    //根据‘映射’过来的文件路径，读取文件内容
    fs.readFile(fpath,'utf8',(err,dataStr)=>{
        //读取失败，向客服端响应固定的 "错误消息"
        if(err) return res.end('404 Not found');
        //读取成功，将读取成功的内容，响应给客服端
        res.end(dataStr);
    });
});

//启动服务器
server.listen(80,()=>{
    console.log("server running at http://127.0.0.1");
});