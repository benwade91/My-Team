const { every } = require("../../README-Generator/util/licences");

let page = [];

const employeeCard = function (employees) {
    for (i = 0; i < employees.length; i++) {
        if (employees[i].hasOwnProperty('officeId')) {
            page.push( `
        <div class="card m-3 col-3 shadow-lg" >
        <div class="card-body bg-primary">
          <h5 class="card-title text-white">${employees[i].name}</h5>
          <p class="card-text text-white">${employees[i].getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${employees[i].getId()}</li>
          <li class="list-group-item">${employees[i].getEmail()}</li>
          <li class="list-group-item">Office ID: ${employees[i].officeId}</li>
        </ul>
      </div>`)
        } else if (employees[i].hasOwnProperty('gitHub')) {
            page.push( `
      <div class="card m-3 col-3 shadow-lg" >
      <div class="card-body bg-primary">
        <h5 class="card-title text-white">${employees[i].name}</h5>
        <p class="card-text text-white">${employees[i].getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${employees[i].getId()}</li>
        <li class="list-group-item">${employees[i].getEmail()}</li>
        <li class="list-group-item">Github: <a href="https://github.com/${employees[i].gitHub}" class="card-link">github.com/${employees[i].gitHub}</a></li>
      </ul>
    </div>`)
        } else if (employees[i].hasOwnProperty('school')) {
            page.push( `
        <div class="card m-3 col-3 shadow-lg" >
        <div class="card-body bg-primary">
          <h5 class="card-title text-white">${employees[i].name}</h5>
          <p class="card-text text-white">${employees[i].getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${employees[i].getId()}</li>
          <li class="list-group-item">${employees[i].getEmail()}</li>
          <li class="list-group-item">School: ${employees[i].school}</li>
        </ul>
      </div>`)
        }
    }
    
     return page.join(' ');
};


module.exports = data => {
    return `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <title>My Team</title>
</head>
<body>
<div class="bg-danger">
    <h1 class="text-center text-white p-5">My Team</h1>
</div>
<div class="card-group justify-content-center">
  <div class="row justify-content-center">
${employeeCard(data)}
    </div>
    </div>
</body>
</html>
`;
};