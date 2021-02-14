const Employee = require('../lib/Employee.js');

test('creates a new employee', () => {
    const employee = new Employee("Ben", "ben@gmail.com");
    expect(employee.name).toBe("Ben");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("ben@gmail.com");
});

test('gets name of employee', () => {
    const employee = new Employee("Ben", "ben@gmail.com");
    expect(employee.getName()).toBe("The employee's name is Ben.");
});

test('gets id of employee', () => {
    const employee = new Employee("Ben", "ben@gmail.com");
    expect(employee.getId()).toContain(employee.id);
});

test('gets email of employee', () => {
    const employee = new Employee("Ben", "ben@gmail.com");
    expect(employee.getEmail()).toBe("The employee's email is ben@gmail.com.");
});