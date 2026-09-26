import { createProjectCard } from "../components.js";
import { projects } from "../data.js";

const app = document.getElementById("projectsPage");

if (app) {
  app.innerHTML = `
    <section class="card section">
      <div class="page-head">
        <h1>Projects</h1>
        <p>Premium project cards with genuine work. No screenshots. No placeholder media.</p>
      </div>
    </section>

    <section class="section grid-2">
      ${projects.map((project) => createProjectCard(project)).join("")}
    </section>
  `;
}
