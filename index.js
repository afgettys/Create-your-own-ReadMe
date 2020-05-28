const inquirer = require("inquirer");
const fs = require('fs');

const questions =[
{
    type: "input",
    name: "title",
    message: "Please give a title to this application"
  },
  {
    type: "input",
    name: "username",
    message: "Please inform Github user name:"
  },
  {
    type: "input",
    name:"description",
    message: "Please give a brief description of the application:"    
  }, 
  {
    type: "input",
    name:"instalation",
    message: "Please provide instructions of instalation:"    
  }, 
  {
    type: "input",
    name:"usage",
    message: "How is the usage of this application?"    
  },  
  {
    type: "input",
    name:"usage",
    message: "How is the usage of this application?"    
  }, 
];

//).then(data) => {

  var filename = data.name.toLowerCase().split(' ').join('') + ".json";

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
};








 [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
