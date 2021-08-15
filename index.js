const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the project title?",
            name: "name"
        },
        {
            type: "input",
            message: "Description of the project.",
            name: "description"
        },
        {
            type: "input",
            message: "Installation instructions",
            name: "installation"  
        },
        {
            type: "input",
            message: "Provide instructions and examples for use.",
            name: "usage"
        },      
        {
            type: "input",
            message: "Write guidlines for contributing.",
            name: "contributing"
        },
        {
            type: "tests",
            message: "Provide how to run tests for your application.",
            name: "tests"
        },
        {
            type: "list",
            message: "Under which license is this application covered?",
            name: "license",
            choices: [
             "MIT",
             "Boost",
             "Mozilla"
                ]
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your Github username?",
            name: "github"  
        }   
    ])
    
    .then((input) => {
        fs.writeFile('README.md', generateMarkdown(input), (err) =>
        err ? console.error(err) : console.log('README created!'))
    
    })