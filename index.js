const inquirer = require("inquirer");
const fs = require('fs');
const badge = generateMarkdown

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
inquirer.prompt(questions).then((answer) => {
fs.appendFileSync("README.md",("#" + answer.title)+ '\n',function(err) {
if (err) {
return console.log(err);
}
console.log("Success!");    
  }
)});



//The join() method returns the array as a string.

//The elements will be separated by a specified separator. The default separator is comma (,).
//given
//fs.writeFile(filename, JSON.stringify(data, null, '\t'), 

//The split() method separates an original string into an array of substrings, based on a separator string that you pass as input. The original string is not altered by split().
//given
//var filename = data.name.toLowerCase().split(' ').join('') + ".json";

//example

 // Turn the arrays into JSON strings so they can be written to files
 //const dogJSON = JSON.stringify(dogs, null, 2);
 //const catJSON = JSON.stringify(cats, null, 2);

 //fs.writeFile("dogs.json", dogJSON, function(err) {
   //if (err) {
     //throw err;
  // }

  // console.log("Successfully wrote to dogs.json file");
// });



//given
//function writeToFile(fileName, data) {}



init();}
