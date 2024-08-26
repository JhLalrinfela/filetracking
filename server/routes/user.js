var express = require("express");
var router = express.Router();
const con = require("../database");

router.get("/login", (req, res) => {
  var user = req.body.user;
  var upass = req.body.password;
  query = `select * from user where uname ='${user}' && password ='${upass}'`;
  con.query(query, (error, data) => {
    if (error) throw error;
    if (data.length == 1) {
      res.redirect("/user");
    } else {
      res.send("No Record Found");
    }
  });
});

router.get("/use", (req, res) => {
  var user = req.body.user;
  //console.log(user);
  //   query = `select * from pending where assign_person ='Tei'`;
  //   con.query(query, (error, data) => {
  //     if (error) throw error;
  //     res.render("user", {
  //       title: "user",
  //       data: data,
  //     });
  //   });
  //   res.redirect("/user");
  res.send(user);
});

module.exports = router;
