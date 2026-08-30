/* ============================================================
   HAZEL MEDIA — shared behaviour
   header, footer, custom cursor, reveal, filters, etc.
   ============================================================ */
(function () {
  "use strict";

  const NAV = [
    ["index.html","Home"],
    ["portfolio.html","Stories"],
    ["diensten.html","Diensten"],
    ["over-mij.html","Over Hazel"],
    ["fotowinkel.html","Fotowinkel"],
    ["nieuws.html","Journal"],
    ["contact.html","Contact"],
  ];
  const CTA = ["contact.html","Werk met mij"];

  const C = window.HM.contact || {};
  const contactValue = (value, fallback) => value || fallback;
  const contactLink = (kind, value, fallback) => value
    ? `<a href="${kind === "mail" ? "mailto:" : "tel:"}${kind === "tel" ? value.replace(/\s/g, "") : value}">${value}</a>`
    : `<span>${fallback}</span>`;

  /* ---------------- header / footer ---------------- */
  function buildHeader() {
    const mode = document.body.dataset.header || "cream";
    const active = document.body.dataset.page || "";
    const links = NAV.map(([href,label]) =>
      `<a href="${href}"${href.split(".")[0]===active?" class=\"active\"":""}>${label}</a>`
    ).join("");

    const el = document.createElement("header");
    el.className = "header header--" + mode;
    el.innerHTML = `
      <div class="header-inner">
        <a href="index.html" class="brand" aria-label="Hazel Media — home">
          <b>Hazel&nbsp;Media</b><span>Verhalen in beeld</span>
        </a>
        <nav class="nav" aria-label="Hoofdnavigatie">${links}<a class="cta" href="${CTA[0]}">${CTA[1]}</a></nav>
        <button class="burger" aria-label="Menu" aria-expanded="false">
          <span></span><span></span>
        </button>
      </div>`;
    document.body.prepend(el);

    /* mobile fullscreen menu */
    const menu = document.createElement("div");
    menu.className = "mobile-menu";
    menu.innerHTML = `
      ${NAV.map(([href,label],i)=>`<a class="mm-link" style="transition-delay:${i*60}ms" href="${href}">${label}</a>`).join("")}
      <a class="btn btn--accent mm-cta" href="${CTA[0]}">${CTA[1]} →</a>
      <div class="mm-foot"><span>${C.place||""}</span><span>${C.email||""}</span></div>`;
    document.body.appendChild(menu);

    const burger = el.querySelector(".burger");
    burger.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      menu.classList.remove("open"); document.body.style.overflow = "";
    }));

    /* scroll state */
    const onScroll = () => el.classList.toggle("is-scrolled", window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function buildFooter() {
    const foot = document.createElement("footer");
    foot.className = "footer";
    foot.innerHTML = `
      <div class="grain" aria-hidden="true"></div>
      <div class="wrap">
        <div class="foot-top">
          <div class="foot-brand">
            <b>Hazel Media</b><span>Verhalen in Beeld</span>
            <p>Journalistieke (video)producties die verder gaan dan de eerste blik.</p>
          </div>
          <div class="foot-col">
            <h4>Ontdek</h4>
            <a href="portfolio.html">Portfolio</a>
            <a href="diensten.html">Diensten</a>
            <a href="fotowinkel.html">Fotowinkel</a>
            <a href="nieuws.html">Journal</a>
          </div>
          <div class="foot-col">
            <h4>Over</h4>
            <a href="over-mij.html">Over mij</a>
            <a href="nieuws.html">Nieuws</a>
            <a href="contact.html">Contact</a>
          </div>
          <div class="foot-col">
            <h4>Contact</h4>
            <span>${contactValue(C.place, "[LOCATIE TOEVOEGEN]")}</span>
            ${contactLink("mail", C.email, "[E-MAIL TOEVOEGEN]")}
            ${contactLink("tel", C.phone, "[TELEFOON TOEVOEGEN]")}
            ${C.linkedin ? `<a href="https://${C.linkedin}" target="_blank" rel="noopener">LinkedIn</a>` : ""}
            ${C.instagram ? `<a href="https://${C.instagram}" target="_blank" rel="noopener">Instagram</a>` : ""}
          </div>
        </div>
        <div class="foot-bottom">
          <span>© ${new Date().getFullYear()} Hazel Media. Alle rechten voorbehouden.</span>
          <span class="foot-line"><a href="privacy.html">Privacy</a> · <a href="cookies.html">Cookies</a><span class="foot-dot"></span></span>
        </div>
      </div>`;
    document.body.appendChild(foot);
  }

  /* ---------------- custom cursor ---------------- */
  function cursor() {
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
      document.body.classList.add("cursor-active");
      return;
    }
    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    const view = document.createElement("div");
    view.className = "cursor-view"; view.textContent = "VIEW";
    document.body.append(dot, view);
    document.body.classList.add("hide-cursor");

    let x=0,y=0,vx=0,vy=0, viewing=false;
    window.addEventListener("mousemove", e => {
      x=e.clientX; y=e.clientY;
      dot.style.opacity=view.style.opacity=1;
    });
    (function loop(){
      vx += (x-vx)*0.18; vy += (y-vy)*0.18;
      dot.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      view.style.transform = `translate(${vx}px,${vy}px) translate(-50%,-50%) scale(${viewing?1:0.7})`;
      requestAnimationFrame(loop);
    })();
    document.addEventListener("mouseover", e => {
      const t = e.target.closest(".cursor-target, .feat, .video-card, .svc-preview, a[href]");
      viewing = !!t;
      view.classList.toggle("is-on", viewing);
      dot.style.transform = viewing ? "scale(0)" : "";
      dot.style.width = viewing ? "0px" : "8px";
      dot.style.height = viewing ? "0px" : "8px";
    });
  }

  /* ---------------- reveal on scroll ---------------- */
  function reveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(e=>e.classList.add("in")); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(e => io.observe(e));
  }

  /* ---------------- filters ---------------- */
  window.HM.filters = function (containerSel, itemAttr, activeSelector) {
    const container = document.querySelector(containerSel);
    if (!container) return;
    document.querySelectorAll(activeSelector).forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll(activeSelector).forEach(c=>c.classList.remove("on"));
        chip.classList.add("on");
        const f = chip.dataset.filter;
        container.querySelectorAll(itemAttr).forEach(item => {
          const show = f==="ALL" || item.dataset.cat.split(" ").includes(f);
          item.classList.toggle("hidden", !show);
        });
      });
    });
  };

  /* ---------------- magnetic buttons ---------------- */
  function magnetic() {
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    document.querySelectorAll(".btn").forEach(btn => {
      btn.addEventListener("mousemove", e => {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - r.left - r.width/2) * 0.22;
        const dy = (e.clientY - r.top - r.height/2) * 0.28;
        btn.style.transform = `translate(${dx}px,${dy}px)`;
      });
      btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
    });
  }

  /* ---------------- set page titles ---------------- */
  function titles() {
    document.querySelectorAll("[data-page-title]").forEach(el => {
      document.title = el.dataset.pageTitle + " — Hazel Media";
    });
  }

  function privacyChoices() {
    if (localStorage.getItem("hm_cookie_choice")) return;
    const banner = document.createElement("aside");
    banner.className = "cookie-banner";
    banner.setAttribute("aria-label", "Cookievoorkeuren");
    banner.innerHTML = `
      <p>Deze site gebruikt alleen noodzakelijke opslag voor je cookiekeuze en, in de fotowinkel, je mandje.</p>
      <div><button class="cookie-settings" type="button">Instellingen</button><button class="cookie-reject" type="button">Weigeren</button><button class="cookie-accept" type="button">Accepteren</button></div>`;
    const choose = value => { localStorage.setItem("hm_cookie_choice", value); banner.remove(); };
    banner.querySelector(".cookie-accept").addEventListener("click", () => choose("accepted"));
    banner.querySelector(".cookie-reject").addEventListener("click", () => choose("rejected"));
    banner.querySelector(".cookie-settings").addEventListener("click", () => {
      banner.querySelector("p").textContent = "Er zijn geen optionele trackers actief. Noodzakelijke lokale opslag bewaart alleen deze keuze en je mandje op dit apparaat.";
    });
    document.body.appendChild(banner);
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildHeader();
    buildFooter();
    cursor();
    reveal();
    magnetic();
    titles();
    privacyChoices();
  });
})();
