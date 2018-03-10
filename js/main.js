const nav = document.querySelector(".nav");
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight;
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

function buildProjects(projects) {
  const projectsSection = document.querySelector(".projects");
  projects.forEach(project => {
    projectsSection.innerHTML += `
    <figure class="project">
    <img src="images/projects/small/${project.name}.png" alt="Image of ${
      project.altName
    } Project" class="project__image card">
    <div class="project__overlay">
      <a href="https://github.com/jimmy-guzman/${
        project.name
      }" target="_blank" rel="noopener">
        View Code
      </a>
      <a href="http://jimmyguzman.com/${
        project.name
      }/" target="_blank"> View Demo </a>
    </div>
      <h3 class="project__title">${project.altName}</h3>
    <figcaption class="project__desc">
      <p>${project.description}</p>
    </figcaption>
  </figure>
    `;
  });

}

if (location.href.includes("projects")) {
  buildProjects(projectsData);
}

window.addEventListener("scroll", fixNav);
