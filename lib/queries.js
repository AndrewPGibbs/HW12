const addNewDeptQuery = `INSERT INTO department (name) VALUES (?);`;

const departments = `SELECT * FROM department;`;

const addEmployee = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (?, ?, ?, ?);`;

const addNewRoleQuery = `INSERT INTO role (title, department_id, salary)
VALUES (?, ?, ?);`;

const viewEmployees = `WITH SQL_Employee as (
    SELECT first_name, last_name, role_id, manager_id
    FROM employee WHERE manager_id is NULL UNION ALL 
    SELECT * FROM SQL_Employee
)`;
const viewRoleQuery= `SELECT role.id, role.title, department.name AS DEPT, role.salary
FROM role
JOIN department ON role.department_id = department.id;`;








module.exports = {
    addNewDeptQuery, departments, addEmployee, addNewRoleQuery, viewEmployees, viewRoleQuery
}