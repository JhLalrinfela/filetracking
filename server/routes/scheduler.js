var express = require("express");
var router = express.Router();
var database = require("../database");


router.get("/scheduler",(req,res)=>{
    query = `select * from pending order by category desc`;
    database.query(query,(error,data)=>{
        if(error) throw error
        res.render("scheduler",{
            title:"scheduler",
            pendingData:data,
        })
    })
})

router.post('/insertintopending',function(req,res,next){
    var subject = req.body.subject;
    var person = req.body.person;
    var type = req.body.type;
    var category = req.body.category;
    var query = `insert into pending(slno,subject,assign_person,type,category,add_date) values(null,?,?,?,?,NOW())`;
    database.query(query, [subject,person,type,category]);
    res.send("Data added Successfully");

})


module.exports = router;