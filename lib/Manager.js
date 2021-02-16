const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, empId, email, officeId){
        super(name, empId, email);
        this.officeId = officeId;
    }
    getRole() {
        return `Manager`
    }
    getOfficeId(){
        return `${this.officeId}`
    }
}
module.exports = Manager;