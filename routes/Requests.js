var express = require('express');
var router = express.Router();
var Request=require('../models/Request');


//GET STUDENT METHODS
router.get('/getAllStudentRequests/:matricula',function(req,res,next){

    if(req.params.matricula){ // parametro existe
        Request.getAllStudentRequests(req.params.matricula,function(err,rows){ //get a specific task
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
 });
 //POST STUDENT METHODS
 router.post('/addNewRequest',function(req,res,next){
     Request.addNewRequest(req.body,function(err,count){
         if(err){
             res.json(err);
         } else {
             res.json(req.body);//or return count for 1 &amp;amp;amp; 0
         }
     });
  });



//  router.get('/getAllRequestsFromStudent/:matricula?',function(req,res,next){
//
//   if(req.params.matricula){// parametro não existe
//          Task.getAllRequestsFromStudent(req.params.matricula, function(err,rows){ // get all tasks
//              if(err) {
//                  res.json(err);
//              } else {
//                  res.json(rows);
//              }
//          });
//      }
//   });
//
//
//   router.get('/getAllRequestsFromStudent/:matricula?',function(req,res,next){
//
//    if(req.params.matricula){// parametro não existe
//           Task.getAllRequestsFromStudent(req.params.matricula, function(err,rows){ // get all tasks
//               if(err) {
//                   res.json(err);
//               } else {
//                   res.json(rows);
//               }
//           });
//       }
//    });
//
// router.post('/',function(req,res,next){
//     Task.addRequest(req.body,function(err,count){
//         if(err){
//             res.json(err);
//         } else {
//             res.json(req.body);//or return count for 1 &amp;amp;amp; 0
//         }
//     });
//  });
//
// router.delete('/:id',function(req,res,next){
//     Request.deleteRequest(req.params.id,function(err,count){
//         if(err) {
//             res.json(err);
//         } else {
//             res.json(count);
//         }
//     });
// });

module.exports=router;
