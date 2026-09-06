/* Contact form — validates locally and never claims delivery without a backend. */
(function () {
  "use strict";
  const form = document.getElementById("contactForm");
  if (!form) return;
  const status = document.getElementById("contactStatus");

  form.addEventListener("submit", e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    if (form.website.value) return;
    status.textContent = "Dit formulier is voorbereid maar nog niet gekoppeld aan een verzendservice. Er is niets verstuurd. Voeg eerst een e-mailadres of beveiligde formulierkoppeling toe.";
  });
})();
