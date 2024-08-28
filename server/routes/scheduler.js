var express = require("express");
var router = express.Router();
var database = require("../database");

router.get("/scheduler", (req, res) => {
  query = `select uname from user limit 20 offset 2`;
  database.query(query, (error, data) => {
    if (error) throw error;
    res.render("scheduler", {
      title: "scheduler",
      uname: data,
    });
  });
});

router.post("/insertintopending", function (req, res, next) {
  var subject = req.body.subject;
  var person = req.body.person;
  var type = req.body.type;
  var category = req.body.category;
  var query = `insert into pending(slno,subject,assign_person,type,category,add_date) values(null,?,?,?,?,NOW())`;
  database.query(query, [subject, person, type, category]);
  res.send("Data added Successfully");
});

router.get("/pendingdisplay", async (req, res) => {
  //var name = req.body.name;
  q = `select * from pending`;
  database.query(q, (error, data) => {
    if (error) throw error;
    res.send(data);
  });
});

module.exports = router;
