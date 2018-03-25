const projectsData = [
  {
    name: "markdownpreviewer",
    altName: "Markdown Previewer",
    description:
      "The Markdown Previewer was part of freeCodeCamp's React projects curriculum. It's a webapp that incorporates both React and Sass to render a preview of markdown in real time."
  },
  {
    name: "simongame",
    altName: "Simon Game",
    description:
      "The Simon Game was part of freeCodeCamp's advanced front end projects curriculum. It's a web app that uses Javascript to play Simon Says."
  },
  {
    name: "tictactoegame",
    altName: "Tic Tac Toe Game",
    description:
      "The Tic Tac Toe game was part of freeCodeCamp's advanced front end projects curriculum. The user is able to play tic tac toe versus the computer."
  },
  {
    name: "pomodoroclock",
    altName: "Pomodoro Clock",
    description:
      "This Pomodoro Clock was part of freeCodeCamp's advanced front end projects curriculum. It's a web app that acts as minimalist Pomodoro Technique timer with options."
  },
  {
    name: "javascriptcalculator",
    altName: "Javascript Calculator",
    description:
      "Javascript Calculator was part of freeCodeCamp's advanced front end projects curriculum. It's a web app that replicates a basic calculator through Javascript."
  },
  {
    name: "employeedirectorydashboard",
    altName: "Employee Directory Dashboard",
    description: "Employee directory that communicates with a third-party API."
  },
  {
    name: "webappdashboard",
    altName: "Web App Dashboard",
    description:
      "Web dashboard complete with JavaScript-driven charts and graphs."
  },
  {
    name: "randomquotegenerator",
    altName: "Random Quote Generator",
    description:
      "The random quote generator uses an API to grab a random quote. The user is also able to tweet the random quote."
  },
  {
    name: "localweatherapp",
    altName: "Local Weather App",
    description:
      "The local weather app uses Dark Sky's API to fetch your local weather based on your location."
  },
  {
    name: "wikipediaviewer",
    altName: "Wikipedia Viewer",
    description:
      "The Wikipedia Viewer pulls results or a random article from Wikipedia's API based on the user's criteria."
  },
  {
    name: "twitchtvviewer",
    altName: "TwitchTv Viewer",
    description:
      "The TwitchTv viewer uses Twitch's API to fetch your list of twitch streams and show their current status."
  },
  {
    name: "svganimations",
    altName: "SVG Animations",
    description:
      "Modernized the user interface of a web page by adding, styling and optimizing SVG graphics."
  },
  {
    name: "gameshowapp",
    altName: "Game Show App",
    description:
      "Game show app built with Javascript. The user is presented with a random phrase that players will try to guess by entering different letters into the program."
  },
  {
    name: "interactivevideoplayer",
    altName: "Interactive Video Player",
    description:
      "The Interactive Video Player was developed using JavaScript and the HTML5 Video API. The player synchronizes the video and the transcript. In addition, when a user clicks on a transcript line it takes them to the appropriate part in the video."
  },
  {
    name: "webstyleguide",
    altName: "Web Style Guide",
    description:
      "The web style guide is using Sass and BEM style classes to prototype and apply a consistent look across multiple pages of a site."
  },
  {
    name: "interactivephotogallery",
    altName: "Interactive Photo Gallery",
    description:
      "An interactive, searchable gallery of photos made using HTML, CSS and JavaScript."
  }
  // {
  //   name: "registrationform",
  //   altName: "Online Registration Form",
  //   description:
  //     "A responsive, mobile-first registration form using a variety of HTML form elements."
  // },
  // {
  //   name: "tributepage",
  //   altName: "Tribute Page",
  //   description:
  //     "A simple responsive tribute page built using HTML, CSS and Bootstrap framework."
  // },
];

// function buildProjects(projects) {
//   const projectsSection = document.querySelector(".projects");
//   projects.forEach(project => {
//     projectsSection.innerHTML += `
//     <figure class="project">
//     <img src="images/projects/small/${project.name}.png" alt="Image of ${
//       project.altName
//     } Project" class="project__image card">
//     <div class="project__overlay">
//       <a href="https://github.com/jimmy-guzman/${
//         project.name
//       }" target="_blank" rel="noopener">
//         View Code
//       </a>
//       <a href="http://jimmyguzman.com/${
//         project.name
//       }/" target="_blank"> View Demo </a>
//     </div>
//       <h3 class="project__title">${project.altName}</h3>
//     <figcaption class="project__desc">
//       <p>${project.description}</p>
//     </figcaption>
//   </figure>
//     `;
//   });

// }

// function buildProjects(projects) {
//   const projectsSection = document.querySelector(".projects");

//   projectsData.forEach(({ name, altName, description, demoLink }) => {
//     let demo = demoLink || `http://jimmyguzman.com/${name}`;
//     projectsSection.innerHTML += `
//     <div class="project grid__col--6 grid__col--4-lg">
//     <img src="images/projects/small/${name}.png" alt="Image of ${altName} Project" class="project__image card">
//     <div class="project__overlay">
//       <a href="https://github.com/jimmy-guzman/${name}" target="_blank" rel="noopener">
//         View Code
//       </a>
//       <a href="${demo}" target="_blank" rel="noopener"> View Demo </a>
//     </div>
//       <h3 class="project__title">${altName}</h3>
//     <div class="project__desc">
//       <p>${description}</p>
//     </div>
//   </div>
//     `;
//   });
// }
