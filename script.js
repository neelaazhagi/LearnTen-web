document.addEventListener("DOMContentLoaded", function () {

  /* =============================== */
  /* MOBILE MENU */
  /* =============================== */

  const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
}

function closeMenu() {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
}

if (menuBtn) menuBtn.addEventListener("click", openMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);
if (overlay) overlay.addEventListener("click", closeMenu);

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // when you scroll down 50px
    navbar.style.background = '#0e1628'; // darker background
    navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
  } else {
    navbar.style.background = 'transparent'; // original
    navbar.style.boxShadow = 'none';
  }
});




    /* =============================== */
/* JOURNEY PROGRESS SYSTEM */
/* =============================== */
const steps = document.querySelectorAll(".journey-step");
const progressFill = document.getElementById("progressFill");

const journeyIcons = ["📘","⚛️","🚀","🤖","🎯","💼"];

const journeyData = {
  0: {
    week: "WEEK 1–2",
    title: "Foundations",
    desc: "HTML, CSS, JS fundamentals with hands-on exercises",
    learn: [
      "Semantic HTML & modern CSS layouts",
      "JavaScript ES6+ deep dive",
      "Git & GitHub workflow mastery",
      "First mini-projects shipped"
    ]
  },
  1: {
    week: "WEEK 3–5",
    title: "Core Skills",
    desc: "React, TypeScript, and modern tooling mastery",
    learn: [
      "React components, props & Hooks mastery",
      "TypeScript for real-world applications",
      "Modern tooling (Vite, ESLint, Prettier)",
      "State management patterns & best practices",
      "Build scalable UI architecture"
    ]
  },
  2: {
    week: "WEEK 6–8",
    title: "Real Projects",
    desc: "Build production-ready applications",
    learn: [
      "REST API integration",
      "Authentication systems",
      "Deployment workflows",
      "Performance optimization"
    ]
  },
  3: {
    week: "WEEK 9–10",
    title: "AI Integration",
    desc: "Integrate AI into modern web apps",
    learn: [
      "OpenAI API integration",
      "Prompt engineering basics",
      "AI-powered UI features",
      "Automation workflows"
    ]
  },
  4: {
    week: "WEEK 11–12",
    title: "Portfolio",
    desc: "Create strong real-world portfolio projects",
    learn: [
      "3 major production-grade projects",
      "GitHub optimization",
      "Case study writing",
      "Personal branding"
    ]
  },
  5: {
    week: "CAREER PHASE",
    title: "Interviews",
    desc: "Prepare for interviews & land your job",
    learn: [
      "Resume building",
      "DSA interview preparation",
      "Mock interviews",
      "Job application strategy"
    ]
  }
};

steps.forEach((step, index) => {
  step.addEventListener("click", () => {

    steps.forEach((s, i) => {
      const icon = s.querySelector(".main-icon");

      if (i < index) {
        s.classList.add("completed");
        s.classList.remove("active");
        icon.textContent = "✓";
      }
      else if (i === index) {
        s.classList.add("active");
        s.classList.remove("completed");
        icon.textContent = journeyIcons[i];
      }
      else {
        s.classList.remove("active", "completed");
        icon.textContent = journeyIcons[i];
      }
    });

    // Update progress bar
    const progress = (index / (steps.length - 1)) * 100;
    progressFill.style.width = progress + "%";

    // Update detail card
const data = journeyData[index];

document.getElementById("detailWeek").textContent = data.week;
document.getElementById("detailTitle").textContent = data.title;
document.getElementById("detailDesc").textContent = data.desc;

const list = document.getElementById("detailList");
list.innerHTML = "";

data.learn.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});
  });
});


/* =============================== */
/* TOOLS CATEGORY TOGGLE */
/* =============================== */

const categories = document.querySelectorAll(".category");
const toolGrids = document.querySelectorAll(".category-grid");

categories.forEach(category => {
  category.addEventListener("click", () => {

    // Remove active from all tabs
    categories.forEach(cat => cat.classList.remove("active"));

    // Hide all grids
    toolGrids.forEach(grid => grid.style.display = "none");

    // Activate clicked tab
    category.classList.add("active");

    // Show selected grid
    const selected = category.getAttribute("data-category");
    document.getElementById(selected).style.display = "flex";
  });
});

  /* =============================== */
  /* COUNTER ANIMATION */
  /* =============================== */

  const counters = document.querySelectorAll(".counter");

  function animateCounter(counter) {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCount = () => {
      const increment = target / 80;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  }

  if (counters.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.innerText = "0";
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.6 });

    counters.forEach(counter => {
      observer.observe(counter);
    });
  }


  /* =============================== */
  /* STORIES AUTO SCROLL (Mobile) */
  /* =============================== */

  const container = document.querySelector(".stories-container");

  if (container) {
    let scrollAmount = 0;

    function autoScroll() {
      if (window.innerWidth <= 768) {
        scrollAmount += 0.5;
        container.scrollLeft = scrollAmount;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
      }
    }

    setInterval(autoScroll, 20);
  }

});




