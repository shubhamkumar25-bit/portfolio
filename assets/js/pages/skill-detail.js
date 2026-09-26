import { createButton } from "../components.js";
import { findSkillBySlug } from "../data.js";

const host = document.getElementById("skillDetailPage");
const slug = host?.dataset.skillSlug || "";
const skill = findSkillBySlug(slug);

if (host) {
  if (!skill) {
    host.innerHTML = `
      <section class="card section">
        <h1>Skill not found</h1>
        <p>The selected skill detail is not available.</p>
        <div class="action-row">${createButton({ label: "Back to Skills", href: "/skills/", variant: "secondary" })}</div>
      </section>
    `;
  } else {
    host.innerHTML = `
      <section class="card section">
        <p class="kicker">${skill.group}</p>
        <h1>${skill.name}</h1>
        <p>${skill.summary || "Practical capability used in professional projects and workflows."}</p>
        <div class="badge-row"><span class="badge">Technology Badge: ${skill.name}</span></div>
      </section>

      <section class="grid-2 section">
        <article class="card">
          <h2>Overview</h2>
          <p>${skill.summary || "A practical capability used in projects and growth workflows."}</p>
        </article>
        <article class="card">
          <h2>What I use it for</h2>
          <p>${skill.useFor || "Applied in real projects and day-to-day implementation tasks."}</p>
        </article>
        <article class="card">
          <h2>Key concepts</h2>
          <ul class="preview-list">${(skill.keyConcepts || ["Practical implementation", "Workflow integration"]).map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article class="card">
          <h2>Related projects</h2>
          <ul class="preview-list">${(skill.relatedProjects || ["Portfolio Website"]).map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article class="card">
          <h2>Related experience</h2>
          <ul class="preview-list">${(skill.relatedExperience || ["NavGurukul"]).map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      </section>

      <section class="section">
        <div class="action-row">
          ${createButton({ label: "Back to Skills", href: "/skills/", variant: "secondary" })}
          ${createButton({ label: "View Projects", href: "/projects/", variant: "primary" })}
        </div>
      </section>
    `;
  }
}
