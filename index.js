const inquirer = require("inquirer");
const fs = require('fs');
const badge = require('./generateMarkdown');

const questions =[
{
type: "input",
name: "title",
message: "Please give a title to this application:"
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
message:"License used for this application?Answer none if none"
},
{
type: "input",
name:"contributors",
message: "Contributors for this application:"    
}, 
];

function init() {
inquirer.prompt(questions).then((answer) => {

fs.appendFileSync("README.md", ("#" + answer.title + badge)+ 
'\n',function(err) {
if (err){
return console.log(err);
}
else {console.log("Success!")};    
  }
)},

fs.appendFileSync("README.md", ("This application was developed by: " + answer.userName + 
'\n') + '\n', function(err) { 
if (err) { 
console.log(err);
}
else {console.log("Success")}})

)};


//given
//function writeToFile(fileName, data) {}

// \t Only one section at a time is visible.
//The join() method returns the array as a string.
//The elements will be separated by a specified separator. The default separator is comma (,).
//The split() method separates an original string into an array of substrings, based on a separator string that you pass as input. The original string is not altered by split().
//fs.writeFile(filename, JSON.stringify(data, null, '\t'), 
//var filename = data.name.toLowerCase().split(' ').join('') + ".json";






init()

