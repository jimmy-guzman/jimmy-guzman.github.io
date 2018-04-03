require("./scss/index.scss");

(function() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css?family=Lato|Oswald:400,700";
  document.querySelector("head").appendChild(link);
})();

const header = document.querySelector(".main-header");
const nav = document.querySelector(".nav");
setHeaderHeight();

// fix nav on scroll after it's passed
function fixNav() {
  const topOfNav = header.offsetHeight;
  window.scrollY >= topOfNav
    ? ((document.body.style.paddingTop = header.offsetHeight),
      document.body.classList.add("fixed-nav"))
    : ((document.body.style.paddingTop = 0),
      document.body.classList.remove("fixed-nav"));
}

// smooth scroll to section based on dataset.href
function smoothScroll(e) {
  if (e.target.classList.contains("nav__link")) {
    document.querySelector(e.target.dataset.href).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });
  }
}

// Assign selected class to nav links while scolling
function setActiveNavLink() {
  const sections = document.querySelectorAll(".section");
  const navLink = document.querySelectorAll(".nav__link");

  sections.forEach((section, index) => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      navLink.forEach(link => link.classList.remove("selected"));
      navLink[navLink.length - 1].classList.add("selected");
    } else if (section.offsetTop - nav.offsetHeight <= window.scrollY) {
      navLink.forEach(link => link.classList.remove("selected"));
      navLink[index].classList.add("selected");
    } else if (window.scrollY === 0) {
      navLink.forEach(link => link.classList.remove("selected"));
    }
  });
}

// set header height dynamically
function setHeaderHeight() {
  let vH = window.innerHeight - nav.offsetHeight;
  header.style.height = `${vH}px`;
}

// event listeners
document.addEventListener("click", smoothScroll);
window.addEventListener("scroll", fixNav);
window.addEventListener("scroll", setActiveNavLink);
window.addEventListener("resize", setHeaderHeight);
