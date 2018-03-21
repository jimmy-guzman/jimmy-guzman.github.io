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

window.addEventListener("scroll", fixNav);

document.addEventListener("click", (e) => {
  if (e.target.className === "nav__link") {
    e.target.classList.remove("selected");
    document.querySelector(e.target.dataset.href).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
});

(function() {


  var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  console.log(sections);

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelectorAll(`[data-href]`).forEach(link => {
         
          if(link.dataset.href.includes(i)) {
            console.log(link.dataset.href);
            link.classList.add("selected");
          }
        })
      }
    }
  };
})();