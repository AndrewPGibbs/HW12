const mainMenu = [
    {
        name: 'menu',
        type: 'list',
        message:'Please choose one of the following options.',
        choices: ['']
    }
]

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
}
// first/last name, role, manager


//const for dept question-name

//questions