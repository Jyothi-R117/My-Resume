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




window.onload = function() {
    if (window.location.pathname !== '/base.html') {
        window.location.href = 'base.html';
    }
};
