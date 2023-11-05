// NPM packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    'Project Title?', 
    'Project Description?', 
    'Installation instructions?', 
    'Usage information?', 
    'Choose a License:', 
    'Contribution Guidelines?', 
    'Tests?',
    'What is your GitHub username?',
    'What is your email address?'
];

// List of licenses from the GitHub drop down list when you create a new repository
const licenses = [
    'None',
    'Apache 2.0',
    'GNU GPL v3.0',
    'MIT',
    'BSD 2 Clause',
    'BSD 3 Clause',
    'BSL 1.0',
    'CC0 v1.0 Universal',
    'EPL 2.0',
    'GNU Affero GPL v3.0',
    'GNU GPL v2.0',
    'GNU LGPL v2.1',
    'MPL 2.0',
    'The Unlicense'
];

// Creates a README file in the output directory
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('README created in output directory!');
    });
}

// Function declaration to initialize app
function init() {
    inquirer.prompt([
        {
            message: questions[0],
            name: 'title'
        },
        {
            message: questions[1],
            name: 'description'
        },
        {
            message: questions[2],
            name: 'installation'
        },
        {
            message: questions[3],
            name: 'usage'
        },
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: licenses,
        },
        {
            message: questions[5],
            name: 'contributing'
        },
        {
            message: questions[6],
            name: 'tests'
        },
        {
            message: questions[7],
            name: 'github'
        },
        {
            message: questions[8],
            name: 'email'
        }
    ]).then((response) => {
        writeToFile('./output/README.md', generateMarkdown(response));
    });
}

// Function call to initialize app
init();
