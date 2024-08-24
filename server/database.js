const mysql = require("mysql");
    const con = mysql.createConnection({
        connectionLimit :10,
        host:"localhost",
        database:"filetracking",
        user:"root",
        password:"Mysqlpass@1"
    })

    con.connect(function(e){
        if(e) throw e;
        console.log("Mysql Database is connected Successfully");
});

module.exports = con;

