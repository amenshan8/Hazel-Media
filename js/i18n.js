/* ============================================================
   HAZEL MEDIA — internationalisation
   Lang is stored on the visitor's device; Dutch is the default.
   Elements use [data-i18n] (textContent), [data-i18n-html] (HTML)
   and [data-i18n-attr="..."] (attribute).
   ============================================================ */
(function () {
  "use strict";
  var HM = window.HM = (window.HM || {});

  HM.lang = localStorage.getItem("hm_lang") || "nl";

  HM.tr = function (obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return (obj[HM.lang] != null) ? obj[HM.lang] : (obj.nl || "");
  };

  HM.setLang = function (l) {
    HM.lang = (l === "en") ? "en" : "nl";
    try { localStorage.setItem("hm_lang", HM.lang); } catch (e) {}
    var html = document.documentElement;
    html.lang = HM.lang;
    applyI18n();
    window.dispatchEvent(new CustomEvent("hm:lang"));
  };

  HM.DICT = {
    /* ---------- shared chrome ---------- */
    "tagline":            { nl: "Verhalen in Beeld", en: "Stories in Pictures" },
    "brand":              { nl: "Hazel Media", en: "Hazel Media" },
    "footer.tagline":     { nl: "Verhalen in Beeld", en: "Stories in Pictures" },
    "footer.nav":         { nl: "Navigatie", en: "Navigation" },
    "footer.services":    { nl: "Diensten", en: "Services" },
    "footer.discover":    { nl: "Verken", en: "Explore" },
    "footer.contact":     { nl: "Contact", en: "Contact" },
    "footer.social":      { nl: "Volg me", en: "Follow me" },
    "footer.privacy":     { nl: "Privacy", en: "Privacy" },
    "footer.cookies":     { nl: "Cookies", en: "Cookies" },
    "footer.rights":      { nl: "Alle rechten voorbehouden.", en: "All rights reserved." },
    "footer.slogan":      { nl: "Verhalen die ontroeren, inspireren en reflecteren.", en: "Stories that move, inspire and reflect." },
    "footer.location":    { nl: "Veenendaal, Nederland", en: "Veenendaal, The Netherlands" },

    "common.home":        { nl: "Home", en: "Home" },
    "common.diensten":    { nl: "Diensten", en: "Services" },
    "common.verhalen":    { nl: "Verhalen", en: "Stories" },
    "common.blog":        { nl: "Blog", en: "Blog" },
    "common.verder":      { nl: "Lees verder", en: "Read more" },
    "common.alles":       { nl: "Alles", en: "All" },
    "common.toekomstig":  { nl: "Toekomstig", en: "Coming soon" },
    "common.binnenkort":  { nl: "Binnenkort", en: "Soon" },

    "viewStories":        { nl: "Bekijk de verhalen", en: "View the stories" },
    "moreThanImage":      { nl: "meer dan beeld", en: "more then an image" },
    "home.message":       { nl: "Hazel Media maakt verhalen die ontroeren, inspireren en reflecteren.", en: "Hazel Media creates stories that move, inspire, and reflect." },

    "exploreServices":    { nl: "Ontdek de diensten", en: "Explore services" },
    "moreInfo":           { nl: "Meer informatie", en: "More information" },
    "workWithMe":         { nl: "Werk met mij", en: "Work with me" },
    "workWithMeCta":      { nl: "Werk met mij", en: "Work with me" },

    /* ---------- personality words ---------- */
    "pers.nieuwsgierig":  { nl: "nieuwsgierig", en: "curious" },
    "pers.viewNieuws":    { nl: "Ik stel de vragen die nog niet gesteld zijn — en wacht op het antwoord dat ertoe doet.", en: "I ask the questions not yet asked — and wait for the answer that matters." },
    "pers.zorgvuldig":    { nl: "zorgvuldig", en: "careful" },
    "pers.viewZorg":      { nl: "Research, factcheck en montage: zorgvuldigheid zit in elke laag van het werk.", en: "Research, fact-checking and editing: care runs through every layer of the work." },
    "pers.betrokken":     { nl: "betrokken", en: "engaged" },
    "pers.viewBetrok":    { nl: "Elk verhaal gaat over mensen. Ik ben er om te luisteren en zorgvuldig te vertellen.", en: "Every story is about people. I am there to listen and to tell carefully." },
    "pers.creatief":      { nl: "creatief", en: "creative" },
    "pers.viewCreatief":  { nl: "Vorm volgt inhoud: ik zoek de vertelwijze die een onderwerp verder brengt.", en: "Form follows content: I look for the telling that moves a subject forward." },

    /* ---------- service page labels ---------- */
    "svc.intro":          { nl: "Introductie", en: "Introduction" },
    "svc.wat":            { nl: "Waar het om draait", en: "What it is about" },
    "svc.voor":           { nl: "Voor wie", en: "For whom" },
    "svc.levert":         { nl: "Wat je ontvangt", en: "What you receive" },
    "svc.werk":           { nl: "Mijn rol", en: "My role" },
    "svc.voorbeelden":    { nl: "Voorbeelden van werk", en: "Examples of work" },
    "svc.proces":         { nl: "Hoe het werkt", en: "How it works" },
    "svc.faq":            { nl: "Vragen", en: "Frequently asked" },
    "svc.relevant":       { nl: "Relevante verhalen", en: "Related stories" },

    /* ---------- werk met mij ---------- */
    "wm.title":           { nl: "Heb je een verhaal?", en: "Do you have a story?" },
    "wm.lede":            { nl: "Laten we kijken hoe we het in beeld kunnen brengen.", en: "Let's look at how we can bring it to picture." },
    "wm.blue":            { nl: "Laten we kijken hoe we het <em class=\"em\">in beeld</em> brengen.", en: "Let's look at how we bring it <em class=\"em\">to picture.</em>" },
    "wm.heroLead":        { nl: "Vertel je verhaal — laten we samen kijken hoe we het in beeld brengen.", en: "Tell your story — let's look together at how we bring it to picture." },
    "wm.experience":      { nl: "Ervaring", en: "Experience" },
    "wm.experienceLede":  { nl: "Een greep uit de praktijk.", en: "A selection from practice." },
    "wm.details":         { nl: "Contactgegevens", en: "Contact details" },
    "wm.form.title":      { nl: "Vertel over je project", en: "Tell me about your project" },

    "f.naam":             { nl: "Naam", en: "Name" },
    "f.email":            { nl: "E-mail", en: "E-mail" },
    "f.telefoon":         { nl: "Telefoon", en: "Phone" },
    "f.bedrijf":          { nl: "Bedrijf / organisatie", en: "Company / organisation" },
    "f.referentie":       { nl: "Referentie", en: "Reference" },
    "f.bericht":          { nl: "Bericht", en: "Message" },
    "f.consent":          { nl: "Ik ga ermee akkoord dat mijn gegevens worden gebruikt om op deze aanvraag te reageren.", en: "I agree that my details may be used to respond to this request." },
    "f.submit":           { nl: "Verstuur bericht", en: "Send message" },
    "f.placeholder":      { nl: "Waar gaat het over? Wat heb je nodig?", en: "What is it about? What do you need?" },

    /* ---------- verhalen ---------- */
    "verhalen.title":     { nl: "Verhalen", en: "Stories" },
    "verhalen.lede":      { nl: "Verhalen die ontroeren, inspireren en reflecteren.", en: "Stories that move, inspire and reflect." },
    "verhalen.zei":       { nl: "Geselecteerd werk", en: "Selected work" },
    "verhalen.alle":      { nl: "Alle verhalen", en: "All stories" },

    /* ---------- home sections ---------- */
    "home.storiesHead":   { nl: "Verhalen <em class=\"em\">in beeld</em>", en: "Stories <em class=\"em\">in pictures</em>" },
    "home.howIWork":      { nl: "Hoe ik werk", en: "How I work" },
    "home.servicesHead":  { nl: "Van idee tot <em class=\"em\">laatste beeld.</em>", en: "From idea to <em class=\"em\">final image.</em>" },
    "home.aboutLead":     { nl: "Journalistiek begint voor mij met <em class=\"em\">nieuwsgierigheid.</em>", en: "Journalism begins for me with <em class=\"em\">curiosity.</em>" },
    "home.aboutP1":       { nl: "Ik ben Anna van den Hazel, journalist uit Veenendaal. Ik werk met beeld en woorden: research, productie, camera en montage, zodat een verhaal samenhang houdt van de eerste vraag tot het laatste beeld.", en: "I am Anna van den Hazel, a journalist from Veenendaal. I work with image and words: research, production, camera and editing, so a story holds together from the first question to the final image." },
    "about.more":         { nl: "Dit is Hazel", en: "This is Hazel" },
    "home.expHead":       { nl: "Een greep uit <em class=\"em\">de praktijk.</em>", en: "A selection from <em class=\"em\">practice.</em>" },
    "home.final":         { nl: "Klaar voor <em class=\"em\">je verhaal?</em>", en: "Ready for <em class=\"em\">your story?</em>" },

    /* ---------- diensten ---------- */
    "diensten.title":     { nl: "Diensten", en: "Services" },
    "diensten.lede":      { nl: "Van het eerste idee tot het laatste beeld.", en: "From the first idea to the final image." },

    /* ---------- fotowinkel ---------- */
    "shop.title":         { nl: "Fotowinkel", en: "Photo Shop" },
    "shop.lede":          { nl: "Verhalen om mee naar huis te nemen.", en: "Stories to take home." },

    /* ---------- blog ---------- */
    "blog.title":         { nl: "Blog", en: "Blog" },
    "blog.lede":          { nl: "Making-of, achter de schermen en veldwerk.", en: "Making-of, behind the scenes and fieldwork." },
    "blog.whatKeeps":     { nl: "Wat mij bezighoudt", en: "What keeps me busy" },
    "blog.empty":         { nl: "Binnenkort meer verhalen.", en: "More stories soon." },

    /* ---------- over hazel ---------- */
    "about.title":        { nl: "Over Hazel", en: "About Hazel" },
    "about.role":         { nl: "Journalist • Beeld • Verhaal", en: "Journalist • Image • Story" },
    "about.introLead":    { nl: "Journalistiek begint voor mij met <em class=\"em\">nieuwsgierigheid.</em>", en: "Journalism begins for me with <em class=\"em\">curiosity.</em>" },
    "about.p1":           { nl: "Ik ben Anna van den Hazel (2004), journalist uit Veenendaal. Sinds 2022 studeer ik Journalistiek aan de Hogeschool Utrecht. Van nature wil ik begrijpen hoe de wereld in elkaar zit; die nieuwsgierigheid is de motor achter mijn werk.", en: "I am Anna van den Hazel (2004), a journalist from Veenendaal. Since 2022 I study Journalism at Hogeschool Utrecht. Naturally I want to understand how the world works; that curiosity is the engine behind my work." },
    "about.p2":           { nl: "Mijn interesses liggen bij misdaad, psychologie en maatschappelijke vraagstukken. Ik vind het interessant om complexe onderwerpen uit te pluizen en te onderzoeken welke verhalen achter het nieuws schuilgaan.", en: "My interests lie in crime, psychology and social questions. I find it interesting to pick apart complex subjects and investigate which stories hide behind the news." },
    "about.p3":           { nl: "In mijn werk combineer ik research met beeld en productie. Zo kan een verhaal zorgvuldig groeien: van eerste onderzoek en voorbereiding tot een vorm die mensen daadwerkelijk kan raken.", en: "In my work I combine research with image and production. That way a story can grow carefully: from first research and preparation to a form that can truly move people." },
    "about.howIWork":     { nl: "Hoe ik werk", en: "How I work" },
    "about.gallery":      { nl: "Achter de schermen", en: "Behind the scenes" },
    "about.moreAbout":    { nl: "Meer over", en: "More about" },

    /* ---------- error states ---------- */
    "e404":               { nl: "Verhaal niet gevonden.", en: "Story not found." },
    "e404New":            { nl: "Terug naar home", en: "Back to home" }
  };

  function applyI18n() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var d = HM.DICT[el.getAttribute("data-i18n")];
      if (d) el.textContent = HM.tr(d);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var d = HM.DICT[el.getAttribute("data-i18n-html")];
      if (d) el.innerHTML = HM.tr(d);
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr");
      var parts = spec.split(":");
      var attr = parts[0];
      var d = HM.DICT[parts[1]];
      if (attr === "lang") { el.setAttribute("lang", HM.lang); }
      else if (d) { el.setAttribute(attr, HM.tr(d)); }
    });
  }
  HM.applyI18n = applyI18n;
  HM.changeLang = function (l) { HM.setLang(l); };

  document.addEventListener("DOMContentLoaded", applyI18n);
})();