// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'
newIdNum = 1;

class Employee {
    constructor(name, email) {
        this.name = name;
        this.id = newIdNum;
        newIdNum++;
        this.email = email;
    }

    getName() {
        return `The employee's name is ${this.name}.`;
    }

    getId() {
        return `The employee's id is ${this.id}.`;
    }

    getEmail() {
        return `The employee's email is ${this.email}.`;
    }
}

console.log(new Employee("ben", "bennnnn@gamil.com").getName());

module.exports = Employee;