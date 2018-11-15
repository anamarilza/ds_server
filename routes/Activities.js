var express = require('express');
var router = express.Router();
var Activity= require('../models/Activity');

// ? means there is a optional argument
//GET METHODS
router.get('/getActivityById/:id_atividade',function(req,res,next){

    if(req.params.id_atividade){
        Activity.getActivityById(req.params.id_atividade,function(err,rows){ //get a specific task
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
 });

router.get('/getAllActivities/:id_curriculo',function(req,res,next){

     if(req.params.id_curriculo){
         Activity.getAllActivities(req.params.id_curriculo, function(err,rows){ // get all tasks
             if(err) {
                 res.json(err);
             } else {
                 res.json(rows);
             }
         });
     }
  });
module.exports=router;
