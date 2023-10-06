const express = require('express');
//创建服务器实例
const app = express();

//导入路由模块
const router = require('./06.1.1_apiRouter');
//把路由模块，注册到app上
app.use('/api',router);

//启动服务器
app.listen(80,()=>{
    console.log("express server running at http://127.0.0.1");
});