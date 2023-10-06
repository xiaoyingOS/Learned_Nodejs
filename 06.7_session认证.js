const express = require('express');
const app = express();

//配置 Session中间件
const session = require('express-session');

app.use(session({
    secret: 'itxiaoying',
    resave: false, //固定写法
    saveUninitialized: true //固定写法
}));


app.post('api/login',(req,res)=>{
    //判断用户提交的登录信息是否正确
    if(req.body.username !== 'admin' || req.body.password !== '000000'){
        return res.send({status: 1,msg: '登陆失败'})
    };

    //注意，必须成功配置session中间件后，才能用req.session这个属性
    req.session.user = req.body //将用户信息，存储到 session中
    req.session.islogin = true //将用户登录状态，存储到 session中
    res.send({status: 0,msg: '登陆成功'})
});


//获取用户姓名的接口
app.get('/api/username',(req,res)=>{
    //从Session中获取用户名称，响应给客服端
    if(!req.session.islogin){
        return res.send({status: 1,msg: 'fail'});
    };
    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username
    });
});


//退出登录接口
app.post('/api/logout',(req,res)=>{
    //清空Session信息
    req.session.destroy();//只会清楚当前当前退出登录的这个用户，不影响其他用户
    res.send({
        status: 0,
        msg: '退出登录成功'
    });
});

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1');
});