/* ============================================================
   HAZEL MEDIA — photo shop cart (client-side demo)
   Cart is stored in localStorage. No payment backend connected —
   checkout is a clearly-labelled placeholder integration.
   ============================================================ */
(function () {
  "use strict";

  let cart = JSON.parse(localStorage.getItem("hm_cart") || "[]");

  const save = () => localStorage.setItem("hm_cart", JSON.stringify(cart));
  const fmt = n => "€" + n.toFixed(2).replace(".", ",");

  function qty(id){ const it=cart.find(c=>c.id===id); return it?it.qty:0; }
  function total(){
    return cart.reduce((s,it)=>{
      let p = it.price;
      if (it.license === "rights") p = (it.price||0) + (it.rightsFee||0);
      return s + p * it.qty;
    },0);
  }
  function count(){ return cart.reduce((s,it)=>s+it.qty,0); }

  function add(item){
    const ex = cart.find(c => c.id===item.id && c.license===item.license);
    if (ex) ex.qty += item.qty; else cart.push({...item});
    save(); render();
  }
  function setQty(id, q){ const it=cart.find(c=>c.id===id); if(it){ it.qty=q; if(it.qty<=0) cart=cart.filter(c=>c.id!==id); } save(); render(); }
  function remove(id){ cart=cart.filter(c=>c.id!==id); save(); render(); }

  /* ---- DOM ---- */
  const badge = document.querySelector(".cart-toggle .n");
  const drawer = document.getElementById("cartDrawer");
  const itemsEl = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");

  function render(){
    if (badge){ badge.textContent=count(); badge.classList.toggle("on", count()>0); }
    if (!drawer) return;
    itemsEl.innerHTML = cart.length ? cart.map(it => `
      <div class="cart-item">
        <img src="${it.img}" alt="${it.title}">
        <div class="ci-info">
          <b>${it.title}</b>
          <span class="ci-meta">${it.license==="rights"?"Met rechten":"Foto"} #${it.id} · ${it.version||""}</span>
          <div class="ci-row">
            <span>${fmt(it.price + (it.license==="rights"?(it.rightsFee||0):0))}</span>
            <div class="qty">
              <button data-id="${it.id}" data-d="-1">−</button><span>${it.qty}</span><button data-id="${it.id}" data-d="1">+</button>
            </div>
          </div>
          <button class="rm" data-rm="${it.id}">Verwijder</button>
        </div>
      </div>`).join("")
      : `<p style="color:var(--muted);padding:2rem 0;text-align:center">Je winkelmandje is leeg.</p>`;
    totalEl.textContent = fmt(total());
  }

  document.addEventListener("click", e => {
    const d = e.target.closest("[data-d]");
    if (d){ const it=cart.find(c=>c.id===d.dataset.id); if(it) setQty(d.dataset.id, it.qty + parseInt(d.dataset.d,10)); }
    const r = e.target.closest("[data-rm]");
    if (r) remove(r.dataset.rm);
    if (e.target.closest(".cart-close")) drawer.classList.remove("open");
    if (e.target.closest(".cart-toggle")) drawer.classList.toggle("open");
    if (e.target.closest(".cart")) return;
  });

  window.HM.shop = { add, setQty, remove, total, count, fmt, render, qty };
  window.HM.cartOpen = () => drawer.classList.add("open");
})();
