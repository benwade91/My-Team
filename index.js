const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/page-template');

let employees = [];


const addMore = function () {
    inquirer.prompt([{
        type: 'confirm',
        name: 'addEmp',
        message: 'Would you like to add another employee?',
        default: false
    }])
    .then(data => {
        if (data.addEmp) {
            employeeQues()
        } else {
            fs.writeFile('./dist/index.html', generatePage(employees), err => {
                if (err) {
                     reject(err);
                     return;
                 }
             })
             console.log('New page created!');
        }
    })
}

const managerQues = function () {
    inquirer.prompt([{
        type: 'text',
        name: 'name',
        message: 'What is the name of your team manager?'
    }, {
        type: 'text',
        name: 'empId',
        message: 'What is the employee ID number of your team manager?'
    }, {
        type: 'text',
        name: 'email',
        message: 'What is the email address of your team manager?'
    }, {
        type: 'text',
        name: 'officeId',
        message: 'What is the office number of your team manager?'
    }]).then(data => {
        employees.push(new Manager(data.name, data.empId, data.email, data.officeId))
        addMore();
    })
}

const employeeQues = function () {
    inquirer.prompt([{
            type: 'list',
            name: 'role',
            message: 'Is the employee an intern or an engineer?',
            choices: ['intern', 'engineer']
        }, {
            type: 'text',
            name: 'name',
            message: 'What is the name of the employee?'
        }, {
            type: 'text',
            name: 'empId',
            message: 'What is the employee ID number of your employee?'
        }, {
            type: 'text',
            name: 'email',
            message: 'What is the email address of your employee?'
        }, {
            type: 'text',
            name: 'school',
            message: 'What school did your intern attend?',
            when: ({
                role
            }) => {
                if (role === 'intern') {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            type: 'text',
            name: 'gitHub',
            message: 'What is your engineers GitHub profile name?',
            when: ({
                role
            }) => {
                if (role === 'engineer') {
                    return true;
                } else {
                    return false;
                }
            }
        }])
        .then(data => {
            if (data.role === 'intern') {
                employees.push(new Intern(data.name, data.empId, data.email, data.school))
            } else {
                employees.push(new Engineer(data.name, data.empId, data.email, data.gitHub))
            }
            addMore();
        })
}

managerQues()


// start()
//     .then(({
//         name,
//         empId,
//         email,
//         officeId,
//         addEmp
//     }) => {
//         employees.push(new Manager(name, empId, email, officeId));
//         if (addEmp) {
//             addEmployee()
//                 .then(({
//                     role,
//                     name,
//                     empId,
//                     email,
//                     school,
//                     gitHub,
//                     addEmp
//                 }) => {
//                     if (role === 'intern') {
//                         employees.push(new Intern(name, empId, email, school));
//                         console.log(employees);
//                     } else if (role === 'engineer') {
//                         employees.push(new Engineer(name, empId, email, gitHub));
//                         console.log(employees);
//                     }
//                     if (addEmp) {
//                         addEmployee();
//                     } else {
//                         return generatePage(employees)
//                             .then(readmeContent => {
//                                 return fs.writeFile('./dist/README.md', readmeContent, err => {
//                                     if (err) {
//                                         reject(err);
//                                         return;
//                                     }
//                                 })
//                             })
//                             .catch(err => {
//                                 console.log(err);
//                             });
//                     };
//                 })
//         } else {
//             return generatePage(employees)
//                 .then(readmeContent => {
//                     return fs.writeFile('./dist/README.md', readmeContent, err => {
//                         if (err) {
//                             reject(err);
//                             return;
//                         }
//                     })
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 });
//         };
//     })