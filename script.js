(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  const year = document.querySelector("#year");

  if (year) year.textContent = new Date().getFullYear();

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.querySelector(".menu-icon").textContent = isOpen ? "☰" : "✕";
      toggle.querySelector(".sr-only").textContent = isOpen ? "Open navigation" : "Close navigation";
      nav.classList.toggle("is-open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.querySelector(".menu-icon").textContent = "☰";
        toggle.querySelector(".sr-only").textContent = "Open navigation";
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.querySelector(".menu-icon").textContent = "☰";
        toggle.querySelector(".sr-only").textContent = "Open navigation";
        toggle.focus();
      }
    });
  }
})();
