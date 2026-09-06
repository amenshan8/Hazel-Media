/* Story detail page */
(function () {
  "use strict";
  var HM = window.HM;
  function tr(o){ return HM.tr(o); }

  var slug = new URLSearchParams(location.search).get("slug") || HM.projects[0].slug;
  var p = HM.projects.find(function (x) { return x.slug === slug; }) || HM.projects[0];

  document.title = tr(p.title) + " — Hazel Media";
  document.querySelector('meta[name="description"]').setAttribute("content", tr(p.lead));

  /* related: up to 3 others */
  var related = HM.projects.filter(function (x) { return x.slug !== p.slug; }).slice(0, 3);
  var next = HM.projects[(HM.projects.indexOf(p) + 1) % HM.projects.length];

  var d = HM.DICT;
  document.getElementById("caseRoot").innerHTML =
    '<section class="case-hero">' +
      '<img src="' + p.heroImg + '" alt="' + tr(p.title) + '">' +
      '<div class="shade"></div>' +
      '<div class="ch-in">' +
        '<span class="ch-cat">' + p.category + '</span>' +
        '<div class="ch-meta">' +
          '<div>' + (HM.lang==="nl"?"Opdrachtgever":"Client") + ' <b>' + tr(p.client) + '</b></div>' +
          '<div>' + (HM.lang==="nl"?"Jaar":"Year") + ' <b>' + p.year + '</b></div>' +
          '<div>' + (HM.lang==="nl"?"Categorie":"Category") + ' <b>' + p.category + '</b></div>' +
          '<div>' + (HM.lang==="nl"?"Rol":"Role") + ' <b>' + tr(p.role) + '</b></div>' +
        '</div>' +
        '<h1>' + tr(p.title) + '</h1>' +
        '<p class="ch-lead">' + tr(p.lead) + '</p>' +
      '</div>' +
    '</section>' +

    '<div class="case-body">' +
      '<p class="lab eyebrow">Het verhaal</p><h2>Het verhaal</h2><p>' + tr(p.story) + '</p>' +
      '<p class="lab eyebrow">Mijn rol</p><h2>Mijn rol</h2><p>' + tr(p.roleText) + '</p>' +
      '<p class="lab eyebrow">Het proces</p><h2>Van vraag naar vorm</h2><p>' + tr(p.process) + '</p>' +
      '<p class="lab eyebrow">Het resultaat</p><h2>Het resultaat</h2><p>' + tr(p.result) + '</p>' +
      (p.source ? '<a class="btn btn--solid" href="' + p.source + '" target="_blank" rel="noopener" style="margin-top:1rem">' + tr(p.sourceLabel) + ' <span class="arr">↗</span></a>' : '') +
    '</div>' +

    '<div class="case-img"><img src="' + p.gallery[0] + '" alt="' + tr(p.title) + ' — beeld" loading="lazy"></div>' +

    '<div class="case-gallery"><h2>Achter het verhaal</h2><div class="hz-scroll">' +
      p.gallery.slice(1).map(function (g, i) { return '<img src="' + g + '" alt="' + tr(p.title) + ' — beeld ' + (i + 2) + '" loading="lazy">'; }).join("") +
    '</div></div>' +

    (related.length ? '<section class="section case-related"><div class="wrap">' +
      '<div class="sec-head reveal"><p class="eyebrow">' + tr(d["svc.relevant"]) + '</p><h2>' + tr(d["svc.relevant"]) + '</h2></div>' +
      '<div class="svc-rel">' + related.map(function (r) {
        return '<a class="r reveal" href="project.html?slug=' + r.slug + '"><img src="' + r.image + '" alt="' + tr(r.title) + '" loading="lazy"><span class="cap">' + tr(r.title) + '</span></a>';
      }).join("") + '</div>' +
    '</div></section>' : '') +

    '<section class="section case-next" style="padding:0"><div class="wrap">' +
      '<a href="project.html?slug=' + next.slug + '">' +
        '<span class="meta">' + (HM.lang==="nl"?"Volgende":"Next") + ' →</span>' +
        '<h3>' + tr(next.title) + '</h3>' +
        '<span class="arr">→</span>' +
      '</a>' +
    '</div></section>';

  HM.applyI18n();
})();