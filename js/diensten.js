/* Diensten page (also feeds homepage services preview) */
(function () {
  "use strict";
  var HM = window.HM;
  function tr(o){ return HM.tr(o); }
  var list = document.getElementById("svcPageList");
  if (list) {
    list.innerHTML = HM.services.map(function (s) {
      return '<a class="svc-row2 reveal" href="' + (s.slug.indexOf("diensten/") === 0 ? s.slug : "diensten/" + s.slug) + '">' +
        '<span class="num">' + s.num + '</span>' +
        '<div><h3>' + tr(s.title) + '</h3>' +
          '<p class="sd">' + tr(s.desc) + '</p>' +
          (s.comingSoon ? '<span class="svc-badge" data-i18n="common.toekomstig">Toekomstig</span>' : '') +
        '</div>' +
        '<span class="link">' + HM.tr(HM.DICT["moreInfo"]) + ' <span class="line"></span></span>' +
      '</a>';
    }).join("");
  }
  HM.applyI18n();
})();