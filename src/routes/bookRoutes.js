const express = require('express');
const booksRouter = express.Router();
const mongoose = require('mongoose');
const bookModel = require('../models/bookModel');

function router(nav){

booksRouter.route('/')
    .get((req,res)=>{
        bookModel.find()
            .then(function(books){
                res.render('books',{ nav , title:"Library",books});        
        });
    });

booksRouter.route('/:id')
    .get((req,res)=>{
        const id = req.params.id ;
         bookModel.findOne({_id:id})
            .then(function(book){
                res.render('book',{ nav , title:"Library",book}); 
            });
        
        });


    return booksRouter;

}
module.exports = router;
