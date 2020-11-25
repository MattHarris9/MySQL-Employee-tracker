const mysql = require ('mysql');
const inquirer = require ('inquirer');

const connection = mysql.createConnection({
    host : "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "employee_eb"
});

connection.connection(function(err) {
    if (err) throw(err);
    start();
});

function start() {
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update employee role",
            "Exit"
        ]
    })
}