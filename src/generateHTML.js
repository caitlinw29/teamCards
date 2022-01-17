function generateHTML(teamName, teamArray){
  const team = [];
  for(const member of teamArray){
    if(member.getRole() === "Manager"){
      const managerCard = generateManager(member);
      team.push(managerCard);
    } else if(member.getRole() === "Engineer"){
      const engineerCard = generateEngineer(member);
      team.push(engineerCard);
    } else if(member.getRole() === "Intern"){
      const internCard = generateIntern(member);
      team.push(internCard);
    }
  }
  const noCommaTeam = team.join('');
  return generateFinal(teamName, noCommaTeam);

  function generateManager(manager){
    return `<div class="col">
    <div class="card h-100 text-start">
      <div class="card-header bg-primary text-white">
        <p class="card-text p-1 m-1">${manager.name}</p>
        <p class="card-text p-1 m-1"> <i class="fas fa-coffee"></i>  Manager</p>
      </div>
      <div class="card-body bg-custom-gray p-4">
        <p class="card-text bg-light p-3 m-1">ID: ${manager.id}</p>
        <p class="card-text bg-light p-3 m-1">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="card-text bg-light p-3 m-1">Office Number: ${manager.officeNumber} </p>
      </div>
    </div>
  </div>`
  }

  function generateIntern(intern){
    return `<div class="col">
    <div class="card h-100 text-start">
      <div class="card-header bg-primary text-white">
        <p class="card-text p-1 m-1">${intern.name}</p>
        <p class="card-text p-1 m-1"><i class="fas fa-user-graduate"></i>  Intern</p>
      </div>
      <div class="card-body bg-custom-gray p-4">
        <p class="card-text bg-white p-3 m-1">ID: ${intern.id}</p>
        <p class="card-text bg-white p-3 m-1">Email: <a href="mailto:${intern.email}"> ${intern.email}</a></p>
        <p class="card-text bg-white p-3 m-1">School: ${intern.school}</p>
      </div>
    </div>
  </div>`
  }

  function generateEngineer(engineer){
    return `<div class="col">
    <div class="card h-100 text-start">
      <div class="card-header bg-primary text-white">
        <p class="card-text p-1 m-1">${engineer.name}</p>
        <p class="card-text p-1 m-1"><i class="far fa-glasses"></i>  Engineer</p>
      </div>
      <div class="card-body bg-custom-gray p-4">
        <p class="card-text bg-light p-3 m-1">ID: ${engineer.id}</p>
        <p class="card-text bg-light p-3 m-1">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="card-text bg-light p-3 m-1">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
      </div>
    </div>
  </div>`
  }




  //generate index.html
  function generateFinal(teamName, team) {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>${teamName} Profiles</title>
        <meta name="description" content="Team Cards is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person in a card.">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/png" href="../dist/img/teamProfileLogo.png">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
      </head>
      <body class="container-fluid text-center m-0 p-0">
        <header class="bg-dark text-white py-1">
          <h1 class="display-1">${teamName}</h1>
        </header>
        <div class="row row-cols-1 row-cols-md-3 g-4 mx-5 my-3 py-3 justify-content-center">
          ${team}
        </div>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
      </body>
    </html>
  `;
  }
}
module.exports = generateHTML;

