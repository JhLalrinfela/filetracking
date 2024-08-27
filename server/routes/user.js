var express = require("express");
var router = express.Router();
const con = require("../database");


router.get("/user",(req,res)=>{
    var uname = req.query.uname;
    query = `select * from pending where assign_person='${uname}'`;
    con.query(query,(error,data)=>{
        if(error) throw error
        res.render("user",{
            title:"User",
            data:data
        })
    })
})


module.exports = router;
