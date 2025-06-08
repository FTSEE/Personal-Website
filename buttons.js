//code to click the button!
  const homeButton = document.getElementById('home');
  homeButton.addEventListener('click', function entryClick() {
    console.log('clicked!')
    window.location.href = 'landing.html';
  });

  const entryButton = document.getElementById('entry');
  entryButton.addEventListener('click', function entryClick() {
    console.log('clicked!')
    window.location.href = 'projects.html';
  });

  const projectsButton = document.getElementById('projects');
  projectsButton.addEventListener('click', function entryClick() {
    console.log('clicked!')
    window.location.href = 'projects.html';
  });

  const navBar = document.getElementById('navBar');
  navBar.addEventListener('click', function navBarClick() {
    console.log('NB clicked!')
  });

  //LinkedIn and Github
  const linkedInButton = document.getElementById('linkedIn');
  linkedInButton.addEventListener('click', function entryClick() {
    console.log('clicked LI!')
    window.open('https://www.linkedin.com/in/anirudh-arunprasad-3555592b8/',"_blank");
  });

  const gitHubButton = document.getElementById('gitHub');
  gitHubButton.addEventListener('click', function entryClick() {
    console.log('clicked GH!')
    window.open('https://github.com/FTSEE',"_blank");
  });

  const researchButton = document.getElementById('research');
  researchButton.addEventListener('click', function entryClick() {
    console.log('clicked RS!')
    window.open('https://link.springer.com/article/10.1186/s40068-024-00384-1',"_blank");
  });