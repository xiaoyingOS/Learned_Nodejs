const express = require('express');
const app = express();

app.use(express.static('./getFiles'));
app.use(express.static('public'));

//以后都要这样写
app.use('/public',express.static('./public'));


app.listen(80,()=>{
    console.log("express running at http://127.0.0.1");
});