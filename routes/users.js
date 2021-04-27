var express = require('express');
var router = express.Router();
var users=require('../Models/users');

/* GET users listing. */
router.get('/',function(req,res,next){
  users.find(function(err,docs){
      if(err){
          res.json(err);
      }
      else{
          res.json(docs);
      }
  });
});

router.post('/',function(req,res,next){
  const prod = new users({
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone
  });
  prod.save(function(err,result){
      if(err){
          res.json(err);
      }
      else{
          res.json(result);
      }
  });
});

module.exports=router;
