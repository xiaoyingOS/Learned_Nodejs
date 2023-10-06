//导入 express 模块
const express = require('express');
//创建 web服务器实例
const app = express();

//挂载路由
app.get('/',(req,res)=>{
    res.send("GET Request");
});
app.post('/',(req,res)=>{
    res.send("POST Request!!!");
});

//启动 web服务器
app.listen(80,()=>{
    console.log("express server running at http://127.0.0.1");
});