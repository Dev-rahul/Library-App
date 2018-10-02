const express = require('express');
const chalk = require('chalk');
const path = require('path');

const nav = [
    {
        link : '/books',
        title:'Books'
    },
    {
        link:'/authors',
        title:'Authors'
    },
    {
        link:'/admin',
        title: 'Add Book'
    },
    {
        link:'/addauthor',
        title: 'Add Author'
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const addAuthor = require('./src/routes/addAuthorRoutes')(nav);

var app = new express();




app.use('/books', booksRouter);
app.use('/authors', authorRouter);
app.use('/admin', adminRouter);
app.use('/addauthor', addAuthor);
  
app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engine','ejs');
app.use('/books',booksRouter);
app.get('/',function(req,res){
    res.render('index',{
        title:"Library",
        nav,
        dp:['https://cdn.blog.tdstelecom.com/wp-content/uploads/2014/05/Beats-Audio-logo.png' ,'https://cdn.shopify.com/s/files/1/1047/2058/files/1601.png?5744921176287891510' , 'https://i.pinimg.com/originals/d0/54/89/d054890aa6a20fe5273d24feff7acc79.jpg']

    });
});


app.listen(4000,function(){
    console.log('Listening to port ' + chalk.red(4000));
});