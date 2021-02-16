const Engineer = require('../lib/Engineer.js');

test('creates a new employee', () => {
    const employee = new Engineer("Ben", 5, "ben@gmail.com", "benwade91");
    expect(employee.name).toBe("Ben");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("ben@gmail.com");
    expect(employee.gitHub).toBe("benwade91");
});

test('gets name of employee', () => {
    const employee = new Engineer("Ben", 5, "ben@gmail.com", "benwade91");
    expect(employee.getName()).toBe("Ben");
});

test('gets id of employee', () => {
    const employee = new Engineer("Ben", 5, "ben@gmail.com", "benwade91");
    expect(employee.getId()).toContain(employee.id);
});

test('gets email of employee', () => {
    const employee = new Engineer("Ben", 5, "ben@gmail.com", "benwade91");
    expect(employee.getEmail()).toBe("Email: <a href=\"mailto:ben@gmail.com\" class=\"card-link\">ben@gmail.com</a>");
});

test('gets employees gitHub if employee is engineer', ()=>{
    const employee = new Engineer("Ben", 5, "ben@gmail.com", "benwade91");
    expect(employee.getGithub()).toBe("github.com/" + employee.gitHub);
})