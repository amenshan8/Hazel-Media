/* Project case study renderer */
(function () {
  "use strict";
  const HM = window.HM;
  const slug = new URLSearchParams(location.search).get("slug") || HM.projects[0].slug;
  const p = HM.projects.find(x => x.slug === slug) || HM.projects[0];
  const next = HM.projects.find(x => x.slug === p.next) || HM.projects[0];

  document.title = `${p.title} — Hazel Media`;
  document.querySelector('meta[name="description"]').setAttribute("content", p.lead);

  document.getElementById("caseRoot").innerHTML = `
    <section class="case-hero">
      <img src="${p.heroImg}" alt="${p.title}">
      <div class="shade"></div>
      <div class="ch-in">
        <div class="ch-meta">
          <div>Client <b>${p.client}</b></div>
          <div>Jaar <b>${p.year}</b></div>
          <div>Categorie <b>${p.category}</b></div>
          <div>Rol <b>${p.role}</b></div>
        </div>
        <h1>${p.title}</h1>
        <p class="ch-lead">${p.lead}</p>
      </div>
    </section>

    <div class="case-body">
      <p class="eyebrow eyebrow--ink">Het verhaal</p>
      <h2>Het verhaal</h2>
      <p>${p.story}</p>

      <p class="eyebrow eyebrow--ink">Mijn rol</p>
      <h2>Mijn rol</h2>
      <p>${p.roleText}</p>

      <p class="eyebrow eyebrow--ink">Het proces</p>
      <h2>Van vraag naar vorm</h2>
      <p>${p.process}</p>

      <p class="eyebrow eyebrow--ink">Het resultaat</p>
      <h2>Het resultaat</h2>
      <p>${p.result}</p>
      ${p.source ? `<a class="btn btn--solid" href="${p.source}" target="_blank" rel="noopener">${p.sourceLabel} <span class="arr">↗</span></a>` : ""}
    </div>

    <div class="case-img">
      <img src="${p.gallery[0]}" alt="${p.title} — beeld" loading="lazy">
    </div>

    <div class="case-gallery">
      <h2>Achter het verhaal</h2>
      <div class="hz-scroll">
        ${p.gallery.slice(1).map((g,i) => `<img src="${g}" alt="${p.title} — beeld ${i+2}" loading="lazy">`).join("")}
      </div>
    </div>

    <section class="section case-next" style="padding:0">
      <div class="wrap">
        <a href="project.html?slug=${next.slug}">
          <span class="meta">Volgende story</span>
          <h3>${next.title}</h3>
          <span class="arr">→</span>
        </a>
      </div>
    </section>
  `;
})();
