var express = require("express");
var router = express.Router();
const con = require("../database");
const { error } = require("jquery");

router.get("/", (req, res, next) => {
  var q = `select uname from user`;
  con.query(q, (error, data) => {
    if (error) throw error;
    res.render("home", {
      title: "I-eFiS",
      uname: data,
    });
  });
});

router.post("/signup", (req, res) => {
  var uname = req.body.uname;
  var upass = req.body.upass;
  query = `insert into user values(null,?,?)`;
  con.query(query, [uname, upass]);
  res.send(uname);
});

router.get("/cardone", (req, res) => {
  query = `select * from pending`;
  con.query(query, (error, data) => {
    if (error) throw error;
    res.send(data);
  });
});

router.get("/cardtwo", (req, res) => {
  query = `select * from complete`;
  con.query(query, (error, data) => {
    if (error) throw error;
    res.send(data);
  });
});

router.get("/cardthree", (req, res) => {
  query = `select * from user`;
  con.query(query, (error, data) => {
    if (error) throw error;
    res.send(data);
  });
});

router.get("/pendingfileneite", async (req, res) => {
  query = `select slno,subject,assign_person,type,category,add_date,now() as today, TIMESTAMPDIFF(hour,add_date,now()) as pending_hour from pending`;
  con.query(query, (error, data) => {
    if (error) throw error;
    res.send(data);
  });
});

router.get("/displayhowmuch", (req, res) => {
  var uname = req.query.name;
  console.log(uname);
  query = `select * from complete where assign_person='${uname}'`;
  con.query(query, (error, data) => {
    if (error) throw error;
    res.send(data);
  });
});

module.exports = router;
