// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
import Engineer as Engineer from "./lib/Engineer.js";
import { Manager } from "./lib/Manager.js";
import { Intern } from "./lib/Intern.js";
import inquirer from "inquirer";
// const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./src/page-template.js");
import { Employee } from "../lib/Employee";
// const Employee = require("./lib/Employee");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


const emp = new Employee("bill", 32, "test@test");

console.log(emp);

