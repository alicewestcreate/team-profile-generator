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
    const objectName = {
        objectName : "Manager"
    }
    const primaryAnswers = await askPrimaryQuest(objectName.objectName);
    const managerAnswers = await inquirer.prompt([
        {
        name: "officeNum",
        type: "input",
        message: "Enter office number:",
        },
    ]);
    // returns two objects that been merged.
    return {...objectName, ...primaryAnswers, ...managerAnswers}

};

const engineerInfo = async function () {
    const objectName = {
        objectName : "Engineer"
    }
    const primaryAnswers = await askPrimaryQuest(objectName.objectName);
    const engineerAnswers = await inquirer.prompt([
        {
        name: "gitHub",
        type: "input",
        message: "Enter GitHub Account:",
        },
    ]);
    // returns two objects that been merged.
    return {...objectName, ...primaryAnswers, ...engineerAnswers}
}

const internInfo = async function () {
    const objectName = {
        objectName : "Intern"
    }
    const primaryAnswers = await askPrimaryQuest(objectName.objectName);
    const managerAnswers = await inquirer.prompt([
        {
        name: "school",
        type: "input",
        message: "Enter name of School:",
        },
    ]);
    // returns two objects that been merged.
    return {...objectName, ...primaryAnswers, ...managerAnswers}
}


const createAnInstance = async function (answers) {
    const objectTypes = [Manager, Engineer, Intern]

    let objectType = answers.objectName
    let objectInstance;
    const primaryName = answers.name
    const primaryId = answers.id
    const primaryEmail = answers.email
    let additionalInfo;
 
    switch (objectType) {
        case "Manager":
            objectInstance = objectTypes[0];
            additionalInfo = answers.officeNum;
            break
        case "Engineer":
            objectInstance = objectTypes[1];
            additionalInfo = answers.gitHub;
            break
        case "Intern":
            objectInstance = objectTypes[2]
            additionalInfo = answers.school;
            break
    } 

    return await new objectInstance(
            primaryName,
            primaryId,
            primaryEmail,
            additionalInfo,
        )


    }


const initiateQuestions = async function() {
    
    const thisTeam = []
    // const managersAnswers = await managerInfo()
    // const anInstance = await createAnInstance(managersAnswers)
    // const engineerAnswers = await engineerInfo()
   // const anInstance = await createAnInstance(engineerAnswers)
     // const internAnswers = await internInfo()
    // createAnInstance(internAnswers)
 
    // generateCard(anInstance)
    for (let index = 0; index < 2; index++) {
        const engineerAnswers = await engineerInfo()
        const anInstance = await createAnInstance(engineerAnswers)
        thisTeam.push(anInstance)   
    }
    return thisTeam

    
}


async function start() {
    const team = await initiateQuestions()
    console.log(team);
}





 const team = start()

//  console.log(team);
 
















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