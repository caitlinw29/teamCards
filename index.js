const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

const questions = [
  {
      type: 'input',
      name: 'team',
      message: 'What is the name of your team?',
  },
  {
      type: 'input',
      name: 'manager',
      message: 'What is your name?',
  },
  {
      type: 'input',
      name: 'managerID',
      message: 'What is your ID?',
  },
  {
      type: 'input',
      name: 'managerEmail',
      message: 'What is your email?',
  },
  {
      type: 'input',
      name: 'managerOffice',
      message: 'What is your office number?',
  },
  // {
  //     type: 'input',
  //     name: 'test',
  //     message: 'What are the test instructions?',
  // },
  // {
  //     type: 'list',
  //     name: 'license',
  //     message: 'What is the license to use?',
  //     choices: ['Apache', 'Boost', 'MIT', 'IBM'],
  // },
  // {
  //     type: 'input',
  //     name: 'github',
  //     message: 'Enter your GitHub Username',
  // },
  // {
  //     type: 'input',
  //     name: 'email',
  //     message: 'Enter your email',
  // },
];

//Set up function to write answers in file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, (data), (err) =>
    err ? console.error(err) : console.log('index.html created!')
  );
}

//inquire the questions, then put answers in a writeToFile function aimed at the index.html
function init() {
  inquirer
      .prompt(questions)
      .then((data) => {
          //pass the data into the generateHTML function that we imported
          writeToFile("./dist/index.html", generateHTML({...data}));
      });
}

// Function call to initialize app
init();
