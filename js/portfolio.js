/* Verhalen (portfolio) — archief */
(function () {
  "use strict";
  const HM = window.HM;
  const grid = document.getElementById("portGrid");
  const filters = document.getElementById("portFilters");

  /* Toegestane categorieën (label linksboven in het blauw/indigo):
     Tekst · Audio · Video · Fotografie · Multimediaal */
  /* Achtergrond/onderzoek- vormen vallen onder Tekst; de bekende categorieën
     krijgen hun eigen label. */
  const CATMAP = { "VIDEO":"Video", "FOTOGRAFIE":"Fotografie", "MULTIMEDIA":"Multimediaal" };
  const CATEGORIES = [
    ["ALL","Alles"],
    ["Tekst","Tekst"],
    ["Audio","Audio"],
    ["Video","Video"],
    ["Fotografie","Fotografie"],
    ["Multimediaal","Multimediaal"],
  ];

  function catOf(p){ return CATMAP[p.category] || "Tekst"; }

  if (grid) {
    grid.innerHTML = HM.projects.map(p => `
      <a class="port-item reveal" href="project.html?slug=${p.slug}" data-cat="${catOf(p)}">
        <div class="pm"><img src="${p.image}" alt="${p.title}" loading="lazy"></div>
        <div class="p-meta"><span>${catOf(p)}</span></div>
        <div class="po">
          <span class="meta">${p.category} / ${p.client}</span>
          <h3>${p.title}</h3>
          <span class="p-role">${p.role}</span>
        </div>
      </a>`).join("");
  }

  if (filters) {
    filters.innerHTML = CATEGORIES.map(([val,label]) =>
      `<button class="f-chip${val==="ALL"?" on":""}" data-filter="${val}">${label}</button>`).join("");
  }
  HM.filters("#portGrid", ".port-item", "#portFilters .f-chip");
})();