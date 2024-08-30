const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
var session = require("express-session");

const app = express();
const home = require("./routes/home");
const scheduler = require("./routes/scheduler");
const admin = require("./routes/admin");
const user = require("./routes/user");
const login = require("./routes/login");
const update = require("./routes/update");
const putup = require("./routes/putup");
const newassigner = require("./routes/newassigner");

//view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//session
app.use(
  session({
    secret: "filetracking",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));

app.use(cors());
app.use("/", home);
app.use("/", scheduler);
app.use("/", admin);
app.use("/", user);
app.use("/", login);
app.use("/", update);
app.use("/", putup);
app.use("/", newassigner);

app.listen(4000, () => {
  console.log("Connect to backend");
});

module.exports = app;
