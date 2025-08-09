// Example material data
const materials = {
  notes: [
   { name: "Mathematics formulas", file: "https://drive.google.com/file/d/1TOLxpXAEkLOS6-_aVX4XjmlRbExEkWE9/view" }
  ],
  homework: [
    
  ],
  papers: [
  
  ],
  assignments: [
   
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
