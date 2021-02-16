// school

// getSchool()

// getRole() // Overridden to return 'Intern'

const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, empId, email, school){
        super(name, empId, email);
        this.school = school;
    }
    getSchool() {
        return `School: ${this.school}`
    }
    getRole() {
        return `Intern`
    }
}
module.exports = Intern;