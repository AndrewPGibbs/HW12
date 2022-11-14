const cTable = require("console.table");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const {
  mainMenu,
  addEmployeeInfo,
  addDeptInfo,
  addRole,
} = require("./lib/questions");
const { addNewDeptQuery, departments, addEmployee } = require("./lib/queries");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "CodingPassword44",
    database: "employee_db",
  },
  console.log(`Connected to the employee database.`)
);

function newDept() {
  inquirer.prompt(addDeptInfo).then((res) => {
    db.query(addNewDeptQuery, res.name, function (err, results) {
      console.log(`\n New DEPARTMENT added as ${res.name} \n`);
      start();
    });
  });
}

function newRole1() {
  let deptList = [];
  db.query("SELECT name FROM department", (err, res) => {
    for (i = 0; i < res.length; i++) {
      deptList.push(res[i].name);
    }
    newRole2(deptList);
  });
}

function newRole2(deptList) {
  inquirer
  .prompt(addRole(deptList))
  .then((res) => {
    db.query(`SELECT id FROM department WHERE name = ?`, res.role, function (err, results) {
      newrole3(res, results[0].id)
        })
      });
    }

    
// first function for adding employees
function newEmployee1() {
  let roleList = [];
  let managerList = [];
  db.query("SELECT title FROM role", (err, res) => {
    for (i = 0; i < res.length; i++) {
      roleList.push(res[i].title);
    }
    db.query(`SELECT CONCAT(first_name, ' ', last_name) AS manager FROM employee WHERE manager_id IS NULL`, (err, res) => {
        for (i = 0; i < res.length; i++) {
          managerList.push(res[i].manager);
        }
        managerList.push('null');
        newEmployee2(roleList, managerList);
      }
    );
  });
}

// second function for adding employees
function newEmployee2(roleList, managerList) {
inquirer
.prompt(addEmployeeInfo(roleList, managerList))
.then((res) => {
  db.query(`SELECT id FROM role WHERE title = ?`, res.role, function (err, results) {
    let role_id = results[0].id;
    let manager_id = res.manager;
    if (manager_id !== 'null') {
      db.query(`SELECT id FROM employee WHERE CONCAT(first_name, ' ', last_name) = ?`, res.manager, function (err, results) {
        manager_id = results[0].id;
        newEmployee3(res , role_id, manager_id);
      })
    }
    else {
      manager_id = null;
      newEmployee3(res, role_id, manager_id);
    }
  })
})
}
// third function for adding employees
function newEmployee3(res, role_id, manager_id) {
  db.query(addEmployee, [res.firstName, res.lastName, role_id, manager_id], function (err, results) {
    console.log(`\n Employee ${res.firstName} added`)
    start();
  })
}
function start() {
  inquirer.prompt(mainMenu).then((res) => {
    switch (res.menu) {
      case "Add new DEPARTMENT":
        newDept();
        break;

      case "View all DEPARTMENTS":
        db.query(departments, function (err, res) {
          console.log("\n");
          console.table(res);
          start();
        });
        break;
      case "Add new EMPLOYEE":
        newEmployee1();
        break;

      case "Quit":
        console.log("Goodbye");
        process.kill(process.pid, "SIGINT");
        break;
    }
  });
}
start();

