/* Checkout — Dutch customer flow, placeholder payment */
(function () {
  "use strict";
  const S = window.HM.shop;
  if (!S) return;
  const items = document.getElementById("coItems");
  const sum = document.getElementById("coSum");
  const form = document.getElementById("coForm");
  const thanks = document.getElementById("coThanks");
  const payNote = document.getElementById("payNote");

  let pay = "ideal";
  document.querySelectorAll(".pay-btn").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".pay-btn").forEach(x=>x.classList.remove("on"));
    b.classList.add("on");
    pay = b.dataset.pay;
    payNote.textContent = pay==="ideal"
      ? "iDEAL-demo — de daadwerkelijke betaling wordt gekoppeld zodra een betaalprovider is aangesloten."
      : "Plaatshouder voor extra betaalmethoden (creditcard, Bancontact, Klarna e.d.). Toevoegen zodra provider is gekoppeld.";
  }));

  function cartItems(){
    const items = JSON.parse(localStorage.getItem("hm_cart") || "[]");
    const total = items.reduce((s,it)=> s + (it.price + (it.license==="rights"?it.rightsFee:0)) * it.qty, 0);
    return { items, total };
  }

  function render(){
    const { items, total } = cartItems();
    document.getElementById("coItems").innerHTML = items.length
      ? items.map(it => `<div class="co-sum"><div><span>${it.title} (#${it.id.replace(/-r$/,"")} · ${it.license==="rights"?"rechten":"print"} · ×${it.qty})</span><span>${S.fmt((it.price+(it.license==="rights"?it.rightsFee:0))*it.qty)}</span></div></div>`).join("")
      : `<p style="color:var(--muted)">Je mandje is leeg.</p>`;
    sum.innerHTML = `<div><span>Subtotaal</span><span>${S.fmt(total)}</span></div><div><span>Verzending</span><span>Gratis</span></div><div class="total"><span>Totaal</span><span>${S.fmt(total)}</span></div>`;
    const btn = document.getElementById("coPay");
    btn.textContent = items.length ? `Betaal ${S.fmt(total)} met ${pay.toUpperCase()} →` : "Je mandje is leeg";
    btn.disabled = !items.length;
  }
  render();

  form.addEventListener("submit", e => {
    e.preventDefault();
    if (!form.checkValidity()){ form.reportValidity(); return; }
    const { total } = cartItems();
    form.style.display = "none";
    thanks.style.display = "block";
    thanks.querySelector("p").textContent =
      `Demo-afronding voor ${total>0?S.fmt(total):"€0,00"} via ${pay.toUpperCase()}. Geen echte betaling verwerkt.`;
    localStorage.removeItem("hm_cart");
    if (S.render) S.render();
  });
})();
