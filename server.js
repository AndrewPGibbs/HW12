const cTable = require("console.table");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const {
  mainMenu,
  addEmployeeInfo,
  addDeptInfo,
  addRole,
} = require("./lib/questions");
const { addNewDeptQuery, departments } = require("./lib/queries");

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
      
      case "Quit":
       console.log('Goodbye')
      process.kill(process.pid, 'SIGINT' )
        break;
    }
  });
}
start();


// inquirer
//   .prompt([
//     /* Pass your questions in here */
//     //list of options: view employes, view roles, etc

//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//     switch answers.<questionobjname>:
//     case "view employees":
//         viewEmployees();
//         break;

//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// function viewEmployees(){
//   const sql = `SELECT * FROM employee`;

//   db.query(sql, (err, result) => {
//   if (err) throw err;
//  console.table(result);
//   });
// }
