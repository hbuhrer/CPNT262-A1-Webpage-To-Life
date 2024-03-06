'use strict';

function openNav() {
    if (window.innerWidth < 750) {
      document.getElementById("sideBar").style.width = "100%";
      document.getElementById("sideNav").style.width = "100%";
    } else {
      document.getElementById("sideBar").style.width = "100%";
      document.getElementById("sideNav").style.width = "60%";
    }
  }
  
  function exitNav() {
    document.getElementById("sideBar").style.width = "0";
    document.getElementById("sideNav").style.width = "0";
  }

  const checkbox = document.getElementById("checkbox");
  let isDarkMode = localStorage.getItem("darkMode") === "true";
  
  if (isDarkMode) {
      document.body.classList.add("dark");
      checkbox.checked = true;
  }
  
  const toggleDarkMode = () => {
      isDarkMode = !isDarkMode;
      if (isDarkMode) {
          document.body.classList.add("dark");
          localStorage.setItem("darkMode", "true");
      } else {
          document.body.classList.remove("dark");
          localStorage.setItem("darkMode", "false");
      }
      updateCanvasForDarkMode();
      draw();
  };
  
  checkbox.addEventListener("change", toggleDarkMode);
  
  const canvas = document.getElementById("matrix-rain");
  const context = canvas.getContext("2d");
  
  const alphabet =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  
  let fontSize = 16;
  let columns = Math.floor(window.innerWidth / fontSize);
  
  canvas.width = window.innerWidth;
  canvas.height = 300;
  
  let raindrops = [];
  
  for (let x = 0; x < columns; x++) {
      raindrops[x] = 1;
  }
  
  const updateCanvasForDarkMode = () => {
      if (isDarkMode) {
          context.fillStyle = "rgba(0, 0, 0, 0.05)";
      } else {
          context.fillStyle = "rgba(255, 255, 255, 0.20)";
      }
  };
  
  const draw = () => {
      updateCanvasForDarkMode();
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#4080bf";
      context.font = fontSize + "px monospace";
  
      for (let i = 0; i < raindrops.length; i++) {
          const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
          context.fillText(text, i * fontSize, raindrops[i] * fontSize);
  
          if (raindrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
              raindrops[i] = 0;
          }
          raindrops[i]++;
      }
  };
  
  const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 300;
      columns = Math.floor(window.innerWidth / fontSize);
      raindrops = [];
      for (let x = 0; x < columns; x++) {
          raindrops[x] = 1;
      }
  };
  
  window.addEventListener("resize", () => {
      resizeCanvas();
      draw();
  });
  
  setInterval(draw, 30);
  

const cards = [
  {
      image: './assets/images/tailwindcss.svg',
      title: 'Built on Tailwind CSS',
      description: 'SafeCSS retains the simplicity and ease of use of Tailwind CSS, making it familiar to developers who are already familiar with the framework.'
  },
  {
      image: './assets/images/security.svg',
      title: 'Regular Security Audits',
      description: 'Our team conducts regular security audits to identify and address any vulnerabilities in the SafeCSS codebase.'
  },
  {
      image: './assets/images/fix.svg',
      title: 'Custom Security Fixes',
      description: 'In cases where third-party dependencies are abandoned or insecure, the SafeCSS team rewrites the code from scratch, following the latest security best practices.'
  }
];

const cardContainer = document.getElementById('card-container');

cards.forEach(card => {
  const cardHtml = `
      <div class="bg-white p-6 rounded-lg shadow-2xl flex flex-col text-center hover:scale-105 transition duration-150 ease-in dark:bg-sky-400 justify-center">
          <img src="${card.image}" alt="${card.title}" class="mb-4 max-h-52">
          <h3 class="text-xl font-play mb-2">${card.title}</h3>
          <p class="text-black font-titilium">${card.description}</p>
      </div>
  `;
  cardContainer.innerHTML += cardHtml;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    if ('ontouchstart' in document.documentElement) {
      document.body.classList.add('touch-device');
    }
  });
  