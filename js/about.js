/* About page */
(function () {
  "use strict";
  var HM = window.HM;
  function tr(o){ return HM.tr(o); }
  var pers = document.getElementById("personality");
  if (!pers) return;
  var words = [
    ["pers.nieuwsgierig", "pers.viewNieuws"],
    ["pers.zorgvuldig", "pers.viewZorg"],
    ["pers.betrokken", "pers.viewBetrok"],
    ["pers.creatief", "pers.viewCreatief"]
  ];
  pers.innerHTML = words.map(function (pair, i) {
    return '<div class="pers-item reveal" data-delay="' + (i % 2) + '">' +
      '<span class="pers-word">' + tr(HM.DICT[pair[0]]) + '.</span><p>' + tr(HM.DICT[pair[1]]) + '</p></div>';
  }).join("");
  HM.applyI18n();
})();