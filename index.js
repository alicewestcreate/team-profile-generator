const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");



// TODO: Write Code to gather information about the development team members, and render the HTML file.

const Employee = require("./lib/Employee");
const { create } = require("domain");

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
    const primaryAnswers = await askPrimaryQuest(manager);
    const managerAnswers = await inquirer.prompt([
        {
        name: "officeNum",
        type: "input",
        message: "Enter office number:",
        },
    ]);

    return {...primaryAnswers, ...managerAnswers}


};

const createObject = async function (answers) {
    const managerObj = await new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNum
    );
    console.log(managerObj);
}


const initiateQuestions = async function() {
    const managersAnswers = await managerInfo()
    createObject(managersAnswers)
    console.log(managersAnswers);
}

initiateQuestions()










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