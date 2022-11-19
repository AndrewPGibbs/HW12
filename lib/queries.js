const addNewDeptQuery = `INSERT INTO department (name) VALUES (?);`;

const departments = `SELECT * FROM department;`;

const addEmployee = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (?, ?, ?, ?);`;

const addNewRoleQuery = `INSERT INTO role (title, department_id, salary)
VALUES (?, ?, ?);`;

const viewEmployees ='SELECT * FROM employee'

const viewRoleQuery= 'SELECT * FROM role';








module.exports = {
    addNewDeptQuery, departments, addEmployee, addNewRoleQuery, viewEmployees, viewRoleQuery,
}