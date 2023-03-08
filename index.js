<<<<<<< Updated upstream
const Employee = require("./lib/Employee");
=======
>>>>>>> Stashed changes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
<<<<<<< Updated upstream
=======
const path = require("path");
>>>>>>> Stashed changes
const fs = require("fs");
const render = require("./src/page-template.js");

// const path = require("path");
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");
// const { create } = require("domain");

<<<<<<< Updated upstream
// Ever employee will be asked these three primary questions. 
const askPrimaryQuest = async function (employeeType) {
  console.log(`Enter ${employeeType}'s Details`);
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

// For manager only, ask for office number. 
const managerInfo = async function () {
    // Initiate and identitfy object for type of employee.
  const objectName = {
    objectName: "Manager",
  };
  // Ask primary questions and await the reponse until asking the manager only question. 
  const primaryAnswers = await askPrimaryQuest(objectName.objectName);
  const managerAnswers = await inquirer.prompt([
    {
      name: "officeNum",
      type: "input",
      message: "Enter office number:",
    },
  ]);
  // Returns multiple objects, merged into one. 
  return { ...objectName, ...primaryAnswers, ...managerAnswers };
};

const engineerInfo = async function () {
  const objectName = {
    objectName: "Engineer",
  };
  const primaryAnswers = await askPrimaryQuest(objectName.objectName);
  const engineerAnswers = await inquirer.prompt([
    {
      name: "gitHub",
      type: "input",
      message: "Enter GitHub Account:",
    },
  ]);
  // returns two objects that been merged.
  return { ...objectName, ...primaryAnswers, ...engineerAnswers };
};

const internInfo = async function () {
  const objectName = {
    objectName: "Intern",
  };
  const primaryAnswers = await askPrimaryQuest(objectName.objectName);
  const managerAnswers = await inquirer.prompt([
    {
      name: "school",
      type: "input",
      message: "Enter name of School:",
    },
  ]);
  // returns two objects that been merged.
  return { ...objectName, ...primaryAnswers, ...managerAnswers };
};

const createAnInstance = async function (answers) {
// This creates an instance of each object using the corrosponding class

  let objectInstance;
  let additionalInfo;

  switch (answers.objectName) {
    case "Manager":
      objectInstance = Manager;
      additionalInfo = answers.officeNum;
      break;
    case "Engineer":
      objectInstance = Engineer;
      additionalInfo = answers.gitHub;
      break;
    case "Intern":
      objectInstance = Intern;
      additionalInfo = answers.school;
      break;
  }

  const anInstance = await new objectInstance(
    answers.name,
    answers.id,
    answers.email,
    additionalInfo
  );

  return anInstance;
};

const askOptions = async function () {
    // This asks user to select next action, create an engineer, intern or finish and render team. 
  return await inquirer.prompt([
    {
      name: "nextOption",
      type: "list",
      message: "Select next acitons: ",
      choices: ["Add an engineer", "Add an intern", "Finish building the team"],
    },
  ]);
};

=======
const render = require("./src/page-template.js");
const Employee = require("./lib/Employee");
>>>>>>> Stashed changes

const initiateQuestions = async function () {

    // Initiating variable to hold each instance of an employee.
  const thisTeam = [];
  let anInstance;
    // Ask manager questions, then create an instance of a mananger, then push instance to the thisTeam array. 
  const managersAnswers = await managerInfo();
  anInstance = await createAnInstance(managersAnswers);
  thisTeam.push(anInstance);

  while (true) {
    // Keep repeating askOptions func until ready to reader team. 
    const choiceSelected = await askOptions();
    switch (choiceSelected.nextOption) {
      case "Add an engineer":
            // Ask engineer questions, then create an instance of a engineer, then push instance to the thisTeam array. 
        const engineerAnswers = await engineerInfo();
        anInstance = await createAnInstance(engineerAnswers);
        thisTeam.push(anInstance);
        break;

      case "Add an intern":
             // Ask intern questions, then create an instance of a intern, then push instance to the thisTeam array. 
        const internAnswers = await internInfo();
        anInstance = await createAnInstance(internAnswers);
        thisTeam.push(anInstance);
        break;

      case "Finish building the team":
        // Return the array, complete with all employee objects.
        return thisTeam;
    }
  }
};

const start = async function () {
    //Start program, but wait team array has been updated before generating team. 
  let team;
  team = await initiateQuestions();
  console.log("team", team);
  // generate the HTML by calling the render(). render() is in page-template.js
  let generatedHTML = render(team);

  // write the html file. 
  fs.writeFile("index.html", generatedHTML, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
};

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

<<<<<<< Updated upstream
start();
=======
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
>>>>>>> Stashed changes


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
