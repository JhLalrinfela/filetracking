var express = require("express");
var router = express.Router();
const con = require("../database");

router.get("/", (req, res, next) => {
    var q = "select * from file_management";
    var query = `select uname from user`;
    
});

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

module.exports = router;
