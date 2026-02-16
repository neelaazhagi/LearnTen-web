/* =============================== */
/* MOBILE MENU */
/* =============================== */

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    sideMenu.style.right = "0";
    overlay.style.display = "block";
  });
}

if (closeBtn) closeBtn.addEventListener("click", closeMenu);
if (overlay) overlay.addEventListener("click", closeMenu);

function closeMenu() {
  sideMenu.style.right = "-300px";
  overlay.style.display = "none";
}


/* =============================== */
/* JOURNEY CLICK FUNCTIONALITY */
/* =============================== */

// 1️⃣ Select Elements (ONLY ONCE)
const cards = document.querySelectorAll(".journey-card");
const detailsSection = document.getElementById("journeyDetails");
const title = document.getElementById("detailsTitle");
const description = document.getElementById("detailsDescription");
const weeks = document.getElementById("detailsWeeks");
const tagsContainer = document.getElementById("detailsTags");
const icon = document.getElementById("detailsIcon");

// 2️⃣ Journey Data
const journeyData = {
  1: {
    icon: "📘",
    title: "Foundations",
    description: "HTML, CSS, JavaScript basics. Build your first web pages.",
    weeks: "Week 1–2",
    tags: ["HTML", "CSS", "JavaScript Basics"]
  },
  2: {
    icon: "⚛️",
    title: "Core Skills",
    description: "React fundamentals, components, state management.",
    weeks: "Week 3–5",
    tags: ["React", "Components", "State"]
  },
  3: {
    icon: "🚀",
    title: "Real Projects",
    description: "Build production-ready apps with real-world features.",
    weeks: "Week 6–9",
    tags: ["Fullstack", "APIs", "Deployment"]
  },
  4: {
    icon: "🤖",
    title: "AI Integration",
    description: "Learn to use AI tools, APIs and build AI-powered features.",
    weeks: "Week 10–11",
    tags: ["Prompt Engineering", "OpenAI APIs", "AI Coding", "Agents"]
  },
  5: {
    icon: "🎯",
    title: "Portfolio",
    description: "Create a strong portfolio that showcases your skills.",
    weeks: "Week 12",
    tags: ["Projects", "GitHub", "Resume"]
  },
  6: {
    icon: "💼",
    title: "Interviews",
    description: "Mock interviews, resume prep, job applications.",
    weeks: "Ongoing",
    tags: ["DSA", "System Design", "HR Prep"]
  }
};

// 3️⃣ Add Click Events
cards.forEach(card => {
  card.addEventListener("click", () => {

    const step = card.getAttribute("data-step");
    const data = journeyData[step];

    if (!data) return;

    // Update content
    title.textContent = data.title;
    description.textContent = data.description;
    weeks.textContent = data.weeks;
    icon.textContent = data.icon;

    // Clear old tags
    tagsContainer.innerHTML = "";

    // Add new tags
    data.tags.forEach(tag => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });

    // Show section
    detailsSection.style.display = "block";

    // Smooth scroll
    detailsSection.scrollIntoView({ behavior: "smooth" });
  });
});


document.addEventListener("DOMContentLoaded", function () {

  const counters = document.querySelectorAll(".counter");

  const animateCounter = (counter) => {
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
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const counter = entry.target;

      if (entry.isIntersecting) {
        counter.innerText = "0"; // reset to 0 every time
        animateCounter(counter);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(counter => {
    observer.observe(counter);
  });

});
