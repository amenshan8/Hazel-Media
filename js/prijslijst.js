/* Prijslijst */
(function () {
  "use strict";
  const cats = document.getElementById("priceCats");
  if (cats){
    cats.innerHTML = Object.entries(window.HM.pricing).map(([cat, rows], ci) => `
      <div class="price-card reveal" data-delay="${ci%3}">
        <h3>${cat} <span class="n">${String(ci+1).padStart(2,"0")}</span></h3>
        ${rows.map(r => `
          <div class="price-row"><span>${r.name}${r.unit?" <small style='color:var(--muted)'>(</small>":""}</span>
          <b>${r.price}</b></div>`).join("")}
      </div>`).join("");
  }
})();
