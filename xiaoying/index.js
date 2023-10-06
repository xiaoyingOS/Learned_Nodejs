//这是包入口文件

/*
//定义格式化时间函数
function dateFormat(dateStr){
    const dt = new Date(dateStr);

    const YYYY = dt.getFullYear();
    const MM = padZero(dt.getMonth() + 1);
    const DD = padZero(dt.getDate());

    const HH = padZero(dt.getHours());
    const mm = padZero(dt.getMinutes());
    const ss = padZero(dt.getSeconds());

    return `${YYYY}-${MM}-${DD} ${HH}:${mm}:${ss}`;
}

//补零方法 (就是小于9，补个0，年份不需要补零)
function padZero(number){
    return number > 9 ? number : '0' + number;
}

function htmlEscape(htmlStr){
    return htmlStr.replace(/<|>|"|&/g,match=>{
        switch(match){
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case '&':
                return '&amp;'
        }
    });
}

function htmlUnEscape(str){
    return str.replace(/&lt;|&gt;|&amp;|&quot;/g,match=>{
            switch(match){
                case '&gt;':
                    return '>';
                case '&lt;':
                    return '<';
                case '&quot;':
                    return '"';
                case '&amp;':
                    return '&';
            }
    });
}
*/

//导入模块
const date = require('./dateFormat');
const escape = require('./htmlEscape');

//向外暴露需要的成员
module.exports = {
    //...就是展开运算符，把对象所有属性展开。每个都变成module.exports对象
    ...date,
    ...escape
}