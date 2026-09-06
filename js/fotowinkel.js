/* Fotowinkel gallery + filters */
(function () {
  "use strict";
  var HM = window.HM;
  function tr(o){ return HM.tr(o); }

  var DISP = {
    ALLES: { nl: "Alles", en: "All" },
    PORTRET: { nl: "Portret", en: "Portrait" },
    NATUUR: { nl: "Natuur", en: "Nature" },
    DOCUMENTAIR: { nl: "Documentair", en: "Documentary" },
    ARCHITECTUUR: { nl: "Architectuur", en: "Architecture" },
    DIEREN: { nl: "Dieren", en: "Animals" },
    ABSTRACT: { nl: "Abstract", en: "Abstract" }
  };

  var grid = document.getElementById("shopGrid");
  var filters = document.getElementById("shopFilters");
  var empty = document.getElementById("shopEmpty");

  function render(list) {
    grid.innerHTML = list.map(function (ph) {
      return '<div class="photo-card reveal" data-cat="' + ph.cat + '">' +
        '<a class="ph" href="fotoprint.html?id=' + encodeURIComponent(ph.id) + '">' +
          '<img src="' + ph.img + '" alt="' + tr(ph.title) + ' — catalogusvoorbeeld" loading="lazy">' +
          '<div class="wm"></div><span class="pno">Voorbereiding</span>' +
        '</a>' +
        '<div class="info">' +
          '<span class="cat">' + (DISP[ph.cat] ? tr(DISP[ph.cat]) : ph.cat) + '</span>' +
          '<h3><a href="fotoprint.html?id=' + encodeURIComponent(ph.id) + '">' + tr(ph.title) + '</a></h3>' +
          '<div class="row"><b>Prijs volgt</b><a class="buy" href="fotoprint.html?id=' + encodeURIComponent(ph.id) + '">Details</a></div>' +
        '</div>' +
      '</div>';
    }).join("");

    var real = HM.photos.filter(function (ph) { return (ph.price != null); });
    var showPlaceholder = list.length && list.every(function (ph) { return ph.price == null; });
    if (empty) {
      empty.hidden = !showPlaceholder;
      if (showPlaceholder) {
        empty.innerHTML = '<p class="eyebrow">Fotowinkel</p><h2 style="margin-top:1rem">' + (HM.lang==="nl"?"Binnenkort meer foto%27s.":"More photographs soon.") + '</h2>';
      }
    }
    HM.filters("#shopGrid", ".photo-card", "#shopFilters .f-chip");
  }

  if (filters) {
    filters.innerHTML = (HM.photoFilters || ["ALLES"]).map(function (c) {
      return '<button class="f-chip' + (c === "ALLES" ? " on" : "") + '" data-filter="' + c + '">' + (DISP[c] ? tr(DISP[c]) : c) + '</button>';
    }).join("");
  }
  render(HM.photos || []);
  HM.applyI18n();
})();