const addNewDeptQuery = `INSERT INTO department (name) VALUES (?);`;

const departments = `SELECT * FROM department;`;












module.exports = {
    addNewDeptQuery, departments
}