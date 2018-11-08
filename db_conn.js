const mysql = require('mysql')

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yourpassword",
    database: "db_node"
})

conn.connect((err) => {
    if (err) throw err
    console.log("database connect")
})

module.exports = conn