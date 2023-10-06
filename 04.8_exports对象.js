// console.log(exports);
// console.log(module.exports);

// console.log(exports === module.exports);//输出 true


exports.username = '张三';

exports.sayHello = function(){
    console.log('大家好啊！');
};

exports.age = 20;

const name = 'xiaoying';
module.exports.name = name;

//这两个(exports和module.exports)，默认情况下就指向同一个对象。
//永远都是 module.exports 所指向的对象为准