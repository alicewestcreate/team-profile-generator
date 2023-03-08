const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  setGitHub(gitHubUser) {
    this.github = gitHubUser;
  }

  getGithub() {
    return this.github;
  }
}

<<<<<<< Updated upstream
module.exports = Engineer;
=======
module.exports = Engineer
>>>>>>> Stashed changes
