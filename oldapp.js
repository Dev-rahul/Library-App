const express = require('express');
const chalk = require('chalk');
const path = require('path');


var app = new express();

app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render('index',{
        title:"Library",
        nav:[{link:'/books',title:'Books'},{link:'/authors',title:'Authors'}],
        dp:['https://cdn.blog.tdstelecom.com/wp-content/uploads/2014/05/Beats-Audio-logo.png' ,'https://cdn.shopify.com/s/files/1/1047/2058/files/1601.png?5744921176287891510' , 'https://i.pinimg.com/originals/d0/54/89/d054890aa6a20fe5273d24feff7acc79.jpg']

    });
});

/* app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"views/index.html"));
}); */


app.listen(2000,function(){
    console.log('Listening to port ' + chalk.red(2000));
});