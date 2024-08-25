var express = require("express");
var router = express.Router();
const con = require("../database");

router.get("/admin",async(req,res)=>{
      query = `select slno,subject,assign_person,type,category,add_date,now() as today, TIMESTAMPDIFF(hour,add_date,now()) as pending_hour from pending`;
      con.query(query, (error, data) => {
         if (error) throw error;
         res.render("admin", {
            title: "admin",
            data:data,
         });
      })
})

router.get("/delete/:id", function(req,res,next){
   var id = req.params.id;
   query = `insert into complete(subject,assign_person,type,category,putup_date) select subject,assign_person,type,category,NOW() from pending where slno=?`
   con.query(query, [id]);
   q = `delete from pending where slno=?`
   con.query(q,[id]);
   res.redirect('/admin');
})


router.get("/complete",async(req,res)=>{
   //var name = req.body.name;
      q = `select * from complete`;
      con.query(q, (error, data) => {
         if (error) throw error;
         res.send(data);
      })
})


// router.post("/search",(req,res,next)=>{
//    var name = req.body.name;
//    query = `select slno,subject,assign_person,type,add_date,now() as today, DATEDIFF(now(),add_date) as pending_days from pending where assign_person='${name}';`;
//    con.query(query,(error,data)=>{
//       if(error) throw error
//       //res.send(data)
//       res.render("admin",{
//          title:"admin",
//          data:data,
//       }
//       )
//    })
// })








module.exports = router;