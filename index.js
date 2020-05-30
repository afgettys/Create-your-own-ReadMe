const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const questions = [
  {
    type: "input",
    name: "title",
    message: "Please give a title to this application:"
  },
  {
    type: "input",
    name: "projectName",
    message: "Please inform github project name:"
  },
  {
    type: "input",
    name: "userName",
    message: "Please inform Github user name:"
  },
  {
    type: "input",
    name: "description",
    message: "Please give a brief description of the application:"
  },
  {
    type: "input",
    name: "instalation",
    message: "Please provide instructions of instalation:"
  },
  {
    type: "input",
    name: "usage",
    message: "How is the usage of this application?"
  },
  {
    type: "input",
    name: "license",
    message: "License used for this application?Answer none if none."
  },
  {
    type: "input",
    name: "contributors",
    message: "Contributors for this application:"
  },
];

function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response)
    fs.writeFileSync("README.md", generateMarkdown(response))
  })
};

init()

