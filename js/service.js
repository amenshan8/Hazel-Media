/* Service detail page renderer */
(function () {
  "use strict";
  var HM = window.HM;
  function tr(o){ return HM.tr(o); }

  var id = document.body.dataset.service || "redacteur";
  var s = HM.services.find(function (x) { return x.id === id; }) || HM.services[0];

  document.title = tr(s.title) + " — Hazel Media";

  var related = HM.projects.slice(0, 3);
  var root = document.getElementById("svcRoot");
  if (!root) return;

  var d = HM.DICT;
  root.innerHTML =
    '<section class="section" style="padding-top:calc(var(--nav-h) + 3rem)"><div class="wrap svc-hero">' +
      '<div class="imgwrap reveal"><div class="frame"><img src="' + s.img + '" alt="' + tr(s.title) + '" fetchpriority="high"></div></div>' +
      '<div class="reveal" data-delay="1">' +
        '<p class="crumb"><a href="../index.html"><span data-i18n="common.home">Home</span></a><span class="sep">/</span><a href="../diensten.html"><span data-i18n="common.diensten">Diensten</span></a><span class="sep">/</span>' + s.num + '</p>' +
        '<p class="role" style="margin-top:1.4rem">' + tr(s.role) + '</p>' +
        '<h1>' + tr(s.title) + (s.comingSoon ? ' <span class="svc-badge">' + tr(d["common.toekomstig"]) + '</span>' : '') + '</h1>' +
        '<p class="sd-lead">' + tr(s.intro) + '</p>' +
        '<a class="btn btn--solid" href="../werk-met-mij.html" style="margin-top:2rem"><span data-i18n="moreInfo">Meer informatie</span> <span class="arr">→</span></a>' +
      '</div>' +
    '</div></section>' +

    '<section class="section section--cream-2" style="padding-top:0"><div class="wrap svc-blocks">' +
      '<div class="reveal"><p class="lab">' + tr(d["svc.werk"]) + '</p><h2 data-i18n="svc.wat">Waar het om draait</h2><p>' + tr(s.body) + '</p></div>' +
      '<div class="reveal"><p class="lab">' + tr(d["svc.voor"]) + '</p><h2>' + tr(d["svc.voor"]) + '</h2><p>' + tr(s.for) + '</p></div>' +
      '<div class="reveal"><p class="lab">' + tr(d["svc.levert"]) + '</p><h2>' + tr(d["svc.levert"]) + '</h2><p>' + tr(s.deliver) + '</p></div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head reveal"><p class="eyebrow">' + tr(d["svc.relevant"]) + '</p><h2>' + tr(d["svc.relevant"]) + '</h2></div>' +
      '<div class="svc-rel">' + related.map(function (p) {
        return '<a class="r reveal" href="../project.html?slug=' + p.slug + '"><img src="' + p.image + '" alt="' + tr(p.title) + '" loading="lazy"><span class="cap">' + tr(p.title) + '</span></a>';
      }).join("") + '</div>' +
    '</div></section>' +

    '<section class="section center" style="padding-top:0"><div class="wrap">' +
      '<p class="eyebrow reveal" data-i18n="wm.lede">Laten we kijken hoe we het in beeld kunnen brengen.</p>' +
      '<a class="btn btn--accent reveal" data-delay="1" href="../werk-met-mij.html" style="margin-top:2rem"><span data-i18n="workWithMe">Werk met mij</span> <span class="arr">→</span></a>' +
    '</div></section>';

  HM.applyI18n();
})();