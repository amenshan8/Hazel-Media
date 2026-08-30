/* Diensten page */
(function () {
  "use strict";
  const list = document.getElementById("svcPageList");
  if (list){
    list.innerHTML = window.HM.services.map(s => `
      <div class="svc-page-row reveal">
        <span class="num">${s.num}</span>
        <div>
          <h2>${s.title}</h2>
          <p class="sd">${s.desc}</p>
          <p class="svc-extra"><b>Voor wie</b>${s.for}</p>
          <p class="svc-extra"><b>Wat je ontvangt</b>${s.deliver}</p>
        </div>
        <a class="link" href="contact.html">Vraag aan →</a>
      </div>`).join("");
  }
})();
