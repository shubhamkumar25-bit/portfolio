import { navLinks, socialLinks } from "./data.js";

function normalize(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function createButton({ label, href, variant = "primary", external = false, ariaLabel }) {
  const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
  const safeAria = ariaLabel ? ` aria-label="${ariaLabel}"` : "";
  return `<a class="btn btn-${variant}" href="${href}"${attrs}${safeAria}>${label}</a>`;
}

export function createHeader(pathname) {
  const current = normalize(pathname);
  const links = navLinks
    .map((link) => {
      const active = normalize(link.href) === current;
      return `<a class="nav-link${active ? " active" : ""}" href="${link.href}">${link.label}</a>`;
    })
    .join("");

  return `
    <header class="site-header" id="siteHeader">
      <div class="shell header-inner">
        <a class="brand" href="/" aria-label="Go to home page">
          <span class="brand-title">Shubham Kumar</span>
          <span class="brand-subtitle">Web Developer & Digital Marketing Executive</span>
        </a>
        <div class="nav-wrap">
          <button class="menu-btn" id="menuBtn" type="button" aria-label="Open navigation menu" aria-expanded="false">☰</button>
          <nav class="main-nav" id="mainNav" aria-label="Primary navigation">
            ${links}
            <a class="btn btn-cta" href="/contact/">Let's Connect</a>
          </nav>
        </div>
      </div>
    </header>
  `;
}

export function createFooter() {
  const links = navLinks.map((link) => `<a href="${link.href}">${link.label}</a>`).join("");
  const socials = socialLinks
    .map(
      (link) =>
        `<a href="${link.href}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${link.label}">${link.label}</a>`
    )
    .join("");

  return `
    <footer class="site-footer">
      <div class="shell footer-inner">
        <div>
          <h2>Shubham Kumar</h2>
          <p>Web Developer & Digital Marketing Executive</p>
        </div>
        <div class="footer-links" aria-label="Footer navigation links">${links}</div>
        <div class="footer-social" aria-label="Social links">${socials}</div>
      </div>
      <div class="shell footer-copy">© 2026 Shubham Kumar. All rights reserved.</div>
    </footer>
  `;
}

export function createSkillCard(skill) {
  const href = `/skills/${skill.slug}/`;
  const summary = skill.summary || "Practical capability used in projects and workflows.";
  return `
    <article class="card skill-card">
      <h3><a href="${href}" aria-label="Read details about ${skill.name}">${skill.name}</a></h3>
      <p>${summary}</p>
      <a class="text-link" href="${href}">View details</a>
    </article>
  `;
}

export function createExperienceTimeline(items, preview = false) {
  const list = preview ? items.slice(0, 2) : items;
  return list
    .map((item) => {
      const bullets =
        item.responsibilities && item.responsibilities.length
          ? `<ul>${item.responsibilities.map((point) => `<li>${point}</li>`).join("")}</ul>`
          : `<p class="muted">${item.company} - ${item.role}</p>`;
      const duration = item.duration ? `<p class="item-duration">${item.duration}</p>` : "";
      return `
        <article class="timeline-item card">
          <div class="timeline-dot" aria-hidden="true"></div>
          <h3>${item.company}</h3>
          <p class="item-role">${item.role}</p>
          ${duration}
          ${bullets}
        </article>
      `;
    })
    .join("");
}

export function createProjectCard(project) {
  const tech = project.technologies.map((item) => `<span class="badge">${item}</span>`).join("");
  const features = project.features.map((item) => `<li>${item}</li>`).join("");
  const links = [];
  if (project.liveDemo) {
    links.push(
      `<a class="btn btn-primary" href="${project.liveDemo}" target="_blank" rel="noopener noreferrer">${
        project.title === "BharatSaathi AI" ? "Live Demo ↗" : "Live Project ↗"
      }</a>`
    );
  }
  return `
    <article class="card project-card${project.featured ? " featured" : ""}">
      <p class="kicker">${project.category}</p>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="badge-row">${tech}</div>
      <ul class="feature-list">${features}</ul>
      <div class="action-row">${links.join("")}</div>
    </article>
  `;
}

export function createAchievementCard(item) {
  return `
    <article class="card achievement-card">
      <h3>${item.icon} ${item.title}</h3>
      <p>${item.detail}</p>
    </article>
  `;
}

export function createSocialCard({ label, href, icon }) {
  return `
    <article class="card social-card">
      <h3><span class="social-icon" aria-hidden="true">${icon}</span>${label}</h3>
      <a href="${href}" target="_blank" rel="noopener noreferrer">${href}</a>
    </article>
  `;
}
