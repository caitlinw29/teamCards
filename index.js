const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamName = [
  {
      type: 'input',
      name: 'team',
      message: 'What is the name of your team?',
  },
];
//   {
//       type: 'input',
//       name: 'manager',
//       message: 'What is your name?',
//   },
//   {
//       type: 'input',
//       name: 'managerID',
//       message: 'What is your ID?',
//   },
//   {
//       type: 'input',
//       name: 'managerEmail',
//       message: 'What is your email?',
//   },
//   {
//       type: 'input',
//       name: 'managerOffice',
//       message: 'What is your office number?',
//   },
// ];

// const menu = [
//   {
//     type: 'list',
//     name: 'choiceMenu',
//     choices: ["Add an engineer", "Add an intern", "I'm finished!"],
//     message: 'Who would you like to add to the team?',
// },
// {
//   type: "input",
//   name: "engineerName",
//   message: "What is this engineer's name?",
//   when: (answers) => answers.choiceMenu === "Add an engineer",
// },
// {
//   type: "input",
//   name: "engineerName",
//   message: "What is this engineer's name?",
//   when: (answers) => answers.choiceMenu === "Add an intern",
// },
// ];

//Set up function to write answers in file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, (data), (err) =>
    err ? console.error(err) : console.log('index.html created!')
  );
}

//inquire the questions, then put answers in a writeToFile function aimed at the index.html
function getTeam() {
  inquirer
      .prompt(teamName)
      .then((data) => {
          const teamName = data.team;
          // getTeamProfiles();
          writeToFile("./dist/index.html", generateHTML(
            teamName,
          ));
      });
}

function getTeamProfiles(){
  getName();
  getId();
  getEmail();
}
// Function call to initialize app
getTeam();





//set up function blocks in classes. import said classes. Then have ONE menu, with if statements. If engineer, run Engineer.getId() etc 