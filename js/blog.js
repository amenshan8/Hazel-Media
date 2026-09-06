/* Blog page: featured article (upper-left, blue frame) + smaller posts + empty state */
(function () {
  "use strict";
  var HM = window.HM;
  function tr(o){ return HM.tr(o); }

  var grid = document.getElementById("blogGrid");
  var empty = document.getElementById("blogEmpty");
  if (!grid) return;

  var posts = HM.posts || [];
  var featured = posts.filter(function (p) { return p.featured; })[0] || posts[0];
  var rest = posts.filter(function (p) { return p !== featured; });

  /* featured post is a placeholder -> show empty-state friendly prompt too */
  var renderCard = function (p, big) {
    return (
      '<div class="' + (big ? "blog-featured" : "") + ' reveal">' +
        (big ? '<span class="blue-frame"></span>' : '') +
        '<div class="card">' +
          '<a class="b-card" href="#' + p.slug + '"><img src="' + p.img + '" alt="' + tr(p.title) + '" loading="lazy"></a>' +
          '<p class="b-meta">' + tr(p.date) + '</p>' +
          '<h3 class="b-title"><a href="#' + p.slug + '">' + tr(p.title) + '</a></h3>' +
          '<p class="b-excerpt">' + tr(p.excerpt) + '</p>' +
        '</div>' +
      '</div>'
    );
  };

  if (featured) {
    grid.innerHTML = renderCard(featured, true) + rest.map(function (p) { return renderCard(p, false); }).join("");
  } else {
    grid.style.display = "none";
    empty.hidden = false;
    empty.innerHTML = '<p class="eyebrow">Blog</p><h2 style="margin-top:1rem">' + tr(HM.DICT["blog.empty"]) + '</h2>';
  }

  HM.applyI18n();
})();