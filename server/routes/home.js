var express = require("express");
var router = express.Router();
const con = require("../database");



router.get("/", (req, res, next) => {
  var q = `select uname from user`;
  con.query(q, (error, data) => {
    if (error) throw error;
    res.render("home", {
      title: "E-letterMovemebt",
      uname: data,
    });
  });
});


router.post("/signup",(req,res)=>{
  var uname = req.body.uname;
  var upass = req.body.upass;
  query = `insert into user values(null,?,?)`;
  con.query(query, [uname,upass]);
  res.send(uname)
})

module.exports = router;
