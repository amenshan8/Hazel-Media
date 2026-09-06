/* Homepage rendering */
(function () {
  "use strict";
  var HM = window.HM;
  function tr(o){ return HM.tr(o); }

  /* 04 stories preview */
  var grid = document.getElementById("homeStories");
  if (grid) {
    grid.innerHTML = HM.projects.slice(0, 4).map(function (p) {
      return '<a class="feat reveal" href="project.html?slug=' + p.slug + '">' +
        '<span class="cat-label">' + p.category + '</span>' +
        '<div class="feat-media"><img src="' + p.image + '" alt="' + tr(p.title) + '" loading="lazy"></div>' +
        '<div class="feat-overlay">' +
          '<span class="f-meta">' + tr(p.client) + ' · ' + p.year + '</span>' +
          '<h3 class="f-title">' + tr(p.title) + '</h3>' +
          '<span class="f-role">' + tr(p.role) + '</span>' +
        '</div></a>';
    }).join("");
  }

  /* 05 personality — editorial sequential words */
  var pers = document.getElementById("personality");
  if (pers) {
    var words = [
      ["pers.nieuwsgierig", "pers.viewNieuws"],
      ["pers.zorgvuldig", "pers.viewZorg"],
      ["pers.betrokken", "pers.viewBetrok"],
      ["pers.creatief", "pers.viewCreatief"]
    ];
    pers.innerHTML = words.map(function (pair, i) {
      return '<div class="pers-item reveal" data-delay="' + (i % 2) + '">' +
        '<span class="pers-word">' + tr(HM.DICT[pair[0]]) + '.</span>' +
        '<p>' + tr(HM.DICT[pair[1]]) + '</p>' +
      '</div>';
    }).join("");
  }

  /* 06 services preview */
  var svc = document.getElementById("svcList");
  if (svc) {
    svc.innerHTML = HM.services.map(function (s) {
      return '<a class="svc-row2 reveal" href="' + s.slug + '">' +
        '<span class="num">' + s.num + '</span>' +
        '<div><h3>' + tr(s.title) + '</h3>' +
          '<p class="sd">' + tr(s.desc) + '</p>' +
          (s.comingSoon ? '<span class="svc-badge" data-i18n="common.toekomstig">Toekomstig</span>' : '') +
        '</div>' +
        '<span class="link">' + (HM.lang === "nl" ? "Meer" : "More") + '<span class="line"></span></span>' +
      '</a>';
    }).join("");
  }

  /* 09 experience */
  var exp = document.getElementById("experience");
  if (exp) {
    exp.innerHTML = HM.experience.map(function (e) {
      return '<div class="exp-row reveal">' +
        '<span class="e-year">' + tr(e.year) + '</span>' +
        '<div><div class="e-org">' + tr(e.org) + '</div>' +
          '<div class="e-role">' + tr(e.role) + '</div></div>' +
        '<p class="e-note">' + tr(e.note) + '</p>' +
      '</div>';
    }).join("");
  }

  HM.applyI18n();
})();