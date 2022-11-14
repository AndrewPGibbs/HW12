const mainMenu = [
    {
        name: 'menu',
        type: 'list',
        message:'Please choose one of the following options.',
        choices: ['Add new DEPARTMENT', 'View all DEPARTMENTS', 'Add new EMPLOYEE', 'Add new ROLE', 'Quit', ]
    }
];

//function for adding employee information to db
function addEmployeeInfo( roleList, managerList) {
    return [
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
            choices: roleList,
        },
        {
            name: 'manager',
            type: 'list',
            message: 'Please select employee MANAGER',
            choices: managerList,
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
function addRole(deptList) {
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
            name: 'dept_id',
            type: 'list',
            message: 'What DEPARTMENT does this role belong to?',
            choices: deptList
        },
        
    ];
};

//questions
module.exports = {
    addEmployeeInfo, mainMenu, addDeptInfo, addRole
}