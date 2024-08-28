var express = require("express");
var router = express.Router();
const con = require("../database");

router.post("/login", async (req, res) => {
  var uname = req.body.username;
  var upass = req.body.password;
  if (uname == "admin") {
    query = `select * from user where uname ='${uname}' && password ='${upass}'`;
    con.query(query, (error, data) => {
      if (error) throw error;
      if (data.length == 1) {
        req.session.name = uname;
        res.redirect("/admin");
      } else {
        res.send("Admin Password is Incorrect");
      }
    });
  } else if (uname == "scheduler") {
    query = `select * from user where uname ='${uname}' && password ='${upass}'`;
    con.query(query, (error, data) => {
      if (error) throw error;
      if (data.length == 1) {
        req.session.name = uname;
        res.redirect("/scheduler");
      } else {
        res.send("Scheduler Password is Incorrect");
      }
    });
  } else {
    query = `select * from user where uname ='${uname}' && password ='${upass}'`;
    con.query(query, (error, data) => {
      if (error) throw error;
      if (data.length == 1) {
        req.session.name = uname;
        res.redirect("/user?uname=" + uname);
      } else {
        res.send("Scheduler Password is Incorrect");
      }
    });
  }
});

router.get("/logout", function (req, res, next) {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
