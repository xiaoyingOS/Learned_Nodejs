const express = require('express');
const app = express();

//导入路由模块
const router = require('./05.8.1_router');

//注册路由模块
//加个前缀
app.use('/api',router);//要非常非常非常非常非常注意加 / ，不然都会出错的


//托管静态资源，前面写过
//app.use('加头，一般和后面对应',express.static('目录'));

//app.use() 函数的作用，就是用来注册全局中间件。
//所以，这里的 router和 express.static()都是中间件


app.listen(66,()=>{
    console.log("express running at http://127.0.0.1:66");
});
