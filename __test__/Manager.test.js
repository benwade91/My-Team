const Manager = require("../lib/Manager.js");

test('creates a new employee', () => {
    const employee = new Manager("Ben", 5, "ben@gmail.com", 9999);
    expect(employee.name).toBe("Ben");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("ben@gmail.com");
    expect(employee.officeId).toBe(9999);
});

test('gets name of employee', () => {
    const employee = new Manager("Ben", 5, "ben@gmail.com", 9999);
    expect(employee.getName()).toBe("Ben");
});

test('gets id of employee', () => {
    const employee = new Manager("Ben", 5, "ben@gmail.com", 9999);
    expect(employee.getId()).toContain(employee.id);
});

test('gets email of employee', () => {
    const employee = new Manager("Ben", 5, "ben@gmail.com", 9999);
    expect(employee.getEmail()).toBe("Email: <a href=\"mailto:ben@gmail.com\" class=\"card-link\">ben@gmail.com</a>");
});

test('gets school of intern', () => {
    const employee = new Manager("Ben", 5, "ben@gmail.com", 9999);
    expect(employee.getOfficeId()).toBe(employee.officeId.toString());
})