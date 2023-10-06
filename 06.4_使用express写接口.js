const express = require('express');
const app = express();

//配置解析表单数据的中间件
app.use(express.urlencoded({extended: false}));

//补充。必须在配置cors中间件之前，配置JSONP接口
app.get('/api/jsonp',(req,res)=>{
    //TOOP：定义 JSONP接口 具体实现过程

    //得到函数的名称
    const funcName = req.query.callback;
    //定义要发送到客服端的数据对象
    const data = {name: 'zs',age: 22};
    //拼接出一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`;
    //把拼接的字符串，响应给客服端
    res.send(scriptStr);
});

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