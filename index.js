// array of questions for user
const questions = [
        {
        type: "input",
        name:"first",
        message: "What's the title of this project?",
        },
        {
        type: "input",
        name:"second",
        message: "What is this app for?",
        },
        {
        type: "input",
        name:"third",
        message: "How do you use this app?",
        },
        {
        type: "input",
        name:"fourth",
        message: "How is this app installed?",
        },
        {
        type: "input",
        name:"fifth",
        message: "How can people contribute?",
        },
        {
        type: "input",
        name:"sixth",
        message: "What is your email?",
        },
        {
        type: "input",
        name:"seventh ",
        message: "Please provide a link for a screenshot of your project",
        }
];

const fs = require('fs');
const inquirer = require('inquirer');
// function to write README file
function writeFile(response){
fs.writeFile("README.md", 
`# ${response.first}

${response.second}

## Installation

${response.fourth}

## Usage

${response.third}

## Contributing
${response.fifth}


## Contact me
Contact me with questions or suggestions at ${response.sixth} or message me on github!

## Application Media
![]("${response.seventh}")
`, 
(err)=> err ? console.error(err) : console.log("Successful generation")) 
};
// function to initialize program
function init() {
inquirer
.prompt(questions)
.then(response => {
    writeFile(response)
})
};

// function call to initialize program
init();
