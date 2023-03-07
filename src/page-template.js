
const {generateManager, generateEngineer, generateIntern} = require("./functions")

// creates the team
const generateTeam = team => {
    console.log("inside",team);
    let html = "";

    team.forEach(employee => {
        console.log(employee)
        let role = employee.getRole()
        switch (role) {
            case "Manager":
                html += generateManager(employee)
                break;
            case "Engineer":
                html += generateEngineer(employee)
                break;
            case "Intern":
                html += generateIntern(employee)
                break
        }
    });

    return html;

}

const generateHTML = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;

}


// exports function to generate entire page
module.exports = generateHTML