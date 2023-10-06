//这是路由处理函数模块

//导入数据库模块
const db = require('../db/index');

//获取文章分类列表的处理函数
exports.getArtcates = (req,res)=>{
    // res.send('OK');
    //定义查询分类列表数据的sql语句
    const sql = `select * from ev_article_cate where is_delete=0 order by id asc`;
    //调用 db.query() 执行sql语句
    db.query(sql,(err,results)=>{
        if(err) return res.cc(err);
        res.send({
            status: 0,
            message: '获取文章分类数据成功',
            data: results
        });
    });
};


//新增文章分类的处理函数
exports.addArticleCates = (req,res)=>{
    // res.send('OK');
    //定义查重的 sql语句
    const sql = `select * from ev_article_cate where name=? or alias=?`;
    //执行查重的sql语句
    db.query(sql,[req.body.name,req.body.alias],(err,results)=>{
        //判断执行 sql语句失败
        if(err) return res.cc(err);

        //判断数据的length
        if(results.length === 2) return res.cc('分类名称和分类别名被占用，请更换后重试');
        
        //length 等于1的其他3种情况
        if(results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias){
            return res.cc('分类名称和分类别名被占用，请更换后重试');
        };
        if(results.length === 1 && results[0].name === req.body.name){
            return res.cc('分类名称被占用，请更换后重试');
        };
        if(results.length === 1 && results[0].alias === req.body.alias){
            return res.cc('分类别名被占用，请更换后重试');
        };

        //分类名称和分类别名都可用，执行添加
        //定义插入文章的 SQL语句
        const sql = `insert into ev_article_cate set ?`;
        //执行插入文章分类的 SQL语句
        db.query(sql,req.body,(err,results)=>{
            if(err) return res.cc(err);
            if(results.affectedRows !== 1) return res.cc('新增文章分类失败');
            res.cc('新增文章分类成功',0);
        });

    });
};


//删除文章分类的处理函数
exports.deleteCateById = (req,res)=>{
    // res.send('OK');
    //定义标记删除的SQL语句
    const sql = `update ev_article_cate set is_delete=1 where id=?`;
    //调用 db.query() 执行sql语句
    db.query(sql, req.params.id, (err,results)=>{
        if(err) return res.cc(err);
        if(results.affectedRows !== 1) return res.cc('删除文章分类失败');
        res.cc('删除文章分类成功',0);
    });
};


//根据 Id 获取文章分类的处理函数
exports.getArtCateById = (req,res)=>{
    // res.send('OK');
    //定义根据 Id获取文章分类的SQL语句
    const sql = `select * from ev_article_cate where id=?`;
    //调用 db.query() 执行sql语句
    db.query(sql,req.params.id,(err,results)=>{
        if(err) return res.cc(err);
        if(results.length !== 1) return res.cc('获取文章分类数据失败');
        res.send({
            status: 0,
            message: '获取文章分类数据成功',
            data: results[0]
        });
    });
};


//根据 Id 更新文章分类的处理函数
exports.updateCateById = (req,res)=>{
    // res.send('OK');
    //定义查重的SQL语句
    const sql = `select * from ev_article_cate where Id<>? and (name=? or alias=?)`;
    //调用 db.query() 执行查重的sql语句
    db.query(sql,[req.body.Id, req.body.name, req.body.alias],(err,results)=>{
        //执行sql语句失败
        if(err) return res.cc(err);

        if(results.length === 2) return res.cc('分类名称和别名被占用，请更换后重试');
        if(results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias){
            return res.cc('分类名称和别名被占用，请更换后重试');
        };
        if(results.length === 1 && results[0].name === req.body.name){
            return res.cc('分类名称被占用，请更换后重试');
        };
        if(results.length === 1 && results[0].alias === req.body.alias){
            return res.cc('分类别名被占用，请更换后重试');
        };

        //名称和别名都可用，可以执行更新操作
        //定义更新文章分类的SQL语句
        const sql = `update ev_article_cate set ? where Id=?`;
        //执行更新文章的sql语句
        db.query(sql,[req.body, req.body.Id],(err,results)=>{
            if(err) return res.cc(err);
            if(results.affectedRows !== 1) res.cc('更新文章分类失败');
            res.cc('更新文章分类成功', 0);
        });
    });
};