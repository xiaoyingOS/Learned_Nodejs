//在一个自定义模块中，默认情况下，
//module.exports = {}

//向 module.exports 对象上挂载 username属性
module.exports.username = '张三';

//向 module.exports 对象上挂载 sayHello方法
module.exports.sayHello = function(){
    console.log('大家好，我是' + username);
};

const age = 20;
module.exports.age = age;

///让 module.exports 指向一个全新的对象
module.exports = {
    nickname: '小白',
    sayHi(){
        console.log('hi! ');
    }
}