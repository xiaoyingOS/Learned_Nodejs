const express = require('express');
const app = express();

//把当前时间放在中间件里，后面的中间件或路由都可以访问。
app.use((req,res,next)=>{
    //获取请求到服务器的时间
    const time = Date.now();
    //为 req 对象，挂载自定义属性，从而把时间共享给后面的所有路由或中间件
    req.startTime = time;
    next();
});

app.get('/',(req,res)=>{
    res.send("Home Page" + "-->" + req.startTime);
});
app.get('/user',(req,res)=>{
    res.send("User Page" + "-->" + req.startTime);
});

app.listen(80,()=>{
    console.log("express server running at http://127.0.0.1");
});