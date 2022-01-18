const inquirer = require('inquirer');
const fs = require('fs');
//creates the html file
const generateHTML = require('./src/generateHTML');
//use the created classes
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
//empty array to hold teamMembers created in inquirer prompts
const teamMembers = [];
let teamName;

//runs on node index.js 
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
        //set the team name
        teamName = data.team;
        //create a manager instance with the data from the prompt
        const manager = new Manager(data.manager, data.managerID, data.managerEmail, data.managerOffice);
        //add the manager to the teamMembers array
        teamMembers.push(manager);
        //menu
        chooseTeamMember();        
      });
}

//main menu, will continually loop back here until they choose "I'm finished"
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
      //depending on choice, make an engineer, make an intern, or create the html file
      switch(choice.choiceMenu){
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
      {
        type: "input",
        name: "engineerID",
        message: "What is this engineer's ID?",
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "What is this engineer's email?",
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: "What is this engineer's GitHub username?",
      },
    ])
    .then((data) => {
        //uses the data to create an Engineer instance before pushing it to the team array
        const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub);
        teamMembers.push(engineer);
        chooseTeamMember();
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
      {
        type: 'input',
        name: 'internEmail',
        message: "What is this intern's email?",
      },
      {
        type: 'input',
        name: 'internSchool',
        message: "What is this intern's school?",
      },
    ])
    .then((data) => {
        //makes Intern instance before pushing to team array
        const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);
        teamMembers.push(intern);
        chooseTeamMember();
    })

}

//create profiles by plugging the information into the generateHTML function that was imported.
function createProfiles(){
  //writes to index.html in dist, and what it writes is the html file that is generated using teamName and the teamMembers array
  writeToFile("./dist/index.html", generateHTML(teamName, teamMembers));
}

//Set up function to write answers in file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, (data), (err) =>
    err ? console.error(err) : console.log('index.html created!')
  );
}

// Function call to initialize app
startTeamBuilding();