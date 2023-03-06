const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
<<<<<<< Updated upstream


// TODO: Write Code to gather information about the development team members, and render the HTML file.

=======
const Employee = require("./lib/Employee");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// const initiateQuestions = function () {
//   inquirer
//     .prompt([
//       {
//         name: "start_program",
//         type: "confirm",
//         message: "Press confirm to start building a team:",
//       },
//     ])
//     .then((answers) => {
//       console.log(answers);
//       if (answers.start_program) {
//         initiateManager();
//       } else {
//         console.log("false");
//       }
//     });
// };

const askPrimaryQuest = async function (employeeType) {

    console.log(`Enter ${employeeType}'s Details`)
    return await inquirer.prompt([
        {
        name: "name",
        type: "input",
        message: "Enter name:",
        },
        {
        name: "id",
        type: "input",
        message: "Enter ID:",
        },
        {
        name: "email",
        type: "input",
        message: "Enter email:",
        },
    ]);
};


const managerInfo = async function () {
    const manager = "manager"
    const primaryAnswer = await askPrimaryQuest(manager);
    var answers = await inquirer.prompt([
        {
        name: "officeNum",
        type: "input",
        message: "Enter office number:",
        },
    ]);

    const managerObj = new Manager(
        primaryAnswer.name,
        primaryAnswer.id,
        primaryAnswer.email,
        answers.officeNum
    );
    console.log(managerObj);
  nextAction();
};

const nextAction = function () {};
managerInfo()
// initiateQuestions();


// Prompt:
// Create Team Profile
// Confirm Y/N
// Enter Managers Details
// Name, ID, Email & Office Number

// Would you like to build a team:
// Yes or No

// Select one of the follow:
// Add an Engineer
// Add an Intern
// Finish building the team
>>>>>>> Stashed changes
