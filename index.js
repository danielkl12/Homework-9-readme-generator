const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


const writeFileAsync = util.promisify(fs.writeFile);

//const promptUser = () => {
    //return inquirer.prompt([

    inquirer
        .prompt([
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
        choices: "",
      },
    ]);
//};

const provideHTML = (answers) =>
    'DOCTYPE html'
'html lang="en">'
'<head>'
    '<meta charset="UTF-8">'
    '<meta http-equiv="X-UA-Compatible" content="ie=edge">'
    '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">'
    '<title>Readme Generator</title>'


'</head>'


