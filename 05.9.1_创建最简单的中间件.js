const express = require('express');
const app = express();

// const MW = function(req,res,next){
//     console.log("这是最简单的中间件函数");
//     //把流转关系 转交给下一个中间件或路由
//     next();
// };

// //将MW注册为全局生效的中间件
// app.use(MW);

//上面两个可以合并在一起
app.use((req,res,next)=>{
    console.log("这是最简单的中间件函数");
    next();
})

app.get('/',(req,res)=>{
    console.log("调用了 / 这个路由");
    res.send("Home Page.");
});
app.get('/user',(req,res)=>{
    res.send("User Page.");
    console.log("调用了 /user 这个路由");
});
app.post('/',(req,res)=>{
    res.send("Home Page.");
    console.log("调用了 / 这个路由");
});


app.listen(80,()=>{
    console.log("express server running at http://127.0.0.1");
});