var express = require("express");
var router = express.Router();
const con = require("../database");

router.get("/admin", async (req, res) => {
  query = `select slno,subject,assign_person,type,category,add_date,now() as today, TIMESTAMPDIFF(hour,add_date,now()) as pending_hour from pending`;
  con.query(query, (error, data) => {
    if (error) throw error;
    res.render("admin", {
      title: "admin",
      data: data,
    });
  });
});

router.get("/complete", async (req, res) => {
  q = `select * from complete`;
  con.query(q, (error, data) => {
    if (error) throw error;
    res.send(data);
  });
});

module.exports = router;
