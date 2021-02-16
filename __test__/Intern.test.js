const Intern = require("../lib/Intern.js");

test('creates a new employee', () => {
    const employee = new Intern("Ben", 5, "ben@gmail.com", "Stanford");
    expect(employee.name).toBe("Ben");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("ben@gmail.com");
    expect(employee.school).toBe("Stanford");
});

test('gets name of employee', () => {
    const employee = new Intern("Ben", 5, "ben@gmail.com", "Stanford");
    expect(employee.getName()).toBe("Ben");
});

test('gets id of employee', () => {
    const employee = new Intern("Ben", 5, "ben@gmail.com", "Stanford");
    expect(employee.getId()).toContain(employee.id);
});

test('gets email of employee', () => {
    const employee = new Intern("Ben", 5, "ben@gmail.com", "Stanford");
    expect(employee.getEmail()).toBe("Email: <a href=\"mailto:ben@gmail.com\" class=\"card-link\">ben@gmail.com</a>");
});

test('gets school of intern', () => {
    const employee = new Intern("Ben", 5, "ben@gmail.com", "Stanford");
    expect(employee.getSchool()).toBe("School: "+ employee.school);
})