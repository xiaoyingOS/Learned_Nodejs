const express = require('express');
const app = express();

//配置解析表单数据的中间件
app.use(express.urlencoded({extended: false}));

//一定要在路由之前配置 cors 中间件
const cors = require('cors');
app.use(cors());

//导入路由模块
const router1 = require('./06.2.1_apiRouter');
//把路由模块，注册到app上
app.use('/api',router1);

//导入路由模块
const router2 = require('./06.1.1_apiRouter');
//把路由模块，注册到app上
app.use('/api',router2);

app.listen(80,()=>{
    console.log("express server running at http://127.0.0.1");
});