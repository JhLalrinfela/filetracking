var express = require("express");
var router = express.Router();
const con = require("../database");

router.get("/update", (req, res) => {
  var id = req.query.slno;
  query = `select * from pending where slno='${id}'`;
  con.query(query, (error, data) => {
    if (error) throw error;
    res.render("update", {
      title: "update",
      data: data,
    });
  });
});

router.get("/update_pending", (req, res) => {
  var uname = req.body.username;
  var reason = req.body.reason;
  query = `update pending set reason='${reason}' where assign_person='${uname}'`;
  con.query(query,(error,data)=>{
    if(error) throw error
    res.render("update", {
      title: "update",
      data: data,
    });
  })
});

module.exports = router;
