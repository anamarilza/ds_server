var express = require('express');
var router = express.Router();
var Question= require('../models/Question');
const multer = require('multer');
var upload = multer()

// ? means there is a optional argument
//GET METHODS
router.get('/getAllQuestionsFromCurriculum/:id_curriculo',function(req,res,next){

    if(req.params.id_curriculo){
        Question.getAllQuestionsFromCurriculum(req.params.id_curriculo,function(err,rows){ //get a specific task
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
 });

router.get('/getQuestionById/:id_perg',function(req,res,next){

     if(req.params.id_perg){
         Question.getQuestionById(req.params.id_perg, function(err,rows){ // get all tasks
             if(err) {
                 res.json(err);
             } else {
                 res.json(rows);
             }
         });
     }
  });

router.post('/addNewQuestion', upload.none(), (req, res, next) => {
    Question.addNewQuestion(req.body,function(err,count){
        if(err){
            res.json(err);
        } else {
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
        }
    });
 });
module.exports=router;
