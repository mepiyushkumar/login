const express = require("express");
const router = express.Router();

const user = require("../../Server/db_models/loginmodel");


router.route('/put_in_db').post((req,res,next)=>{
  user.create(req.body,(err,data)=>{
    if(err){
      console.log(err);
      return next(err);
    }else{
      console.log(data);
      res.json(data);
    }
  })
})

module.exports = router;