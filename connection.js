const mysql2 = require("mysql2")
const con = mysql2.createConnection({
    host: '0.0.0.0',
    user: 'root',
    database: 'Aditya',
    password: 'Rocky',
    // port: 3306
})

con.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Connection is created.");
});

module.exports.con = con;