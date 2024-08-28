var express = require("express");
var router = express.Router();
const con = require("../database");

router.get("/update/:id", (req, res) => {
  var id = req.params.id;
  query = `select * from pending where slno='${id}'`;
  con.query(query, (error, data) => {
    if (error) throw error;
    res.render("update", {
      title: "update",
      data: data,
    });
  });
});

router.post("/update_pending", (req, res) => {
  var uname = req.body.username;
  var reason = req.body.reason;
  console.log(uname + " " + reason);
});

module.exports = router;
