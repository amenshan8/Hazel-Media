/* Product detail: intentionally non-transactional until a real product catalogue,
   licences and payment provider have been confirmed. */
(function () {
  "use strict";
  var HM = window.HM;
  function tr(o){ return HM.tr(o); }
  var id = new URLSearchParams(location.search).get("id") || HM.photos[0].id;
  var ph = HM.photos.find(function (x) { return x.id === id; }) || HM.photos[0];
  document.title = tr(ph.title) + " — Hazel Media";
  document.getElementById("photoProd").innerHTML = `
    <div class="big">
      <img src="${ph.img}" alt="${tr(ph.title)} — watermarked catalog preview">
      <div class="wm"></div>
    </div>
    <div class="pp-info">
      <span class="pno">FOTO ${ph.id}</span>
      <h1>${tr(ph.title)}</h1>
      <p class="desc">${tr(ph.desc)}</p>
      <div class="pp-opt"><h4>Beschikbaarheid</h4><p>Deze fotowinkel staat klaar voor een definitieve catalogus. Oplage, formaat, prijs en beschikbaarheid worden per foto toegevoegd voordat deze te koop gaat.</p></div>
      <div class="pp-opt"><h4>Licenties</h4>
        <p><b>Digitaal, print, commercieel en exclusief</b><br>De definitieve licentievoorwaarden worden per product in eenvoudige taal toegevoegd. Er worden nu geen rechten of downloads verkocht.</p>
      </div>
      <a class="btn btn--solid" href="werk-met-mij.html">Vraag naar deze foto <span class="arr">→</span></a>
    </div>`;
})();
