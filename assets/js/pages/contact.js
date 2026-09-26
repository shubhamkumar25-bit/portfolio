import { createSocialCard } from "../components.js";
import { contactInfo, socialLinks } from "../data.js";

const app = document.getElementById("contactPage");

if (app) {
  app.innerHTML = `
    <section class="card section">
      <div class="page-head">
        <h1>Let's Connect</h1>
        <p>Have an opportunity, project or collaboration in mind? Let's connect.</p>
      </div>
      <p><strong>Email:</strong> <a href="mailto:${contactInfo.email}">${contactInfo.email}</a></p>
    </section>

    <section class="section grid-3">
      ${socialLinks.map((item) => createSocialCard(item)).join("")}
    </section>
  `;
}
