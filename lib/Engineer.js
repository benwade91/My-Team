// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, empId, email, gitHub){
        super(name, empId, email);
        this.gitHub = gitHub;
    }
    getGithub() {
        return `github.com/${this.gitHub}`
    }
    getRole() {
        return `Engineer`
    }
}
module.exports = Engineer;