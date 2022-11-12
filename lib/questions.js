const mainMenu = [
    {
        name: 'menu',
        type: 'list',
        message:'Please choose one of the following options.',
        choices: ['']
    }
];

//function for adding employee information to db
function addEmployeeInfo( roles, managers) {
    return[
        {
            name: 'firstName',
            type: 'input',
            message: 'Please enter employee FIRST NAME',
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'Please enter employee LAST NAME',
        },
        {
            name: 'role',
            type: 'list',
            message: 'Please select employee ROLE',
            choices: roles,
        },
        {
            name: 'manager',
            type: 'list',
            message: 'Please select employee MANAGER',
            choices: managers,
        },
    ]
};

const addDeptInfo = [
    {
        name: 'name',
        type: 'input',
        message: 'Please type the name of the DEPARTMENT you wish to add',
    }
];


//add role function
function addRole() {
    return [
        {
            name: 'title',
            type: 'input',
            message: 'Please tell us the TITLE of this role',
        },
        {
            name: 'salary',
            type: 'input',
            message: 'Please type the SALARY of this role',
            validate: (name) => {
                var valid = +name
                return ((valid.toString() !== 'NaN') ? true : 'Please enter a valid SALARY')
            }
        },
        {
            name: 'deptId',
            type: 'list',
            message: 'What DEPARTMENT does this role belong to?',
            choices: departments
        },
        
    ];
};

//questions
module.exports = {
    addEmployeeInfo, mainMenu, addDeptInfo, addRole
}