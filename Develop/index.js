// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// link to page where README.md is printed
const generatePage = require("./utils/generateMarkdown.js");
const { type } = require("os");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your Github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project.",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your projects have?",
      choices: ["MIT", "GNU"],
    },
    {
      type: "input",
      name: "install",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this app?",
    },
    {
      type: "input",
      name: "contributors",
      message:
        "What does the user need to know about contributing to the repo?",
    },
  ]);
};
// function to write README file using file system
const writeFile = (data) => {
  fs.writeFile("README.md", data, (err) => {
    // if there is an error in the input
    if (err) {
      console.log(err);
      return;
      // when the README has been created
    } else {
      console.log("Your README has been successfully created!");
    }
  });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
