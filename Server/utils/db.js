import mysql from 'mysql2'; // Change this line

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Noor@8357",
    database: 'employee_management_system',
    port: 3306
});

// Keep the connection open for handling requests

con.connect(function(err) {
    if (err) {
        console.log("Connection error", err);
        return
    } else {
        console.log("Connected");  
    }
});

export default con;
