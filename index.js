const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const teamMembers = [];



let teamName;

function startTeamBuilding() {
  inquirer
      .prompt([
        {
            type: 'input',
            name: 'team',
            message: 'What is the name of your team?',
        },
        {
          type: 'input',
          name: 'manager',
          message: "What is the manager's name?",
        },
        {
          type: 'input',
          name: 'managerID',
          message: "What is the manager's ID?",
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is the manager's email?",
        },
        {
          type: 'input',
          name: 'managerOffice',
          message: "What is the manager's office number?",
        },
      ])
      .then((data) => {
        teamName = data.team;
        const manager = new Manager(data.manager, data.managerID, data.managerEmail, data.managerOffice);
        teamMembers.push(manager);
        chooseTeamMember();        
        
      });
}


function chooseTeamMember(){
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'choiceMenu',
        choices: ["Add an engineer", "Add an intern", "I'm finished!"],
        message: 'Who would you like to add to the team?',
      },
    ])
    .then((choice) => {
      switch(choice.choices){
        case "Add an engineer":
          makeEngineer();
          break;
        case "Add an intern":
          makeIntern();
          break;
        default:
          createProfiles();
      }
    });
}

function makeEngineer(){
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is this engineer's name?",
      },
    ])
    .then((engineer) => {

    })

}

function makeIntern(){
  inquirer
    .prompt([ 
      {
        type: "input",
        name: "internName",
        message: "What is this intern's name?",
      },
      {
        type: "input",
        name: "internID",
        message: "What is this intern's ID?",
      },
    ])

}

function createProfiles(){
  writeToFile("./dist/index.html", generateHTML(
    teamName,
    teamMembers
  ));
}



//Set up function to write answers in file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, (data), (err) =>
    err ? console.error(err) : console.log('index.html created!')
  );
}

// Function call to initialize app
startTeamBuilding();