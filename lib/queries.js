const addNewDeptQuery = `INSERT INTO department (name) VALUES (?);`;

const departments = `SELECT * FROM department;`;

const addEmployee = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (?, ?, ?, ?);`;

const addNewRoleQuery = `INSERT INTO role (title, department_id, salary)
VALUES (?, ?, ?);`;

const viewEmployees ='SELECT * FROM employee'

const viewRoleQuery= 'SELECT * FROM role';

const titleQuery = 'SELECT title FROM ROLE';

const empNameFormat = `SELECT CONCAT(first_name, ' ', last_name) as employee FROM employee`;

const queryId = `select id from role where title = ?`
 
const updateConst = `UPDATE employee SET role_id = ? WHERE concat(first_name, ' ', last_name) = ?`





module.exports = {
    addNewDeptQuery, departments, updateConst,  queryId, addEmployee, addNewRoleQuery, empNameFormat, viewEmployees, viewRoleQuery, titleQuery
}