const addNewDeptQuery = `INSERT INTO department (name) VALUES (?);`;

const departments = `SELECT * FROM department;`;

const addEmployee = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (?, ?, ?, ?);`;












module.exports = {
    addNewDeptQuery, departments, addEmployee
}