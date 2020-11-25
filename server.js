const mysql = require('mysql');
const inquirer = require('inquirer');
const mytable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connectd as id" + connection.threadId);
    start();
});

function start() {
    inquirer
        .prompt({
            name: "start",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update employee role"
            ]
        })
        .then(function (response) {
            switch (response.start) {
                case "View all departments":
                    viewDepartments();
                    break;

                case "View all roles":
                    viewRoles();
                    break;

                case "View all employees":
                    viewEmployees();
                    break;

                case "Add a department":
                    addDepartment();
                    break;

                case "Add a role":
                    addRole();
                    break;

                case "Add a employee":
                    addEmployee();
                    break;
                
                case "Update employee role":
                    updateRole();
                    break;


            }



        });
}

function viewDepartments() {
      var query = `SELECT * FROM department`;
      connection.query(query, (err, data) => {
        if (err) throw err;
        console.table(data);
        start();
      })
};



function viewRoles() {
    var query = `SELECT * FROM roles`;
      connection.query(query, (err, data) => {
        if (err) throw err;
        console.table(data);
        start();
      })
};

function viewEmployees() {
    var query = `SELECT * FROM employee`;
      connection.query(query, (err, data) => {
        if (err) throw err;
        console.table(data);
        start();
      })

}

function addDepartment() {


}

function addRole() {

}

function addEmployee() {

}

function updateRole() {

}