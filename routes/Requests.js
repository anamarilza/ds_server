// var express = require('express');
// var router = express.Router();
// var Request=require('../models/Request');
//
// // ? means there is a optional argument
// //GET METHODS
// router.get('/:id_solicitacao?',function(req,res,next){
// 
//     if(req.params.id_solicitacao){ // parametro existe
//         Request.getRequestById(req.params.id_solicitacao,function(err,rows){ //get a specific task
//             if(err){
//                 res.json(err);
//             } else {
//                 res.json(rows);
//             }
//         });
//     }
//     else{// parametro não existe
//         Task.getAllRequests(function(err,rows){ // get all tasks
//             if(err) {
//                 res.json(err);
//             } else {
//                 res.json(rows);
//             }
//         });
//     }
//  });
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
//
// module.exports=router;
