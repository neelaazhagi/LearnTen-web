const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sideMenu.style.right = "0";
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  sideMenu.style.right = "-300px";
  overlay.style.display = "none";
}