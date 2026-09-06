/* Diensten-pagina */
(function () {
  "use strict";
  const list = document.getElementById("svcPageList");
  if (list){
    list.innerHTML = window.HM.services.map(s => `
      <div class="svc-page-row reveal">
        <span class="num">${s.num}</span>
        <div>
          <h2>${s.title}${s.future ? ' <span class="pill-coming" style="vertical-align:middle">Binnenkort</span>' : ""}</h2>
          <p class="sd">${s.desc}</p>
        </div>
        <a class="link" href="${s.page}">Meer informatie →</a>
      </div>`).join("");
  }
})();