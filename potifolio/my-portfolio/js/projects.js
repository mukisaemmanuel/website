async function fetchProjects() {
  const res = await fetch("data/projects.json");
  return await res.json();
}

function createProjectCard(project) {
  return `
    <div class="project-card fade-in">
      <img src="${project.image}" alt="${project.title}" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <span class="category">${project.category}</span>
    </div>
  `;
}

// For projects.html
async function renderProjects(filter = "all") {
  const projects = await fetchProjects();
  const list = document.getElementById("projects-list");
  if (!list) return;
  list.innerHTML = "";
  projects
    .filter((p) => filter === "all" || p.category.toLowerCase() === filter)
    .forEach((project) => {
      list.innerHTML += createProjectCard(project);
    });
  // Animate in
  document.querySelectorAll(".project-card").forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), 100 * i);
  });
}

// Filter buttons
const filterBtns = document.querySelectorAll(".filter-btn");
if (filterBtns.length) {
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.category);
    });
  });
  renderProjects("all");
}

// For home page preview
async function renderPreview() {
  const preview = document.querySelector(".preview-cards");
  if (!preview) return;
  const projects = await fetchProjects();
  preview.innerHTML = "";
  projects.slice(0, 2).forEach((project) => {
    preview.innerHTML += createProjectCard(project);
  });
  document.querySelectorAll(".preview-cards .project-card").forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), 100 * i);
  });
}
renderPreview();
