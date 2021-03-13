//dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

//establish connection
var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "rootpw",
        database: "employees_db"
    });

//test connection
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

// test mysql database is responding
//   connection.query('SELECT * FROM role', (err, rows) =>{
//       if (err) throw err;
//       console.log('Data received:' );
//       console.log(rows);
//   });

//view all departments
function viewAllDepartments(){
    connection.query('SELECT name FROM department', (err, row) => {
        if (err) throw err;
        console.log(row);
    })
};
viewAllDepartments();

//view all employees
function viewAllEmployees(){
    connection.query('SELECT e.first_name, e.last_name, r.title FROM employee AS e, role AS r WHERE e.id = r.id', (err, row) => {
        if (err) throw err;
        console.log(row);
    })
};
viewAllEmployees();

//view all roles
function viewAllRoles(){
    connection.query('SELECT title FROM role', (err, row) => {
        if (err) throw err;
        console.log(row);
    })
};
viewAllRoles();

//add departments
// function addDepartment() {
//     connection.query('')
// }

// * Add departments, roles, employees


// * Update employee roles

// Bonus points if you're able to:

// * Update employee managers

// * View employees by manager

// * Delete departments, roles, and employees

// * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

connection.end();