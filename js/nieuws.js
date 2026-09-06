/* Blog-pagina. Het eerste bericht (posts[0]) wordt groter, linksboven, getoond.
   Er zijn nog geen artikelen — wanneer Anna ze aanlevert in data.js (HM.posts)
   verschijnen ze hier automatisch. */
(function () {
  "use strict";
  const list = document.getElementById("journalList");
  if (!list) return;
  const posts = window.HM.posts || [];

  if (!posts.length){
    list.innerHTML = `<p class="blog-empty">Hier verschijnen straks making-ofs, <br>behind-the-scenes-beelden en verhalen uit mijn werkproces.</p>`;
    return;
  }

  list.innerHTML = posts.map((p, i) => {
    const big = i === 0 ? " featured" : "";
    return `
      <article class="reveal${big}" id="${p.slug}">
        <a class="img" href="${p.href || `#${p.slug}`}"><img src="${p.image}" alt="${p.title}" loading="lazy"></a>
        <div>
          <span class="j-date">${p.date || ""}${p.cat ? " · " + p.cat : ""}</span>
          <h2>${p.title}</h2>
          <p>${p.excerpt}</p>
          <a class="read" href="contact.html">Lees verder <span class="arr">→</span></a>
        </div>
      </article>`;
  }).join("");
})();