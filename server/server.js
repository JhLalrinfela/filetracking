const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser')


const app = express();
const home = require("./routes/home");
const scheduler = require("./routes/scheduler");
const admin = require("./routes/admin");
const login = require("./routes/login");

//view engine
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));

app.use(cors());
app.use("/",home);
app.use("/",scheduler);
app.use("/",admin);
app.use("/",login);



app.listen(4000,()=>{
    console.log("Connect to backend")
})



module.exports = app;