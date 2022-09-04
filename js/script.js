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

// project container animation
const projectContainers = document.querySelectorAll('.project-container')

projectContainers.forEach(container => {
  container.addEventListener('click', function() {
    container.classList.toggle('project-clicked')
  })

})
gsap.from('nav', {duration: 1, y: '-100%'})