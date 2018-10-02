const express = require('express');
const authorRouter = express.Router();
const mongoose = require('mongoose');
const authorModel = require('../models/authorModel');

function router(nav){


authorRouter.route('/')
    .get((req,res)=>{
        authorModel.find()
            .then(function(authors){
                res.render('authors',{nav, title:"Library",authors});
        });
    });

authorRouter.route('/:id')
    .get((req,res)=>{
        const id = req.params.id ;
        authorModel.findOne({_id:id})
            .then(function(author){
                res.render('author',{nav, title:"Library",author});
            });

        
    });
    return authorRouter;

}
module.exports = router ;
