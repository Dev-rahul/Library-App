const express = require('express');
const Bookdata = require('../models/bookModel');
const adminRouter = express.Router();


function router(nav){
    adminRouter.route('/')
    .get((req,res) => {
        res.render(
            'addBook',
            {
                nav,
                title : "Library"
            }
        );
    });
    adminRouter.route('/add')
    .get((req,res) => {
         var item = {
            title : req.query.title,
            author : req.query.author,
            genre : req.query.genre,
            image : req.query.image
         }
         var book = new Bookdata(item);
         book.save();
         res.redirect('/books');
    });


    return adminRouter
}
module.exports = router ;