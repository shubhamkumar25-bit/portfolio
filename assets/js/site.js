import { createFooter, createHeader } from "./components.js";

function initShell() {
  const headerHost = document.getElementById("appHeader");
  const footerHost = document.getElementById("appFooter");

  if (headerHost) {
    headerHost.innerHTML = createHeader(window.location.pathname);
  }
  if (footerHost) {
    footerHost.innerHTML = createFooter();
  }

  const header = document.getElementById("siteHeader");
  const nav = document.getElementById("mainNav");
  const menuBtn = document.getElementById("menuBtn");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    });

    nav.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (!link) return;
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Open navigation menu");
    });
  }

  window.addEventListener(
    "scroll",
    () => {
      if (header) {
        header.classList.toggle("scrolled", window.scrollY > 10);
      }
    },
    { passive: true }
  );
}

function initPageTransition() {
  const root = document.documentElement;
  root.classList.add("is-ready");
}

initShell();
initPageTransition();
