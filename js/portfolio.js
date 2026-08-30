/* Portfolio archive page */
(function () {
  "use strict";
  const HM = window.HM;
  const grid = document.getElementById("portGrid");
  const filters = document.getElementById("portFilters");

  if (grid) {
    grid.innerHTML = HM.projects.map(p => `
      <a class="port-item reveal" href="project.html?slug=${p.slug}" data-cat="${p.tags.join(" ")}">
        <div class="pm"><img src="${p.image}" alt="${p.title}" loading="lazy"></div>
        <div class="p-meta"><span>${p.category}</span><span>${p.year}</span></div>
        <div class="po">
          <span class="meta">${p.category} / ${p.client}</span>
          <h3>${p.title}</h3>
          <span class="p-role">${p.role}</span>
        </div>
      </a>`).join("");
  }

  /* filters */
  const cats = ["ALL", ...new Set(HM.projects.flatMap(p => p.tags))];
  if (filters) {
    filters.innerHTML = cats.map(c => `<button class="f-chip${c==="ALL"?" on":""}" data-filter="${c}">${c}</button>`).join("");
  }
  HM.filters("#portGrid", ".port-item", "#portFilters .f-chip");
})();
