// Highlight current nav link
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();
navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// Smooth scroll for anchor links and 'See my work' button
const seeWorkBtn = document.getElementById("see-work-btn");
if (seeWorkBtn) {
  seeWorkBtn.addEventListener("click", () => {
    const preview = document.getElementById("project-preview");
    if (preview) {
      preview.scrollIntoView({ behavior: "smooth" });
    }
  });
}
// Smooth scroll for all anchor links (if any)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
