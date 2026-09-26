import { createSkillCard } from "../components.js";
import { skillGroups } from "../data.js";

const app = document.getElementById("skillsPage");

if (app) {
  app.innerHTML = `
    <section class="card section">
      <div class="page-head">
        <h1>My Skills</h1>
        <p>Technologies, tools and professional capabilities I use to build digital experiences and grow online presence.</p>
      </div>
    </section>
    ${skillGroups
      .map(
        (group) => `
      <section class="section">
        <div class="page-head"><h2>${group.title}</h2></div>
        <div class="grid-3">
          ${group.skills.map((skill) => createSkillCard(skill)).join("")}
        </div>
      </section>
    `
      )
      .join("")}
  `;
}
