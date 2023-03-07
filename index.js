const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");


const Employee = require("./lib/Employee");
const { create } = require("domain");



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
        
        const anInstance = await new objectInstance(
                primaryName,
                primaryId,
                primaryEmail,
                additionalInfo,
            )
            
            return anInstance
        }


    const askOptions = async function(){
        return await inquirer.prompt([
            {
            name: "nextOption",
            type: "list",
            message: "Select next acitons: ",
            choices: ["Add an engineer", "Add an intern", "Finish building the team",]
            },
        ])
    }


    const initiateQuestions = async function() {
        const thisTeam = []
        let anInstance;
        const managersAnswers = await managerInfo()
        anInstance = await createAnInstance(managersAnswers)
        thisTeam.push(anInstance);

        while (true) {
            const choiceSelected = await askOptions()
            switch (choiceSelected.nextOption) {
                case "Add an engineer":
                    const engineerAnswers = await engineerInfo()
                    anInstance = await createAnInstance(engineerAnswers)
                    thisTeam.push(anInstance);
                    break
                    
                case "Add an intern":
                    const internAnswers = await internInfo()
                    anInstance = await createAnInstance(internAnswers)
                    thisTeam.push(anInstance);
                    break

                case "Finish building the team":
    
                    return thisTeam
                }
        }
    }


const start = async function() {
    let team;
    team = await initiateQuestions()
    console.log("team", team);
    let generatedHTML = render(team)



    fs.writeFile('index.html', generatedHTML, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

}

start()

//  module.exports = team
















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