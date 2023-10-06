const http = require('http');
const server = http.createServer();

server.on('request',(req,res) => {
    // const url = req.url;
    // const method = req.method;
    const str = `你请求的url地址为 ${req.url}, 请求类型为 ${req.method}`;
    console.log(str);

    //调用 res.setHeader() 方法，设置 Content-Type 响应头，解决中文乱码问题
    res.setHeader('Content-Type','text/html; charset=utf-8');//固定写法，必须记下来

    res.end(str);
});

server.listen(80,()=>{
    console.log('server running at 127.0.0.1');
});