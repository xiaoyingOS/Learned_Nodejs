## 安装
```
npm install xiaoying
```

## 导入
```js
const xiaoying = require('xiaoying');
```

## 格式化时间
```js
//调用 dateFormat 对时间格式化
const dtStr = xiaoying.dateFormat(new Date());
console.log(dtStr);
//输出结果 2022-12-20 22:23:37
```

## 转义 HTML 中的特殊字符
```js
//调用 htmlEscape 方法进行转换
const htmlStr = '<h1 title="标题">这是h1标签<span>123&nbsp;</span></h1>';
const str = xiaoying.htmlEscape(htmlStr);
console.log(str);
//输出结果 &lt;h1 title=&quot;标题&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
```

## 还原 HTML 字符串
```js
//调用 htmlUnEscape 还原为HTML标签
const HTMLStr = '&lt;h1 title=&quot;标题&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;';
const HTML = xiaoying.htmlUnEscape(HTMLStr);
console.log(HTML);
//输出结果 <h1 title="标题">这是h1标签<span>123&nbsp;</span></h1>
```

## 开源协议
ISC
