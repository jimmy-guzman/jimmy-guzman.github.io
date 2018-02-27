const nav = document.querySelector(".nav");
const topOfNav = nav.offsetTop;
const headerText = document.querySelectorAll("header a");

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight;
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

let i = 0;

function typeWriter() {
  const txt = "Jimmy Guzman";
  const speed = 60;
  if (i < txt.length) {
    headerText[1].innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

function buildProjects(projects) {
  const projectsSection = document.querySelector(".projects");
  projects.forEach(project => {
    projectsSection.innerHTML += `
    <figure class="col">
    <img src="images/projects/${project.name}.png" alt="Image of ${
      project.altName
    } Project" class="project-image card">
    <div class="project-overlay">
      <a href="https://github.com/jimmy-guzman/${project.name}" target="_blank">
        View Code
      </a>
      <a href="http://jimmyguzman.com/${
        project.name
      }/" target="_blank"> View Demo </a>
    </div>
    <div class="project-title">
      <h3>${project.altName}</h3>
    </div>
    <figcaption>
      <p>${project.description}</p>
    </figcaption>
  </figure>
    `;
  });
}


function loadPage(url) {
  return fetch(url, {
    method: "GET"
  }).then(function(response) {
    return response.text();
  });
}

window.addEventListener("scroll", fixNav);