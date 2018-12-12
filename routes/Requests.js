var express = require('express');
var router = express.Router();
var Request=require('../models/Request');
const uuidv4 = require('uuid/v4');
const multer = require('multer');
const path = require('path');
var file_id = uuidv4();
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      file_id = uuidv4();
      cb(null, file_id+".pdf");
    }
});
var upload = multer({storage: storage});

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

 router.get('/getAllRequests',function(req,res,next){
     Request.getAllRequests(function(err,rows){ //get a specific task
         if(err){
             res.json(err);
         } else {
             res.json(rows);
         }
     });

  });
router.get('/getRequestFileById/:file_id', function(req, res, next){
    if(req.params.file_id){
        res.sendFile(path.join(__dirname, '../uploads', req.params.file_id));
    }
});
  // POST /upload for single file upload
  /* ===== Make sure that file name matches the name attribute in your html ===== */
  router.post('/addNewRequest', upload.single('pdf'), (req, res, next) => {
      if (req.file) {
          Request.addNewRequest(req.body, file_id+".pdf", function(err,count){
              if(err){
                  res.json(err);
                  console.log(err);
                  var filename = 'FILE NOT UPLOADED';
                  var uploadStatus = 'File Upload Failed';
              } else {
                  res.json(req.body);
                  console.log('Uploading file...');
                  var filename = req.file.filename;
                  var uploadStatus = 'File Uploaded Successfully';
              }
            });
      } else {
          console.log('No File Uploaded');
          var filename = 'FILE NOT UPLOADED';
          var uploadStatus = 'File Upload Failed';
      }

      /* ===== Add the function to save filename to database ===== */
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
