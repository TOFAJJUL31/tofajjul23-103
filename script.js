const themeBtn = document.getElementById('themeBtn');

// Typing Animation
const words = [
    "Programmer",
    "Web Developer",
    "Designer",
    "CSE Student"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

const text = document.getElementById("text");

function type() {
    currentWord = words[i];

    if(isDeleting) {
        text.textContent = currentWord.substring(0, j--);
    } else {
        text.textContent = currentWord.substring(0, j++);
    }

    if(!isDeleting && j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if(isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 60 : 120);
}

type();

// Theme Toggle
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');

  if(document.body.classList.contains('light')) {
    themeBtn.textContent = '☀️';
  } else {
    themeBtn.textContent = '🌙';
  }
});

// Scroll Animation
const sections = document.querySelectorAll('.section, .hero');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if(top < window.innerHeight - 100) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0px)';
    }
  });
});

sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'all 0.8s ease';
});