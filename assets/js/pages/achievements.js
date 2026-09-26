import { achievements } from "../data.js";
import { createAchievementCard, createButton } from "../components.js";

const app = document.getElementById("achievementsPage");

if (app) {
  app.innerHTML = `
    <section class="card section">
      <div class="page-head">
        <h1>Achievements & Recognition</h1>
        <p>Verified highlights from practical project and hackathon participation.</p>
      </div>
    </section>

    <section class="section grid-2">
      ${achievements.map((item) => createAchievementCard(item)).join("")}
      <article class="card">
        <h3>BharatSaathi AI</h3>
        <p>Main project highlighted in Build for Good 2026 Hackathon.</p>
      </article>
    </section>

    <section class="section">
      <div class="action-row">
        ${createButton({ label: "View Project", href: "/projects/", variant: "primary" })}
        ${createButton({ label: "Contact Me", href: "/contact/", variant: "secondary" })}
      </div>
    </section>
  `;
}
