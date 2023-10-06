const mysql = require('mysql');

//建立与MySQL数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1', //数据库的 IP地址
    user: 'root', //登录数据库的账号
    password: 'xiaoying', //登录数据库的密码
    database: 'my_db_01' //指定要操作哪个数据库
});

//测试 mysql模块是否能正常工作
//语句select 1 没有任何实质性的作用，只是用来检查mysql模块正常工作
db.query('select 1',(err,results)=>{
    //mysql模块工作期间报错了
    if(err) return console.log(err.message);
    //能够成功执行的SQL语句
    console.log(results);
});