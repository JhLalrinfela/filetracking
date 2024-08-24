var express = require("express");
var router = express.Router();
const con = require("../database");

router.get("/",(req,res)=>{
    var q = "select * from file_management";
    //var qp = "select count(*) from pending";
    file_management(res,q)
    //pending(res,qp)
})

function file_management(res,q){
    con.query(q,(error,data)=>{
        if(error) throw error
        res.render("home",{
            title:"EletterMovement",
            sampleData:data,
        })
    });
}

// function pending(res,qp){
//     con.query(qp,(error,cdata)=>{
//         if(error) throw error
//         res.render("home",{
//             count:"Pending Files",
//             nop:cdata,
//         })
//     });
// }


module.exports = router;