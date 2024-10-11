var express = require("express");
var router = express.Router();
const con = require("../database");

router.get("/user", (req, res) => {
  var uname = req.query.uname;
  query = `select slno,subject,assign_person,type,category,add_date,reason,now() as today, TIMESTAMPDIFF(hour,add_date,now()) as pending_hour from pending where assign_person='${uname}'`;
  con.query(query, (error, data) => {
    if (error) throw error;
    res.render("user", {
      title: "User",
      uname: uname,
      data: data,
    });
  });
});

router.get("/usercomplete", (req, res) => {
  var uname = req.query.uname;
  query = `select * from complete where assign_person='${uname}' order by putup_date desc`;
  con.query(query, (error, data) => {
    if (error) throw error;
    res.send(data);
  });
});

module.exports = router;
