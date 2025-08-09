// Example material data
const materials = {
  notes: [
    { name: "Physics - Chapter 1", file: "materials/physics-ch1.pdf" },
    { name: "Chemistry - Atomic Structure", file: "materials/chemistry-atomic.pdf" }
  ],
  homework: [
    { name: "Maths Homework - Algebra", file: "materials/maths-homework.pdf" }
  ],
  papers: [
    { name: "Science Past Paper 2023", file: "materials/science-paper-2023.pdf" }
  ],
  assignments: [
    { name: "Geography Map Work", file: "materials/geography-map.pdf" }
  ]
};

function renderMaterials(category) {
  const list = document.getElementById("materials-list");
  list.innerHTML = "";
  materials[category].forEach(item => {
    const div = document.createElement("div");
    div.classList.add("material");
    div.innerHTML = `
      <h3>${item.name}</h3>
      <a href="${item.file}" download>Download</a>
    `;
    list.appendChild(div);
  });
}

document.querySelectorAll(".category").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".category").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderMaterials(btn.dataset.cat);
  });
});

document.getElementById("search").addEventListener("input", e => {
  const term = e.target.value.toLowerCase();
  const activeCat = document.querySelector(".category.active").dataset.cat;
  const filtered = materials[activeCat].filter(m => m.name.toLowerCase().includes(term));
  const list = document.getElementById("materials-list");
  list.innerHTML = "";
  filtered.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("material");
    div.innerHTML = `
      <h3>${item.name}</h3>
      <a href="${item.file}" download>Download</a>
    `;
    list.appendChild(div);
  });
});

// Load default
renderMaterials("notes");
