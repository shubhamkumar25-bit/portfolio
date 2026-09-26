import { achievements, experiences, projects, skillGroups } from "../data.js";
import {
  createAchievementCard,
  createButton,
  createExperienceTimeline,
  createProjectCard,
  createSkillCard
} from "../components.js";

const previewSkills = skillGroups.flatMap((group) => group.skills).slice(0, 8);
const featuredProject = projects.find((project) => project.featured) || projects[0];

const app = document.getElementById("homePage");
if (app) {
  app.innerHTML = `
    <section class="hero section">
      <article class="card">
        <div class="eyebrow">Open to Opportunities</div>
        <h1>Building Digital Experiences That Connect Technology, AI & Growth.</h1>
        <p>Web Developer and Digital Marketing professional experienced in React.js, JavaScript, Tailwind CSS, Node.js, Firebase, Firestore, SEO, content and social media management.</p>
        <div class="badge-row">
          <span class="badge">React.js</span>
          <span class="badge">JavaScript</span>
          <span class="badge">Tailwind CSS</span>
          <span class="badge">Node.js</span>
          <span class="badge">Firebase</span>
          <span class="badge">SEO</span>
          <span class="badge">Digital Marketing</span>
        </div>
        <div class="action-row">
          ${createButton({ label: "View All Skills", href: "/skills/", variant: "primary" })}
          ${createButton({ label: "View Projects", href: "/projects/", variant: "secondary" })}
          ${createButton({ label: "Contact Me", href: "/contact/", variant: "secondary" })}
        </div>
      </article>
      <article class="card">
        <p class="kicker">Featured Project</p>
        <h2>${featuredProject.title}</h2>
        <p>${featuredProject.description}</p>
        <div class="action-row">
          <a class="btn btn-primary" href="https://bharat-sathi-ai.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
          ${createButton({ label: "View Projects", href: "/projects/", variant: "secondary" })}
        </div>
      </article>
    </section>

    <section class="section card">
      <p class="kicker">Short About</p>
      <h2>Web Developer + Digital Marketing Professional</h2>
      <p>I build responsive web experiences while supporting SEO, content and online growth through practical execution.</p>
      <div class="action-row">${createButton({ label: "Read About Me", href: "/about/", variant: "secondary" })}</div>
    </section>

    <section class="section">
      <div class="page-head">
        <h2>Core Skills</h2>
      </div>
      <div class="grid-4">${previewSkills.map((skill) => createSkillCard(skill)).join("")}</div>
      <div class="action-row">${createButton({ label: "View All Skills", href: "/skills/", variant: "primary" })}</div>
    </section>

    <section class="section">
      <div class="page-head">
        <h2>Experience Preview</h2>
      </div>
      <div class="timeline">${createExperienceTimeline(experiences, true)}</div>
      <div class="action-row">${createButton({ label: "View Experience", href: "/experience/", variant: "secondary" })}</div>
    </section>

    <section class="section">
      <div class="page-head">
        <h2>Achievements Preview</h2>
      </div>
      <div class="grid-2">${achievements.map((item) => createAchievementCard(item)).join("")}</div>
      <div class="action-row">${createButton({ label: "View Achievements", href: "/achievements/", variant: "secondary" })}</div>
    </section>

    <section class="section card cta-band">
      <div>
        <h2>Ready to build something meaningful?</h2>
        <p>Open for opportunities in web development, SEO and digital growth-focused projects.</p>
      </div>
      ${createButton({ label: "Let's Connect", href: "/contact/", variant: "primary" })}
    </section>
  `;
}
