const express = require('express');
const app = express();

//注意：除了错误级别中间件，其他的中间件，必须再路由之前进行配置
//通过 express.json() 这个中间件，解析表单中的 JSON 格式大的数据
app.use(express.json());

//解析完毕之后就会把，解析后的数据挂载到req上，是一个body属性。
//后续的路由或中间件，就可以访问了


//通过 express.urlencoded() 这个中间件，来解析表单中的 urlencoded 格式的数据
app.use(express.urlencoded({extended: false}));//固定写法，要记住

app.get('/',(req,res)=>{
    //在服务器，可以用 req.body 这个属性。来接收客服端发送过来的请求体数据
    //默认情况，如果不配置解析表单数据的中间件 (就是配置express.json())，
    //则req.body默认等于 undefined
    console.log(req.body);
    res.send("Home Page...");
});

app.post('/user',(req,res)=>{
    res.send("--> User <--");
    //在服务器端，可以通过 req.body 来获取 JSON 格式的表单数据和
    //urlencoded 格式的数据
    console.log(req.body);//因为配置过了express.json，
    //所以不配置express.urlencode，就会输出空对象 {}，不是undefined了哦，
    //都不配置才是输出undefined
});

app.listen(80,()=>{
    console.log("express server running at http://127.0.0.1");
});