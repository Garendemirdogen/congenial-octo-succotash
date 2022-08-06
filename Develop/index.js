// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// link to page where README.md is printed
const generatePage = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your Github username?",
    },
  ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
