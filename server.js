const mysql = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "rootpw",
    database: 'employees_db'
});

connection.connect((err) => {
    if (err) {
        console.error('error!!!', err);
        return;
    }
    console.log('connection made!', connection.threadId);
});