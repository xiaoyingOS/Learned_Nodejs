//导入http模块
const http = require('http');

//创建 web 服务器实例
const server = http.createServer();

//为服务器实例绑定 request 事件，监听客服端的请求
server.on('request',function(req,res){
    console.log("Someone visit our web server.");
});

//启动服务器
server.listen(80,function(){
    console.log('server running at http://127.0.0.1:80');
    //注意80端口可以省略，其他端口就必须要写上
});