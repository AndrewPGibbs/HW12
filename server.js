const db = require("./config/connection");

const inquirer = require("require")

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: '',
      database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
  );

inquirer
  .prompt([
    /* Pass your questions in here */
    //list of options: view employes, view roles, etc
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    switch answers.<questionobjname>:
    case "view employees":
        viewEmployees();
        break;

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  function viewEmployees(){
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, result) => {
    if (err) throw err;
   console.table(result);
    });
  }