//generate index.html
function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>${data.team} Profiles</title>
      <meta name="description" content="Team Cards is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person in a card.">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" type="image/png" href="../dist/img/teamProfileLogo.png">
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="./style.css">
    </head>
    <body class="container-fluid text-center m-0 p-0">
      <header class="bg-dark text-white py-1">
        <h1 class="display-1">${data.team}</h1>
      </header>
      <div class="row row-cols-1 row-cols-md-3 g-4 mx-5 my-3 py-3 justify-content-center">
        <div class="col">
          <div class="card h-100 text-start">
            <div class="card-header bg-primary text-white">
              <p class="card-text p-1 m-1">${data.manager}</p>
              <p class="card-text p-1 m-1"> <i class="fas fa-coffee"></i>  Manager</p>
            </div>
            <div class="card-body bg-custom-gray p-4">
              <p class="card-text bg-light p-3 m-1">ID: ${data.managerID}</p>
              <p class="card-text bg-light p-3 m-1">Email: <a href="${data.managerEmail}">${data.managerEmail}</a></p>
              <p class="card-text bg-light p-3 m-1">Office Number: ${data.managerOffice}</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 text-start">
            <div class="card-header bg-primary text-white">
              <p class="card-text p-1 m-1">Card title</p>
              <p class="card-text p-1 m-1"><i class="far fa-glasses"></i>  Engineer</p>
            </div>
            <div class="card-body bg-custom-gray p-4">
              <p class="card-text bg-light p-3 m-1">Card title</p>
              <p class="card-text bg-light p-3 m-1">This is a short card.</p>
              <p class="card-text bg-light p-3 m-1">ID</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 text-start">
            <div class="card-header bg-primary text-white">
              <p class="card-text p-1 m-1">Card title</p>
              <p class="card-text p-1 m-1"><i class="fas fa-user-graduate"></i>  Intern</p>
            </div>
            <div class="card-body bg-custom-gray p-4">
              <p class="card-text bg-white p-3 m-1">Card title</p>
              <p class="card-text bg-white p-3 m-1">ID</p>
              <p class="card-text bg-white p-3 m-1">ID</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 text-start">
            <div class="card-header bg-primary text-white">
              <p class="card-text p-1 m-1">Card title</p>
              <p class="card-text p-1 m-1">ID.</p>
            </div>
            <div class="card-body bg-custom-gray p-4">
              <p class="card-text bg-light p-3 m-1">Card title</p>
              <p class="card-text bg-light p-3 m-1">ID</p>
              <p class="card-text bg-light p-3 m-1">ID</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 text-start">
            <div class="card-header bg-primary text-white">
              <p class="card-text p-1 m-1">Card title</p>
              <p class="card-text p-1 m-1">ID.</p>
            </div>
            <div class="card-body bg-custom-gray p-4">
              <p class="card-text bg-light p-3 m-1">Card title</p>
              <p class="card-text bg-light p-3 m-1">ID</p>
              <p class="card-text bg-light p-3 m-1">ID</p>
            </div>
          </div>
        </div>
      </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
    </body>
  </html>
`;
}

//export the markdown so it can be pulled in index.js - default is for imports and exports to match
module.exports = generateHTML;