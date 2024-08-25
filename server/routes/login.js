var express = require("express");
var router = express.Router();
var database = require("../database");


router.post("/login",(req,res)=>{
    var user = req.body.user;
    var upass = req.body.password;
    query = `select * from user where uname ='${user}' && password ='${upass}'`;
    database.query(query,(error,data)=>{
        if(error) throw error
        res.redirect('/user')
    })
})



module.exports = router;