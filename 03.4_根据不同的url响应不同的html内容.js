const http = require('http');
const server = http.createServer();

//为服务器绑定request事件
server.on('request',(req,res)=>{
    const url = req.url;
    //默认设置为 404 Not found! 
    let content = "<h1>404 Not found! </h1>";
    //判断用户请求的是 / 还是/index.html 或 about.html
    if(url === '/' || url === '/index.html'){
        content = "<h1>首页</h1>";
        
    }else if(url === '/about.html'){
        content = "<h1>关于页面</h1>";
        
    };

    //设置 Content-Type 响应头，防止中文乱码
    res.setHeader('Content-Type','text/html; charset=utf-8');//响应头 值
    //使用 res.end() 方法，把响应内容发送给客服端
    res.end(content);
});

server.listen(80,function(){
    console.log("Server running at http://127.0.0.1");
});