/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */
document.addEventListener("DOMContentLoaded", navBar, false);
document.addEventListener("DOMContentLoaded", addActiveSection, false);
document.addEventListener("DOMContentLoaded", setActiveSection, false);

// build the nav
function navBar() {
  const section = [
    "About Us",
    "Populare Drinks",
    "Menu",
    "Gallery",
    "Contact Us",
  ];
  for (let i = 0; i < section.length; i++) {
    const li = document.createElement("li");
    const links = document.createElement("a");
    const sectionName = section[i];
    links.setAttribute("href", "#");
    links.setAttribute("id", "linkNum" + [i + 1]);
    links.setAttribute("style", "text-decoration:none");
    links.innerText = sectionName;
    li.appendChild(links);
    document.getElementById("navbar__list").appendChild(li);
    // Scroll to section on link click
    document
      .getElementById("linkNum" + [i + 1])
      .addEventListener("click", function () {
        scrollingTo(i + 1);
      });
  }
}

// Add class 'active' to section when near top of viewport
function addActiveSection() {
  window.addEventListener("scroll", function () {
    const section = document.getElementsByClassName("landing__container");
    for (let i = 0; i < section.length; i++) {
      const pos = section[i].getBoundingClientRect();
      const positTop = pos.top;
      if (positTop <= window.innerHeight / 2) {
        let actClass = document.getElementsByClassName("active-class");
        actClass[0].classList.remove("active");
        section[i].classList.add("active");

        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].classList.remove("active");
        }

        var navLinks = document
          .getElementById("navbar__list")
          .querySelectorAll("li");
        navLinks[i].classList.add("active");
      }
    }
  });
}
// Scroll to anchor ID using scrollTO event
function scrollingTo(sectionNum) {
  const section = document.getElementById("section" + sectionNum);
  const postion = section.offsetTop;
  event.preventDefault();
  window.scrollTo({ left: 0, top: postion, behavior: "smooth" });
}
// Set sections as active
function setActiveSection() {
  const linksCont = document.getElementById("navbar__list");
  const links = linksCont.querySelectorAll("li");
  for (let i = 0; i < links.length; i++) {
    links.addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].classList.remove("active");
      }
      this.current.classList.add("active");
    });
  }
}
