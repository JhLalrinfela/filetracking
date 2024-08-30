var express = require("express");
var router = express.Router();
const con = require("../database");

router.get("/newassigner", (req, res) => {
  var slno = req.query.slno;
  console.log(slno);
});

module.exports = router;
