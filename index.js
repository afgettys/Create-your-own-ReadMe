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
    name: "userName",
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
    name:"license",
    message:"What license you like to use for this application?Answer none if none"
  },
  {
    type: "input",
    name:"contributors",
    message: "Where there other contributors for this application?"    
  }, 
];

function init() {
  inquirer.prompt(questions).then(answer) =>{
    fs.appendFileSync("README.md",("#" + answer.title)+ '\n',function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");    
  }
  
})


  var filename = data.name.toLowerCase().split(' ').join('') + ".json";

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), 









 [

];

function writeToFile(fileName, data) {
}



init();
