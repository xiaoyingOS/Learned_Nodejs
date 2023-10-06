const mysql = require('mysql');

//建立与数据库连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'xiaoying',
    database: 'my_db_01'
});

//测试 mysql模块是否能正常工作
// db.query('select 1',(err,results)=>{
//     if(err) return console.log(err.message);
//     console.log(results);
// });


//查询 users中的所有数据
// const sqlStr = 'select * from users';
// db.query(sqlStr,(err,results)=>{
//     if(err) return console.log(err.message);
//     //执行的是select查询语句，则执行的结果是数组
//     console.log(results);
// });


//向users表中，插入一条语句，其中username值为Spider-Man  password值为pcc123

// const user = {username: 'Spider-Man', password: 'pcc123'};
// //定义待执行的 SQL语句
// const sqlStr = 'insert into users (username, password) value (?, ?)';
// //执行SQL语句
// db.query(sqlStr,[user.username,user.password],(err,results)=>{
//     if(err) return console.log(err.message);
//     //注意：如果执行insert into 插入语句，则results 是一个对象
//     //可以通过 affectedRows 属性，来判断是否插入数据成功
//     if(results.affectedRows === 1) console.log('插入成功！');
// });


// const user = {username: 'Spider-Man2', password: 'pcc4321'};
// //演示插入数据的便捷方式

// //定义待执行的SQL语句
// //英文问号(?) 表示占位符，
// const sqlStr = 'insert into users set ?';

// //执行sql语句，直接放入对象user就行
// db.query(sqlStr,user,(err,results)=>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1) console.log('插入成功！');
// });


// console.log('\n');
// //更新用户的信息
// //更新的数据对象
// const user = {id: 8,username: 'xiaohong',password: 'xh233'};
// //SQL语句
// const sqlStr = 'update users set username=?, password=? where id=?';
// //执行sql语句
// db.query(sqlStr,[user.username,user.password,user.id],(err,results)=>{
//     if(err) return console.log(err.message);
//     //注意：执行了 update语句之后，执行结果也是一个对象，
//     //也可以通过affectedRows判断是否更新成功
//     if(results.affectedRows === 1) console.log('更新成功！');
// });


// 
// //更新用户的信息
// //更新的数据对象
// const user = {id: 8,username: 'XIAOHONG',password: 'XH233'};
// //SQL语句
// const sqlStr = 'update users set ? where id=?';
// //执行sql语句。直接把user丢进去就行了
// db.query(sqlStr,[user,user.id],(err,results)=>{
//     if(err) return console.log(err.message);
//     //注意：执行了 update语句之后，执行结果也是一个对象，
//     //也可以通过affectedRows判断是否更新成功
//     if(results.affectedRows === 1) console.log('更新成功！');
// });


// console.log('\n');
// //但是这样删除非常危险。会把数据真的删除，所以都是用标记删除
// //删除id=10的用户
// const sqlStr = 'delete from users where id=?';
// db.query(sqlStr,10,(err,results)=>{
//     if(err) return console.log(err.message);
//     //注意：执行delete语句之后，结果也是一个对象，也包含affectedRows属性
//     if(results.affectedRows === 1) console.log('删除成功！');
// });


console.log('\n');
//标记删除id=15 的用户
//就是用户删除后，不会真的删除，而是把用户状态 标记 为某种状态

//SQL语句
const sqlStr = 'update users set status=? where id=?';

db.query(sqlStr,[1,15],(err,results)=>{
    if(err) return console.log(err.message);
    
    if(results.affectedRows === 1) console.log('更新成功！');
});

