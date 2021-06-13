const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const readMeGen = require('./utils/readMeGen');

const questions =[
    
      {
        type: 'input',
        name: 'title',
        message: 'Please provide project title.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
      },
      {
        type: 'input',
        name: 'use',
        message: 'Please provide usage instruction.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Gibhub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'How do people contribute to your project?',
      },
      {
        type: 'input',
        name: 'licenses',
        message: 'What licenses do you have for this repository?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
    ];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};

function init(){
    inquirer.prompt(questions).then((inquirerResponse) => {
        console.log("Complete!");
        writeToFile("README.md", readMeGen({...inquirerResponse}));
    });
}

init();
   