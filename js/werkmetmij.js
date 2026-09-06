/* Werk met mij: services list + form (validates; no backend -> never claims sent) */
(function () {
  "use strict";
  var HM = window.HM;
  function tr(o){ return HM.tr(o); }

  /* compact services intro */
  var services = document.getElementById("wmServices");
  if (services) {
    services.innerHTML = HM.services.map(function (s) {
      return '<a class="svc-row2 reveal" href="' + s.slug + '">' +
        '<span class="num">' + s.num + '</span>' +
        '<div><h3>' + tr(s.title) + '</h3><p class="sd">' + tr(s.role) + '</p></div>' +
        '<span class="link">' + tr(HM.DICT["moreInfo"]) + ' <span class="line"></span></span>' +
      '</a>';
    }).join("");
  }

  /* experience */
  var exp = document.getElementById("experience");
  if (exp) {
    exp.innerHTML = HM.experience.map(function (e) {
      return '<div class="exp-row reveal">' +
        '<span class="e-year">' + tr(e.year) + '</span>' +
        '<div><div class="e-org">' + tr(e.org) + '</div><div class="e-role">' + tr(e.role) + '</div></div>' +
        '<p class="e-note">' + tr(e.note) + '</p></div>';
    }).join("");
  }

  /* form */
  var form = document.getElementById("wmForm");
  if (form) {
    var status = document.getElementById("wmStatus");
    var ref = document.getElementById("wm_ref");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (form.website.value) return;
      var hasRef = ref && ref.value.trim();
      status.style.color = "var(--muted)";
      status.textContent = (HM.lang === "nl"
        ? "Bedankt voor je bericht. " + (hasRef ? "De referentie noteren we erbij. " : "") + "Dit formulier is voorbereid maar nog niet gekoppeld aan een verzendservice — niets is verstuurd."
        : "Thank you for your message. " + (hasRef ? "We note the reference too. " : "") + "This form is prepared but not yet connected to a delivery service — nothing has been sent.");
      localStorage.setItem("hm_enquiry_" + Date.now(), JSON.stringify({
        naam: form.naam.value, email: form.email.value, tel: form.telefoon.value,
        bedrijf: form.bedrijf.value, referentie: ref ? ref.value : "", bericht: form.bericht.value
      }));
    });
  }

  HM.applyI18n();
})();