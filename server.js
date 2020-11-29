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
    inquirer.prompt({
        name: "department",
        type: "input",
        message: "What is the new department you would like to add?",
    })
        .then(function (response) {
            var query = "INSERT INTO department (name) values (?)";
            connection.query(query, response.department, function (err, data) {
                if (err) throw err;
                console.log(`You have add this new departmetn: ${data.department}`)
            })
            viewDepartments()
        })
};

function addRole() {
    let query1 = `SELECT * FROM roles`
    connection.query(query1, (err, data) => {
        if (err) throw err


        inquirer.prompt([
            {
                name: "title",
                type: "input",
                message: "What is the title for the new role?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the salary for the new role?"

            },
            {
                name: "department_id",
                type: "input",
                message: "What department does this new role fall under?",

            }])
            .then(function (answer) {
                var query = "insert into roles values (?,?,?)";
                connection.query(query, [answer.title, answer.salary, answer.department_id], function (err) {
                    if (err) throw err;
                    console.log(`${answer.title} added as a new role`)
                    viewRoles()
                })

            });
    });
};


function addEmployee() {
    
        inquirer.prompt([
            {
                type: "input",
                name: "first_name",
                message: "Please enter employee first name"
            }, {
                type: "input",
                name: "last_name",
                message: "Please enter employee last name"
            }, {
                type: "list",
                name: "role",
                message: "Please select employee title",
                choices: results.map(roles => {
                    return { name: roles.title }
                })
            }])
            .then(response => {
                console.log(response);
                connection.query(query, 
                    "INSERT INTO employee (first_name, last_name, role_id) VALUES (?,?,?)",
                    [response.first_name, response.last_name, response.role],
                    function (err) {
                        if (err) throw err
                        console.table(`${response.first_name} ${response.last_name} added as a new employee`)
                        viewEmployees()
                    })
            })


}

function updateRole() {

}