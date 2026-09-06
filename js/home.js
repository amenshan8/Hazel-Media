/* Homepage rendering */
(function () {
  "use strict";
  const HM = window.HM;
  const feats = HM.projects.filter(p => p.featured);

  /* Featured projects */
  const grid = document.querySelector(".feat-grid");
  if (grid) {
    grid.innerHTML = feats.map(p => `
      <a class="feat reveal ${p.layout}" href="project.html?slug=${p.slug}">
        <div class="feat-media">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
          <div class="feat-overlay" style="background:${p.swatch}">
            <span class="f-view">VIEW</span>
            <span class="f-meta meta">${p.category} / ${p.client}</span>
            <h3 class="f-title">${p.title}</h3>
            <span class="f-role">${p.role}</span>
          </div>
        </div>
      </a>`).join("");
  }

  /* Services — cinematic hover */
  const list = document.getElementById("svcList");
  const preview = document.getElementById("svcPreview");
  if (list && preview) {
    list.innerHTML = HM.services.map(s => `
      <button class="svc-row" type="button" data-img="${s.img}" data-cap="${s.cap}" aria-label="Bekijk ${s.title}">
        <span class="num">${s.num}</span>
        <div>
          <h3>${s.title}</h3>
          <p class="svc-desc">${s.desc}</p>
        </div>
        <span class="arr">↗</span>
      </button>`).join("");
    const imgs = HM.services.map(() => { const i = new Image(); i.className=""; i.style.display="none"; preview.appendChild(i); return i; });
    const rows = list.querySelectorAll(".svc-row");
    let active = 0;
    const show = idx => {
      rows.forEach((r,i)=>r.classList.toggle("active", i===idx));
      const s = HM.services[idx];
      const img = imgs[idx];
      img.className = "on";
      img.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:cover;";
      img.src = s.img;
      preview.querySelectorAll("img").forEach(o => { if(o!==img){ o.classList.remove("on"); o.src=""; } });
      preview.querySelector(".svc-placeholder").style.display="none";
      let cap = preview.querySelector(".svc-cap");
      if(!cap){ cap=document.createElement("span"); cap.className="svc-cap"; preview.appendChild(cap); }
      cap.textContent = s.cap;
    };
    rows.forEach((r,i)=> {
      r.addEventListener("mouseenter", ()=>show(i));
      r.addEventListener("focus", ()=>show(i));
      r.addEventListener("click", ()=>show(i));
    });
    show(0);
  }

  /* Clients */
  const cg = document.getElementById("clientGrid");
  if (cg) {
    cg.innerHTML = HM.clients.map(c => `
      <div class="logo-cell reveal"><div><b>${c.name}</b><small>${c.sub}</small></div></div>`).join("");
  }

  /* Reviews */
  const track = document.getElementById("revTrack");
  const nav = document.getElementById("revNav");
  const count = document.getElementById("revCount");
  if (track && HM.reviews.length) {
    track.innerHTML = HM.reviews.map(r => `
      <div class="rev">
        <blockquote><span class="q">“</span>${r.quote}<span class="q">”</span></blockquote>
        <div class="who">
          <div><b>${r.name.replace(/^—\s*/,"")}</b><span>${r.role}</span></div>
        </div>
      </div>`).join("");
    let i = 0;
    const N = HM.reviews.length;
    const render = () => {
      track.style.transform = `translateX(-${i*100}%)`;
      nav.querySelectorAll(".rev-dot").forEach((d,k)=>d.classList.toggle("on",k===i));
      count.textContent = `${String(i+1).padStart(2,"0")} / ${String(N).padStart(2,"0")}`;
    };
    nav.innerHTML = HM.reviews.map((_,k)=>`<button class="rev-dot${k===0?" on":""}" aria-label="Review ${k+1}"></button>`).join("");
    nav.querySelectorAll(".rev-dot").forEach((d,k)=>d.addEventListener("click",()=>{i=k;render();}));
    let t = setInterval(()=>{ i=(i+1)%N; render(); }, 6000);
    track.addEventListener("mouseenter", ()=>clearInterval(t));
    render();
  } else if (track) {
    track.closest(".reviews")?.remove();
  }

  /* Journal */
  const j = document.getElementById("journal");
  if (j) {
    j.innerHTML = HM.posts.map(p => `
      <article class="j-card reveal">
        <a class="img" href="${p.href || `nieuws.html#${p.slug}`}"><img src="${p.image}" alt="${p.title}" loading="lazy"></a>
        <span class="j-date">${p.date} · ${p.cat}</span>
        <h3><a href="${p.href || `nieuws.html#${p.slug}`}">${p.title}</a></h3>
        <p>${p.excerpt}</p>
        <a class="read" href="${p.href || `nieuws.html#${p.slug}`}">Lees verder <span class="arr">→</span></a>
      </article>`).join("");
  }
})();
