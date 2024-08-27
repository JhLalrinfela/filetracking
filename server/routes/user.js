var express = require("express");
var router = express.Router();
const con = require("../database");

router.post("/useraccount", function (req, res, next) {
  res.render("example");
  // var user = req.query.user;
  // query = `select * from pending where assign_person = '${user}'`;
  // con.query(query, (error, data) => {
  //   if (error) throw error;
  //   res.render("user", {
  //     title: "user",
  //     data: data,
  //   });
  // });
});

module.exports = router;
