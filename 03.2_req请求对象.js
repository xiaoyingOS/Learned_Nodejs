//导入http模块
const http = require('http');
//创建 web 服务器实例
const server = http.createServer();

//req 是请求对象，包含了与客服端相关的数据和属性
server.on('request',(req,res)=>{
    //req.url 是客服端请求的 URL 地址
    const url = req.url;
    //req.method 是客服端请求的 method 连续(有post和get请求)
    const method = req.method;
    const str = `Your request url is ${url}, and request method is ${method}`;
    console.log(str);

    //调用 res.end() 方法，向客服端响应一些内容
    res.end(str);
});

//启动服务器
server.listen(8080,()=>{
    console.log('server running at http://127.0.0.1:8080');
});