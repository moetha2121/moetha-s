window.onscroll = function () {
  myFunction();
};

var button = document.querySelector('.sticky-button');

function myFunction() {
  if (window.pageYOffset > 0) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

button.addEventListener('click', scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

