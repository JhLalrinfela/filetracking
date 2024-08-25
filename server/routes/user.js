var express = require("express");
var router = express.Router();
const con = require("../database");

router.get("/user",(req,res)=>{
    //var user = req.body.user;
    //console.log(user);
    query = `select * from pending where assign_person ='Tei'`;
    con.query(query,(error,data)=>{
        if(error) throw error
        res.render("user",{
            title:"user",
            data:data
        })
    })
    res.redirect('/user');
})


module.exports = router;