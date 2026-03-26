// site age
(function () {
  const born = new Date("2026-03-25");
  const now = new Date();
  const days = Math.floor((now - born) / 86400000);
  const el = document.getElementById("site-age");
  if (el) {
    el.textContent =
      "this site has been alive for " + days + (days === 1 ? " day" : " days");
  }
})();
