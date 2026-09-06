/* Verhalen (stories) archive page */
(function () {
  "use strict";
  var HM = window.HM;
  function tr(o){ return HM.tr(o); }

  var grid = document.getElementById("storyGrid");
  var filters = document.getElementById("storyFilters");

  /* filter chips: display label vs data value */
  var labels = { ALLES:"common.alles", TEKST:"TEKST", AUDIO:"AUDIO", VIDEO:"VIDEO", FOTOGRAFIE:"FOTOGRAFIE", MULTIMEDIAAL:"MULTIMEDIAAL" };
  var DISP = {
    ALLES: { nl:"Alles", en:"All" },
    TEKST: { nl:"Tekst", en:"Text" },
    AUDIO: { nl:"Audio", en:"Audio" },
    VIDEO: { nl:"Video", en:"Video" },
    FOTOGRAFIE: { nl:"Fotografie", en:"Photography" },
    MULTIMEDIAAL: { nl:"Multimediaal", en:"Multimedia" }
  };

  var fc = HM.storyFilters || ["ALLES","TEKST","AUDIO","VIDEO","FOTOGRAFIE","MULTIMEDIAAL"];
  if (filters) {
    filters.innerHTML = fc.map(function (c) {
      return '<button class="f-chip' + (c === "ALLES" ? " on" : "") + '" data-filter="' + c + '">' + (DISP[c] ? tr(DISP[c]) : c) + '</button>';
    }).join("");
  }

  if (grid) {
    grid.innerHTML = HM.projects.map(function (p) {
      return '<a class="s-card reveal" href="project.html?slug=' + p.slug + '" data-cat="' + p.category + '">' +
        '<span class="cat-label">' + p.category + '</span>' +
        '<div class="sm"><img src="' + p.image + '" alt="' + tr(p.title) + '" loading="lazy"></div>' +
        '<div class="so">' +
          '<span class="meta">' + tr(p.client) + ' · ' + p.year + '</span>' +
          '<h3>' + tr(p.title) + '</h3>' +
          '<span>' + tr(p.role) + '</span>' +
        '</div></a>';
    }).join("");
  }

  HM.filters("#storyGrid", ".s-card", "#storyFilters .f-chip");
  HM.applyI18n();
})();