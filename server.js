const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
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
        .then(function (answer) {
            switch (answer.acton) {
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
    var query = "SELECT * from department";
        connection.query(query, function(err ,res) {
            console.log(`DEPARTMENT:`)
            res.forEach(department => {
                console.log(`ID: ${department.id} | Name : ${department.name}`)
            })
            start();
        });

}



function viewRoles() {
    var query = "SELECT * from roles";
        connection.query(query, function(err ,res) {
            console.log(`ROLES:`)
            res.forEach(role => {
                console.log(`ID: ${role.id} | Name : ${role.tile} | Salary: ${role.salary} | Department ID: ${role.department_id}`)
            })
            start();

});

}

function viewEmployees() {

}

function addDepartment() {


}

function addRole() {

}

function addEmployee() {

}

function updateRole() {

}