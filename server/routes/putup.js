var express = require("express");
var router = express.Router();
const con = require("../database");
const { error } = require("jquery");

router.get("/putup", (req, res) => {
  var id = req.query.slno;
  query = `select * from pending where slno='${id}'`;
  con.query(query, (error, data) => {
    if (error) throw error;
    res.render("putup", {
      title: "putup",
      data: data,
    });
  });
});

router.post("/complete", function (req, res, next) {
  var subject = req.body.subject;
  var person = req.body.person;
  var type = req.body.type;
  var category = req.body.category;
  var officers = req.body.officers;
  var filename = req.body.filename;
  query = `insert into complete(slno,subject,assign_person,type,category,putup_date,officers,filename) values(null,?,?,?,?,NOW(),?,?)`;
  con.query(query, [subject, person, type, category, officers, filename]);
  next();
});

router.post("/complete", (req, res) => {
  var slno = req.body.slno;
  var uname = req.body.person;
  query = `delete from pending where slno = '${slno}'`;
  con.query(query, (error, data) => {
    if (error) throw error;
    res.redirect("/user?uname=" + uname);
  });
});

module.exports = router;
