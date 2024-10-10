var express = require("express");
var router = express.Router();
const con = require("../database");

router.get("/assign_new", (req, res) => {
  var id = req.query.slno;
  query = `select * from pending where slno='${id}'`;
  con.query(query, (error, data) => {
    if (error) throw error;
    res.render("assign_new", {
      title: "New Assignment",
      data: data,
    });
  });
});

router.post("/update_task", (req, res) => {
  var slno = req.body.slno;
  var assign_new = req.body.new_assigner;
  query = `update pending set assign_person=?,add_date=Now() where slno=?`;
  con.query(query, [assign_new, slno]);
  res.redirect("/admin");
});

module.exports = router;
