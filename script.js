(() => {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#nav");
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
  if (!button || !nav) return;
  const closeMenu = () => {
    nav.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
    button.querySelector(".sr-only").textContent = "Open menu";
    button.querySelector("span[aria-hidden='true']").textContent = "☰";
  };
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
    button.querySelector(".sr-only").textContent = open ? "Close menu" : "Open menu";
    button.querySelector("span[aria-hidden='true']").textContent = open ? "✕" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && nav.classList.contains("open")) {
      closeMenu();
      button.focus();
    }
  });
})();
