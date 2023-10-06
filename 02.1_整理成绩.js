const fs = require('fs');

fs.readFile('./a2_Files/成绩.txt','utf8',function(err,dataStr){
    //判断文件是否读取成功
    if(err){
        return console.log("读取文件失败！" + err.message);
    };

    //console.log("文件读取成功-->" + dataStr);
    //1.把成绩数据(字符串),按照空格进行分割,形成一个数组
    const arrOld = dataStr.split(' ');//空隔分割(因为成绩数据，本身是空格分开的，所以才用空格分开)
    console.log(arrOld);//输出 [ '小红=99', '小白=100', '小黄=70', '小黑=66', '小绿=88' ]
    
    //2.循环分割后的数组，对每一项数据，进行字符串的替换操作
    const arrNew = [];
    arrOld.forEach(item => {//循环数组，每一次值保存在item变量
        //对每一次item的值，进行字符串替换(把=替换为：)
        arrNew.push(item.replace('=','：'));//把item字符串中的 = 替换为 ： 然后加在arrNew数组中去
    });
    console.log(arrNew);//输出 [ '小红：99', '小白：100', '小黄：70', '小黑：66', '小绿：88' ]
    
    //3.把新数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n');//把每一项用回车换行分开
    console.log(newStr);//输出 
    /*小红：99
    小白：100
    小黄：70
    小黑：66
    小绿：88*/

    //调用 fs.writeFile() 方法，将新字符串(newStr)写入到文件a2_Files/成绩.md中去
    fs.writeFile('./a2_Files/成绩.md',newStr,function(err){
        if(err){
            return console.log("文件写入失败！-->" + err.message);
        };
        console.log("成绩写入成功");
    });
});
