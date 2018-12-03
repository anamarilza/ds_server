var express = require('express');
var router = express.Router();
var Review= require('../models/Review');
const multer = require('multer');
var upload = multer()


router.post('/addNewReview', upload.none(), (req, res, next) => {
    Review.addNewReview(req.body,function(err,count){
        if(err){
            res.json(err);
        } else {
            Review.updateRequest(req.body.id_solicitacao, function(err, count){
              if(err){
                res.json(err);
              }else{
                res.json(req.body);
              }
            });
        }
    });
 });
module.exports=router;
