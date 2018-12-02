var express = require('express');
var router = express.Router();
var Student= require('../models/Student');
const multer = require('multer');
var upload = multer()

// ? means there is a optional argument
//GET METHODS
router.get('/getAllStudentsFromCourse/:nome_curso',function(req,res,next){

  if(req.params.nome_curso){
      Student.getAllStudentsFromCourse(req.params.nome_curso,function(err,rows){ //get a specific task
          if(err){
              res.json(err);
          } else {
              res.json(rows);
          }
      });
  }
});

router.get('/getAllStudentsFromCourseId/:id_curso',function(req,res,next){

    if(req.params.id_curso){
        Student.getAllStudentsFromCourseId(req.params.id_curso, function(err,rows){ // get all tasks
            if(err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
 });

router.get('/getStudentByMatricula/:matricula',function(req,res,next){

    if(req.params.matricula){
        Student.getStudentByMatricula(req.params.matricula, function(err,rows){ // get all tasks
            if(err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
 });

router.get('/getStudentByCpf/:cpf_aluno',function(req,res,next){

 if(req.params.cpf_aluno){
     Student.getStudentByCpf(req.params.cpf_aluno, function(err,rows){ // get all tasks
         if(err) {
             res.json(err);
         } else {
             res.json(rows);
         }
     });
 }
});


router.post('/addNewStudent', upload.none(), (req, res, next) => {
  Student.addNewStudent(req.body,function(err,count){
      if(err){
          res.json(err);
      } else {
          res.json(req.body);//or return count for 1 &amp;amp;amp; 0
      }
  });
});
module.exports=router;
