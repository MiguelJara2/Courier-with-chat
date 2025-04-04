var mysql = require('mysql2');

var con = mysql.createConnection({
    host:process.env.MYSQLHOST,
    user:process.env.MYSQLUSER,
    password: process.env.MYSQLPASS,
    database: process.env.MYSQLDB
});
con.connect(function (err) {
    if (err) throw err;
    var sql = "CREATE TABLE IF NOT EXISTS  users (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, correo VARCHAR(2550) , password VARCHAR(250))";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
    var sql = "CREATE TABLE IF NOT EXISTS  pedidos (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, paquete VARCHAR(250) unique , ubicación VARCHAR(250),correo VARCHAR(2550),Estado INT(6))";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
    var sql = "CREATE TABLE IF NOT EXISTS  mensajes (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, message VARCHAR(2550),user VARCHAR(2550))";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
});

module.exports = con;