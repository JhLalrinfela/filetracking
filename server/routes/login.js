var express = require("express");
var router = express.Router();
const con = require("../database");

router.post("/login", (req, res) => {
  var user = req.body.uname;
  var upass = req.body.upass;
  query = `select * from user where uname ='${user}' && password ='${upass}'`;
  con.query(query, (error, data) => {
    if (error) throw error;
    if (data.length == 1) {
      req.session.user = user;
      res.render("example");
      console.log(data);
    } else {
      res.send("Password Incorect");
    }
    res.end();
  });
});

module.exports = router;
