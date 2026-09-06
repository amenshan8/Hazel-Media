/* ============================================================
   HAZEL MEDIA — shared behaviour
   header/footer, bilingual nav, diensten dropdown, mobile menu,
   subtle pink-dot cursor, reveal, filters, cookie consent.
   ============================================================ */
(function () {
  "use strict";
  var HM = window.HM;

  /* Pages inside /diensten/ need "../" so root-relative hrefs resolve correctly. */
  function root() {
    var path = location.pathname;
    var dir = path.lastIndexOf("/") > -1 ? path.substring(0, path.lastIndexOf("/")) : "";
    return (/\/diensten$/.test(dir)) ? "../" : "";
  }
  var R = null; /* cache */
  var BASE = function () { if (R === null) R = root(); return R; };
  function rel(url) { return BASE() + url; }

  var ICON = '<svg class="brand-icon" viewBox="0 0 32 32" aria-hidden="true"><rect x="1.5" y="1.5" width="29" height="29" rx="7" fill="#1D1168"/><rect x="7" y="7" width="18" height="18" rx="3" fill="none" stroke="#FCF8F2" stroke-width="1.6"/><circle cx="16" cy="16" r="3.4" fill="#D81746"/></svg>';
  function brandMark(name, taglineKey, tagline) {
    return '<a href="' + rel("index.html") + '" class="brand" aria-label="' + name + ' — Home">' + ICON +
      '<span class="brand-text"><b>' + name + '</b><span data-i18n="' + taglineKey + '">' + tagline + '</span></span></a>';
  }

  function svcLinks() {
    return (HM.services || []).map(function (s) {
      return '<a class="drop-link" href="' + rel(s.slug) + '"><span>' + s.num + '</span>' + HM.tr(s.title) + '</a>';
    }).join("");
  }

  /* ---------------- header ---------------- */
  function buildHeader() {
    var mode = document.body.dataset.header || "cream";
    var active = document.body.dataset.page || "";
    var navArr = HM.NAV[HM.lang] || HM.NAV.nl;
    var cta = HM.CTA[HM.lang] || HM.CTA.nl;
    var tagline = HM.tr(HM.brand.tagline);

    var links = navArr.map(function (item) {
      var href = item[0], label = item[1], kind = item[2];
      var isActive = href.split(".")[0] === active;
      if (kind === "services") {
        return '<div class="nav-item has-dropdown">' +
          '<button class="nav-btn' + (isActive ? " active" : "") + '" aria-expanded="false" aria-haspopup="true">' +
          label + '<span class="caret"></span></button>' +
          '<div class="dropdown" role="menu">' + svcLinks() + '</div></div>';
      }
      return '<a class="nav-link' + (isActive ? " active" : "") + '" href="' + rel(href) + '">' + label + '</a>';
    }).join("");

    var otherLang = HM.lang === "nl" ? "EN" : "NL";
    var otherLangFull = HM.lang === "nl" ? "English" : "Nederlands";

    var el = document.createElement("header");
    el.className = "header header--" + mode;
    el.innerHTML =
      '<div class="header-inner">' +
        brandMark(HM.brand.name, "tagline", tagline) +
        '<nav class="nav" aria-label="' + (HM.lang === "nl" ? "Hoofdnavigatie" : "Main navigation") + '">' +
          links +
          '<a class="cta" href="' + rel(cta[0]) + '">' + cta[1] + '</a>' +
        '</nav>' +
        '<div class="header-actions">' +
          '<button class="lang-switch" type="button" data-lang="' + HM.lang + '" title="' + otherLangFull + '">' + otherLang + '</button>' +
          '<button class="burger" aria-label="' + (HM.lang === "nl" ? "Menu" : "Menu") + '" aria-expanded="false"><span></span><span></span></button>' +
        '</div>' +
      '</div>';
    document.body.prepend(el);

    /* lang switch */
    el.querySelector(".lang-switch").addEventListener("click", function () {
      HM.setLang(HM.lang === "nl" ? "en" : "nl");
      location.reload();
    });

    /* dropdown (desktop) */
    var dd = el.querySelector(".has-dropdown");
    if (dd) {
      var btn = dd.querySelector(".nav-btn");
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = dd.classList.toggle("open");
        btn.setAttribute("aria-expanded", open);
      });
      document.addEventListener("click", function (e) {
        if (!dd.contains(e.target)) { dd.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
      });
      dd.querySelectorAll(".drop-link").forEach(function (a) {
        a.addEventListener("click", function () { dd.classList.remove("open"); });
      });
    }

    /* scroll state */
    var onScroll = function () { el.classList.toggle("is-scrolled", window.scrollY > 30); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------------- mobile menu (accordion for diensten) ---------------- */
  function buildMobileMenu() {
    var navArr = HM.NAV[HM.lang] || HM.NAV.nl;
    var cta = HM.CTA[HM.lang] || HM.CTA.nl;
    var contact = HM.contact;

    var items = navArr.map(function (item, i) {
      var href = item[0], label = item[1], kind = item[2];
      if (kind === "services") {
        return '<div class="mm-group">' +
          '<button class="mm-link mm-acc" aria-expanded="false">' + label + '<span class="caret"></span></button>' +
          '<div class="mm-sub">' + svcLinks() + '</div></div>';
      }
      return '<a class="mm-link" style="transition-delay:' + (i * 50) + 'ms" href="' + rel(href) + '">' + label + '</a>';
    }).join("");

    var menu = document.createElement("div");
    menu.className = "mobile-menu";
    menu.innerHTML =
      items +
      '<a class="mm-cta" href="' + rel(cta[0]) + '">' + cta[1] + ' →</a>' +
      '<div class="mm-foot"><span>' + contact.place + '</span><a href="mailto:' + contact.email + '">' + contact.email + '</a></div>';
    document.body.appendChild(menu);

    var burger = document.querySelector(".burger");
    var open = false;
    function toggle(v) { open = v; menu.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); document.body.style.overflow = open ? "hidden" : ""; }
    burger.addEventListener("click", function () { toggle(!open); });

    menu.addEventListener("click", function (e) {
      var acc = e.target.closest(".mm-acc");
      if (acc) {
        var grp = acc.closest(".mm-group");
        var exp = grp.classList.toggle("open");
        acc.setAttribute("aria-expanded", exp);
        return;
      }
      if (e.target.closest("a")) toggle(false);
    });

    var onResize = function () { if (window.innerWidth > 1024 && open) toggle(false); };
    window.addEventListener("resize", onResize);
  }

  /* ---------------- footer ---------------- */
  function buildFooter() {
    var navArr = HM.NAV[HM.lang] || HM.NAV.nl;
    var cta = HM.CTA[HM.lang] || HM.CTA.nl;
    var contact = HM.contact;
    var d = HM.DICT;

    var mainLinks = navArr.map(function (item) {
      return '<li><a href="' + rel(item[0]) + '">' + item[1] + '</a></li>';
    }).join("");
    var svcLinks2 = (HM.services || []).map(function (s) {
      return '<li><a href="' + rel(s.slug) + '">' + HM.tr(s.title) + '</a></li>';
    }).join("");

    var foot = document.createElement("footer");
    foot.className = "footer";
    foot.innerHTML =
      '<div class="wrap">' +
        '<div class="foot-top">' +
          '<div class="foot-brand">' +
            brandMark(HM.brand.name, "footer.tagline", HM.tr(HM.brand.tagline)) +
            '<p data-i18n="footer.slogan">' + HM.tr(d["footer.slogan"]) + '</p>' +
          '</div>' +
          '<div class="foot-col"><h4 data-i18n="footer.nav">' + HM.tr(d["footer.nav"]) + '</h4><ul>' + mainLinks + '</ul></div>' +
          '<div class="foot-col"><h4 data-i18n="footer.services">' + HM.tr(d["footer.services"]) + '</h4><ul>' + svcLinks2 + '</ul></div>' +
          '<div class="foot-col"><h4 data-i18n="footer.contact">' + HM.tr(d["footer.contact"]) + '</h4><ul>' +
            '<li><span>' + contact.place + ', ' + (HM.lang === "nl" ? "Nederland" : "The Netherlands") + '</span></li>' +
            '<li><a href="mailto:' + contact.email + '">' + contact.email + '</a></li>' +
            '<li><a href="tel:+31' + String(contact.phone).slice(1) + '">' + contact.phoneDisplay + '</a></li>' +
            '<li><span>Instagram · ' + contact.instagram + '</span></li>' +
            '<li><a href="' + rel(cta[0]) + '">' + cta[1] + '</a></li>' +
          '</ul></div>' +
        '</div>' +
        '<div class="foot-bottom">' +
          '<span>© ' + new Date().getFullYear() + ' ' + HM.brand.name + '. <span data-i18n="footer.rights">' + HM.tr(d["footer.rights"]) + '</span></span>' +
          '<span class="foot-line"><a href="' + rel("privacy.html") + '" data-i18n="footer.privacy">' + HM.tr(d["footer.privacy"]) + '</a><i></i><a href="' + rel("cookies.html") + '" data-i18n="footer.cookies">' + HM.tr(d["footer.cookies"]) + '</a></span>' +
        '</div>' +
      '</div>';
    document.body.appendChild(foot);
  }

  /* ---------------- subtle pink-dot cursor ---------------- */
  function cursor() {
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    var dot = document.createElement("div");
    dot.className = "cursor-dot"; dot.setAttribute("aria-hidden", "true");
    document.body.appendChild(dot);
    document.body.classList.add("has-pink-cursor");

    var x = 0, y = 0, cx = window.innerWidth / 2, cy = window.innerHeight / 2, shown = false;
    document.addEventListener("mousemove", function (e) {
      x = e.clientX; y = e.clientY;
      if (!shown) { shown = true; dot.style.opacity = "1"; }
    });
    (function loop() {
      cx += (x - cx) * 0.2; cy += (y - cy) * 0.2;
      dot.style.transform = "translate(" + cx + "px," + cy + "px) translate(-50%,-50%)";
      requestAnimationFrame(loop);
    })();
  }

  /* ---------------- reveal on scroll ---------------- */
  function reveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------------- filters ---------------- */
  window.HM.filters = function (containerSel, itemAttr, activeSelector) {
    var container = document.querySelector(containerSel);
    if (!container) return;
    document.querySelectorAll(activeSelector).forEach(function (chip) {
      chip.addEventListener("click", function () {
        document.querySelectorAll(activeSelector).forEach(function (c) { c.classList.remove("on"); });
        chip.classList.add("on");
        var f = chip.dataset.filter;
        container.querySelectorAll(itemAttr).forEach(function (item) {
          var cats = (item.dataset.cat || "").split(" ");
          var show = (f === "ALL" || f === "ALLES") || cats.indexOf(f) !== -1;
          item.classList.toggle("hidden", !show);
        });
      });
    });
  };

  /* ---------------- cookie consent ---------------- */
  function consent() {
    if (localStorage.getItem("hm_cookie_choice")) return;
    var nl = HM.lang === "nl";
    var banner = document.createElement("aside");
    banner.className = "cookie-banner";
    banner.setAttribute("aria-label", nl ? "Cookievoorkeuren" : "Cookie preferences");
    banner.innerHTML =
      '<p>' + (nl
        ? "Deze site gebruikt alleen noodzakelijke opslag voor je keuze, taal en het winkelmandje."
        : "This site uses only necessary local storage for your choice, language and the shop cart.") + '</p>' +
      '<div><button class="cookie-settings" type="button">' + (nl ? "Instellingen" : "Settings") + '</button>' +
      '<button class="cookie-reject" type="button">' + (nl ? "Weigeren" : "Reject") + '</button>' +
      '<button class="cookie-accept" type="button">' + (nl ? "Accepteren" : "Accept") + '</button></div>';
    var choose = function (v) { localStorage.setItem("hm_cookie_choice", v); banner.remove(); };
    banner.querySelector(".cookie-accept").addEventListener("click", function () { choose("accepted"); });
    banner.querySelector(".cookie-reject").addEventListener("click", function () { choose("rejected"); });
    banner.querySelector(".cookie-settings").addEventListener("click", function () {
      banner.querySelector("p").textContent = nl
        ? "Er zijn geen optionele trackers actief. Lokale opslag bewaart alleen deze keuze, taal en je mandje."
        : "No optional trackers are active. Local storage keeps only this choice, your language and your cart.";
    });
    document.body.appendChild(banner);
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildHeader();
    buildMobileMenu();
    buildFooter();
    cursor();
    reveal();
    consent();
    HM.applyI18n();
  });
})();