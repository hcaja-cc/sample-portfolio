// script.js

// 1. Dynamic Footer Year (Modifies HTML Text Content)
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// 2. Dark Mode Toggle (Manipulates CSS Classes via HTML Selection)
const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', () => {
  // Toggles the .dark-mode CSS class on the <body> tag
  document.body.classList.toggle('dark-mode');
});

// 3. Contact Button Event Handler
const contactBtn = document.getElementById('contact-btn');

contactBtn.addEventListener('click', () => {
  alert('Thank you for visiting! Reach out to me via hcaja@uic.edu.ph');
});