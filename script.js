// Scroll-to-top functionality
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Section scroll-in animation
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

document.querySelector(".typing").textContent = "Full Stack Developer";

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.padding = '10px 30px';
    navbar.style.background = '#0d1b2a';
  } else {
    navbar.style.padding = '15px 30px';
    navbar.style.background = '#0f2027';
  }
});

const navLinks = document.querySelectorAll(".nav-links a");
const sectionsAll = document.querySelectorAll(".page-section");

// Hide all sections initially except home
sectionsAll.forEach(sec => sec.classList.add("hidden"));
document.getElementById("home").classList.remove("hidden");

// On clicking menu item show only that section
navLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = link.getAttribute("href").substring(1);

    sectionsAll.forEach(sec => sec.classList.add("hidden"));

    document.getElementById(targetId).classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

