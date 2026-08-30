/* Nieuws / journal page */
(function () {
  "use strict";
  const list = document.getElementById("journalList");
  if (list){
    list.innerHTML = window.HM.posts.map(p => `
      <article class="reveal" id="${p.slug}">
        <a class="img" href="#${p.slug}"><img src="${p.image}" alt="${p.title}" loading="lazy"></a>
        <span class="j-date">${p.date} · ${p.cat}</span>
        <h2>${p.title}</h2>
        <p>${p.excerpt}</p>
        <a class="read" href="contact.html">Lees verder <span class="arr">→</span></a>
      </article>`).join("");
  }
})();
