//Functions: 

module.exports = team => {}

//team is pulled through to the page template. 
// program then FILTERS through the team object or array,
// Calling the coorsponding function
// And mapping the return to a new variable, 
// which is then pushed to the HTML array. 
// Once all team has been filter, mapped and pushed into the html array 
// it returns as string 


${generateTeam(team)}

//then generates 

generateTeam 
const generateManager = manager => {
    return `
    ${manager.getName()}
    ${manager.getRole()}
    ${manager.getId()}
    ${manager.getEmail()}
    ${manager.getOfficeNumber()}
    `
    
}
const generateEngineer = engineer => {
    return `
    ${engineer.getName()}
    ${engineer.getRole()}
    ${engineer.getId()}
    ${engineer.getEmail()}
    ------
    ${engineer.getGithub()}
    `
}

const generateIntern = intern => {
    return `
    ${intern.getName()}
    ${intern.getRole()}
    ${intern.getId()}
    ${intern.getEmail()}
    -----
    ${intern.getSchool()}
    `
}


