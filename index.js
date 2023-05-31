// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your Project title?",
        name: "title",
        default: "Readme Generator"
    },
    {
        type: "input",
        message: "What is your repo called?",
        name: "repo",
        default: "ReadmeGenerator"
    },
    {
        type: "input",
        message: "Please describe your project?",
        name: "desc",
        default: "This application will generate a README.md file for your current project."
    },
    {
        type: "input",
        message: "What steps are required to install your project?",
        name: "install",
        default: "Step 1: Run npm install and Step 2: Run node index.js"
    },
    {
        type: "input",
        message: "Please write instructions for using your project.",
        name: "usage",
        default: "usage"
    },   
    {
        type: "input",
        message: "Enter GitHub usernames of the contributor if any.",
        name: "contributors"
    },
    {
        type: "list",
        message: "Choose a license to use.",
        choices: [
            "Apache",
            "IBM",
            "MIT",
            "Perl"
        ],
        name: "license"
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, {}, () => {
        console.log("Creating " + fileName)
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(returnValues =>{
        console.log('Creating README File');
        setTimeout(writeFunction, 7000);
        function writeFunction(){
            writeToFile('./ReadMe_File/README.md', generateMarkdown(returnValues));
        }

    });
    
};

// Function call to initialize app
init();
