const express = require('express');
const Authordata = require('../models/authorModel');
const addAuthor = express.Router();


function router(nav){
    addAuthor.route('/')
    .get((req,res) => {
        res.render(
            'addAuthor',
            {
                nav,
                title : "Library"
            }
        );
    });
    addAuthor.route('/add')
    .get((req,res) => {
         var item = {
            name : req.query.name,
            age : req.query.age,
            genre : req.query.genre,
            image : req.query.image
         }
         var author = new Authordata(item);
         author.save();
         res.redirect('/authors');
    });


    return addAuthor;
}
module.exports = router ;