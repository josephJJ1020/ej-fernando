console.log("hello world");

// set html scroll behavior to smooth when clicking anchor tag
document.addEventListener("click", function (e) {
  var anchor = e.target.closest("a");
  if (anchor !== null) {
    console.log("hello world");
    document.querySelector("html").style.scrollBehavior = "smooth";
    //do something with a tag
  }
});

// nav hamburger hide nav functionality
// only when screen is less than 500px

var searchClickEvent = function () {
  let navUl = document.querySelector("nav ul");
  if (window.matchMedia("(max-width: 500px)").matches) {
    console.log("hamburger");
    navUl.classList.add("hidden");
    document.querySelector(".hamburger").addEventListener("click", () => {
      navUl.classList.toggle("hidden");
    });
  } else {
    navUl.classList.remove("hidden");
    console.log("err");
  }
};


window.addEventListener("resize", searchClickEvent);
window.addEventListener('load', searchClickEvent)


// project container click animation
const projectContainers = document.querySelectorAll(".project-container");

projectContainers.forEach((container) => {
  container.addEventListener("click", function () {
    container.classList.toggle("project-clicked");
  });
});

// nav animation on start
gsap.from("nav", { duration: 1, y: "-100%" });

// about page animation

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "center bottom",
  },
});

tl.from(".about-detail.left", { x: -500, opacity: 0, duration: 1 }).from(
  ".about-detail.right",
  { x: 500, opacity: 0 },
  "-=0.7"
);

// skills page animation

const skills = gsap.utils.toArray(".skill");
skills.forEach((skill) => {
  gsap.from(skill, {
    scale: 0,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".skills-container",
      start: "center bottom",
    },
  });
});

// project container animations

const projects = gsap.utils.toArray(".project-container");
projects.forEach((project) => {
  gsap.from(project, {
    y: 500,
    duration: 1,
    scrollTrigger: {
      trigger: project,
      start: "-150% bottom",
    },
  });
});
