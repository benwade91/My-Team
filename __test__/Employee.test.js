const Employee = require('../lib/Employee.js');

test('creates a new employee', () => {
    const employee = new Employee("Ben", 5, "ben@gmail.com");
    expect(employee.name).toBe("Ben");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("ben@gmail.com");
});

test('gets name of employee', () => {
    const employee = new Employee("Ben", 5, "ben@gmail.com");
    expect(employee.getName()).toBe("Ben");
});

test('gets id of employee', () => {
    const employee = new Employee("Ben", 5, "ben@gmail.com");
    expect(employee.getId()).toContain(employee.id);
});

test('gets email of employee', () => {
    const employee = new Employee("Ben", 5, "ben@gmail.com");
    expect(employee.getEmail()).toBe("Email: <a href=\"mailto:ben@gmail.com\" class=\"card-link\">ben@gmail.com</a>");
});