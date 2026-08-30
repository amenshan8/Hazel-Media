/* Fotowinkel gallery + search */
(function () {
  "use strict";
  const HM = window.HM;
  const grid = document.getElementById("shopGrid");
  const filters = document.getElementById("shopFilters");

  function render(list){
    grid.innerHTML = list.map(ph => `
      <div class="photo-card reveal" data-cat="${ph.cat}">
        <a class="ph" href="fotoprint.html?id=${ph.id}">
          <img src="${ph.img}" alt="${ph.title} — catalogusvoorbeeld" loading="lazy">
          <div class="wm"></div>
          <span class="pno">Voorbereiding</span>
        </a>
        <div class="info">
          <span class="cat">${ph.cat}</span>
          <h3><a href="fotoprint.html?id=${ph.id}">${ph.title}</a></h3>
          <div class="row">
            <b>Prijs volgt</b>
            <a class="buy" href="fotoprint.html?id=${ph.id}">Details</a>
          </div>
        </div>
      </div>`).join("");
    HM.filters("#shopGrid", ".photo-card", "#shopFilters .f-chip");
  }

  if (filters){
    filters.innerHTML = HM.photoFilters.map(c=>`<button class="f-chip${c==="ALL"?" on":""}" data-filter="${c}">${c}</button>`).join("");
  }
  render(HM.photos);
})();
