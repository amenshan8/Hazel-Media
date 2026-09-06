/* ============================================================
   HAZEL MEDIA — shared behaviour
   header, footer, custom cursor, reveal, filters, etc.
   ============================================================ */
(function () {
  "use strict";

  /* De zes diensten onder het Diensten-submenu. */
  const SERVICES = [
    ["redacteur.html","Redacteur"],
    ["producer.html","Producer"],
    ["camera-journalist.html","Camera-journalist"],
    ["fotograaf.html","Fotograaf"],
    ["videograaf.html","Videograaf"],
    ["drone.html","Drone"],
  ];
  /* NAV: Home · Verhalen · Diensten (submenu) · Fotowinkel · Blog · Over Hazel.
     Werk met mij is de aparte CTA-knop die naar contact.html leidt. */
  const NAV = [
    ["index.html","Home"],
    ["portfolio.html","Verhalen"],
    ["diensten.html","Diensten","sub"],
    ["fotowinkel.html","Fotowinkel"],
    ["nieuws.html","Blog"],
    ["over-mij.html","Over Hazel"],
  ];
  const CTA = ["contact.html","Werk met mij"];

  const C = window.HM.contact || {};
  const contactValue = (value, fallback) => value || fallback;
  const contactLink = (kind, value, fallback) => value
    ? `<a href="${kind === "mail" ? "mailto:" : "tel:"}${kind === "tel" ? value.replace(/\s/g, "") : value}">${value}</a>`
    : `<span>${fallback}</span>`;

  /* ---------------- header / footer ---------------- */
  function navLink(href, label, active) {
    return `<a href="${href}"${href.split(".")[0]===active?" class=\"active\"":""}>${label}</a>`;
  }

  function buildHeader() {
    const mode = document.body.dataset.header || "cream";
    const active = document.body.dataset.page || "";
    const subServices = SERVICES.map(([href,label]) => navLink(href, label, active)).join("");

    /* Desktop: elke NAV entry, met een submenu-toggle voor Diensten. */
    const links = NAV.map(([href,label,kind]) => {
      if (kind === "sub") {
        const on = active === "diensten" ? " active" : "";
        return `<div class="nav-item">
          <button type="button" class="nav-trigger${on}" aria-expanded="false" aria-haspopup="true" aria-controls="nav-sub-diensten">
            ${label} <span class="caret" aria-hidden="true">▾</span>
          </button>
          <div class="nav-sub" id="nav-sub-diensten" role="menu">${subServices}</div>
        </div>`;
      }
      return navLink(href, label, active);
    }).join("");

    const el = document.createElement("header");
    el.className = "header header--" + mode;
    el.innerHTML = `
      <div class="header-inner">
        <!-- LOGO — vervang hier desgewenst de naam of het sublabel -->
        <a href="index.html" class="brand" aria-label="Hazel Media — home">
          <b>Hazel&nbsp;Media</b><span>Verhalen in beeld</span>
        </a>
        <nav class="nav" aria-label="Hoofdnavigatie">${links}<a class="cta" href="${CTA[0]}">${CTA[1]}</a></nav>
        <button class="burger" aria-label="Menu" aria-expanded="false">
          <span></span><span></span>
        </button>
      </div>`;
    document.body.prepend(el);

    /* Desktop Diensten-submenu: openen op klik (en hover via CSS), sluiten bij buitenklik. */
    const navItem = el.querySelector(".nav-item");
    const navTrigger = el.querySelector(".nav-trigger");
    if (navItem && navTrigger) {
      const setOpen = open => {
        navItem.classList.toggle("open", open);
        navTrigger.setAttribute("aria-expanded", open);
      };
      navTrigger.addEventListener("click", e => {
        e.stopPropagation();
        setOpen(!navItem.classList.contains("open"));
      });
      navItem.addEventListener("mouseleave", () => setOpen(false));
      document.addEventListener("click", e => {
        if (!navItem.contains(e.target)) setOpen(false);
      });
      document.addEventListener("keydown", e => {
        if (e.key === "Escape") setOpen(false);
      });
    }

    /* mobile fullscreen menu + toegankelijk accordion voor Diensten */
    const mmNav = NAV.map(([href,label,kind],i) => {
      const delay = `style="transition-delay:${i*60}ms"`;
      if (kind === "sub") {
        return `<div class="mm-accord" ${delay}>
          <button class="mm-toggle" type="button" aria-expanded="false" aria-controls="mm-sub-diensten">
            <span class="mm-link" style="transition-delay:0ms">Diensten</span><span class="mm-caret" aria-hidden="true">▾</span>
          </button>
          <div class="mm-sub" id="mm-sub-diensten" hidden>
            ${SERVICES.map(([h,l],j)=>`<a class="mm-sub-link" href="${h}" style="transition-delay:${j*40}ms">${l}</a>`).join("")}
          </div>
        </div>`;
      }
      return `<a class="mm-link" ${delay} href="${href}">${label}</a>`;
    }).join("");

    const menu = document.createElement("div");
    menu.className = "mobile-menu";
    menu.innerHTML = `
      ${mmNav}
      <a class="btn btn--accent mm-cta" href="${CTA[0]}">${CTA[1]} →</a>
      <div class="mm-foot"><span>${C.place||""}</span><span>${C.email||""}</span></div>`;
    document.body.appendChild(menu);

    const burger = el.querySelector(".burger");
    burger.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    const closeMenu = () => { menu.classList.remove("open"); document.body.style.overflow = ""; };
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

    /* Mobiel Diensten-accordion */
    const mmToggle = menu.querySelector(".mm-toggle");
    if (mmToggle) {
      mmToggle.addEventListener("click", () => {
        const open = mmToggle.classList.toggle("open");
        mmToggle.setAttribute("aria-expanded", open);
        const sub = menu.querySelector("#mm-sub-diensten");
        if (sub) sub.hidden = !open;
      });
      menu.querySelectorAll(".mm-sub a").forEach(a => a.addEventListener("click", closeMenu));
    }

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
            <a href="portfolio.html">Verhalen</a>
            <a href="diensten.html">Diensten</a>
            <a href="fotowinkel.html">Fotowinkel</a>
            <a href="nieuws.html">Blog</a>
          </div>
          <div class="foot-col">
            <h4>Over</h4>
            <a href="over-mij.html">Over Hazel</a>
            <a href="nieuws.html">Blog</a>
            <a href="contact.html">Werk met mij</a>
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

  /* ---------------- custom cursor ----------------
     Eenvoudige kleine roze stip (geen groot custom cursorelement). */
  function cursor() {
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
      document.body.classList.add("cursor-active");
      return;
    }
    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    document.body.append(dot);
    document.body.classList.add("hide-cursor");
    let x=-100,y=-100;
    window.addEventListener("mousemove", e => { x=e.clientX; y=e.clientY; });
    (function loop(){
      dot.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
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
