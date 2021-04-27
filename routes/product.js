var express = require('express');
var router = express.Router();
var product=require('../Models/product');

/* GET products listing. */
router.get('/',function(req,res,next){
  product.find(function(err,docs){
      if(err){
          res.json(err);
      }
      else{
          res.json(docs);
      }
  });
});

/* POST new product. */
router.post('/',function(req,res,next){
  const prod=new product({
      name:req.body.name,
      price:req.body.price
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
