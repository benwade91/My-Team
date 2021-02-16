// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'


class Employee {
    constructor(name, empId, email) {
        this.name = name;
        this.id = empId;
        this.email = email;
    }

    getName() {
        return `${this.name}`;
    }

    getId() {
        return `ID: ${this.id}`;
    }

    getEmail() {
        return `Email: <a href="mailto:${this.email}" class="card-link">${this.email}</a>`;
    }

    getRoll() {
        return `Employee`;
    }
}


module.exports = Employee;