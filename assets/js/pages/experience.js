import { createButton, createExperienceTimeline } from "../components.js";
import { experiences } from "../data.js";

const app = document.getElementById("experiencePage");

if (app) {
  app.innerHTML = `
    <section class="card section">
      <div class="page-head">
        <h1>Experience</h1>
        <p>Hands-on internship and professional journey across web development, SEO and digital marketing.</p>
      </div>
    </section>

    <section class="section timeline">
      ${createExperienceTimeline(experiences, false)}
    </section>

    <section class="section">
      <div class="action-row">
        ${createButton({ label: "View Skills", href: "/skills/", variant: "secondary" })}
        ${createButton({ label: "View Projects", href: "/projects/", variant: "primary" })}
      </div>
    </section>
  `;
}
